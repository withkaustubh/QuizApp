import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { questions } from '../data/quizData';
import { COLORS } from '../constants/colors';
import Question from '../components/Question';
import OptionButton from '../components/OptionButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NextButton from '../components/NextButton';

export default function QuizScreen({ onFinish }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // State arrays to track history
    const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
    const [isQuestionChecked, setIsQuestionChecked] = useState(new Array(questions.length).fill(false));
    const [score, setScore] = useState(0);

    // Derived state for current question
    const optionSelected = userAnswers[currentQuestion];
    const isChecked = isQuestionChecked[currentQuestion];

    const handleOptionPress = (index) => {
        if (!isChecked) {
            const newAnswers = [...userAnswers];
            newAnswers[currentQuestion] = index;
            setUserAnswers(newAnswers);
        }
    };

    const handleCheck = () => {
        const newChecked = [...isQuestionChecked];
        newChecked[currentQuestion] = true;
        setIsQuestionChecked(newChecked);

        // Score Logic
        // Only valid if we haven't already scored this question? 
        // Current logic: simple increment. 
        // Improve: Keep score simple as requested.
        if (optionSelected !== null && optionSelected === questions[currentQuestion].correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const OnPressNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            onFinish(score);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Header onBack={currentQuestion > 0 ? handlePrev : null} />
            <View style={styles.QuestionCard} >
                <Question question={questions[currentQuestion].question} />
                {questions[currentQuestion].options.map((option, index) => (
                    <OptionButton
                        key={index}
                        option={option}
                        onPress={() => handleOptionPress(index)}
                        isSelected={optionSelected === index}
                        disabled={isChecked}
                        isCorrect={isChecked && index === questions[currentQuestion].correctAnswer}
                        isWrong={isChecked && optionSelected === index && index !== questions[currentQuestion].correctAnswer}
                    />
                ))}

                {/* Check Button */}
                <Pressable
                    style={[
                        styles.checkButton,
                        { backgroundColor: isChecked ? COLORS.optionDefault : COLORS.primary, opacity: optionSelected === null ? 0.5 : 1 }
                    ]}
                    onPress={handleCheck}
                    disabled={optionSelected === null || isChecked}
                >
                    <Text style={styles.buttonText}>Check</Text>
                </Pressable>
            </View>
            <NextButton onPress={OnPressNext} disabled={!isChecked} />
            <Footer currentQuestion={currentQuestion} totalQuestions={questions.length} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        alignItems: 'center',
        paddingBottom: 40,
    },
    QuestionCard: {
        marginTop: '10%', // Reduced from 25% to allow more space
        padding: 15,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 10,
        width: '85%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 10,
    },
    checkButton: {
        marginTop: 20,
        width: '100%',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
