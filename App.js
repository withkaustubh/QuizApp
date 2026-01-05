import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Question from './components/Question';
import OptionButton from './components/OptionButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    correctAnswer: 0,
  },
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
  },
  {
    question: "Which language is used in React Native?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: 2,
  },
];

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
          <View style={styles.headerContainer}>
            <Text style={styles.appName}>QuizApp</Text>
            <Text style={styles.appTagline}>Test your knowledge!</Text>
          </View>
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
          <View style={styles.navigation}>
            <Pressable
              onPress={() => OnPressNext()}
              style={({ pressed }) => [
                styles.navButton,
                { backgroundColor: pressed ? '#0b2b29' : '#0d3f3a' }
              ]}
            >
              <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', marginRight: 8 }}>
                Next
              </Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
          <Text style={styles.footerText}>Question {currentQuestion + 1} of {questions.length}</Text>
        </View>
        </>
      ) : (
        <>
          <Text style={styles.completedText}>Quiz Completed 🎉</Text>
          {/* <Pressable onPress = {setCurrentQuestion(0)}>
          <Text>click me to restart the quiz</Text>
        </Pressable> */}
        </>
      )}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2827ff',
    // marginTop: 40,
    flexDirection: 'column',
    // marginBottom: 20,
    // alignItems: 'center',
    // paddingLeft: 20,
    // justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#0d1211ff',
    borderRadius: 5,
    color: '#ffffff',
  },
  appName: {
    fontFamily: 'Times New Roman',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingBottom: 5,
  },
  appTagline: {
    fontSize: 13,
    color: '#ffffff',
  },

  QuestionCard: {
    marginTop: '30%',
    padding: 15,
    backgroundColor: '#0d1211ff',
    borderRadius: 10,
    color: '#ffffff',
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4f4e4eff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 10,
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#ffffff',
  },
  completedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '50%',
  },
  navButton: {
    backgroundColor: '#0d3f3a',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginLeft: '60%',
    width : 100,
  },
  navigation: {
    flex: 1,
    marginTop: 40,
  },
});
//