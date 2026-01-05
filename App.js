import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { questions } from './src/data/quizData';
import { COLORS } from './src/constants/colors';
import Question from './src/components/Question';
import OptionButton from './src/components/OptionButton';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import QuizCompletion from './src/components/QuizCompletion';
import NextButton from './src/components/NextButton';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState(null);

  const handleOptionPress = (index) => {
    if (currentQuestion < questions.length) {
      setOptionSelected(index);
    }
  };

  const OnPressNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setOptionSelected(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentQuestion < questions.length ? (
        <>
          <Header />
          <View style={styles.QuestionCard} >
            <Question question={questions[currentQuestion].question} />
            {questions[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                option={option}
                onPress={() => handleOptionPress(index)}
                isSelected={optionSelected === index}
              />
            ))}
          </View>
          <NextButton onPress={OnPressNext} />
          <Footer currentQuestion={currentQuestion} totalQuestions={questions.length} />
        </>
      ) : (
        <QuizCompletion />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    flexDirection: 'column',
  },
  QuestionCard: {
    marginTop: '30%',
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
});

//