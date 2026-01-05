import { StyleSheet, Text , View} from 'react-native';
import { useState } from 'react';
import Question from './components/Question';
import OptionButton from './components/OptionButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
  },
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
  },
  {
    question: "Which language is used in React Native?",
    options: ["Java", "Python", "JavaScript", "C++"],
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionPress = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
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
              onPress={handleOptionPress}
            />
          ))}
          </View>
          <Text style={styles.footer}>
            <Text style={styles.footerText}>Powered by QuizApp</Text>
          </Text>
        </>
      ) : (
        <Text style={styles.completedText}>Quiz Completed 🎉</Text>
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
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 16,
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
});
    //