import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { questions } from './src/data/quizData';

import WelcomeScreen from './src/screens/WelcomeScreen';
import NameScreen from './src/screens/NameScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);

  const handleWelcomeFinish = () => {
    setScreen('name');
  };

  const handleNameSubmit = (name) => {
    setUsername(name);
    setScreen('quiz');
  };

  // QuizScreen now handles the score internally and passes final score
  const handleQuizFinish = (finalScore) => {
    setScore(finalScore);
    setScreen('result');
  };

  const handleRetry = () => {
    setScore(0);
    setScreen('quiz');
    // Or 'welcome' if full restart desired. 'quiz' keeps username.
    // User asked for "reset button", usually implies retrying the quiz.
  };

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'welcome' && <WelcomeScreen onFinish={handleWelcomeFinish} />}
      {screen === 'name' && <NameScreen onStart={handleNameSubmit} />}
      {screen === 'quiz' && <QuizScreen onFinish={handleQuizFinish} />}
      {screen === 'result' && (
        <ResultScreen
          score={score}
          totalQuestions={questions.length}
          username={username}
          onRetry={handleRetry}
        />
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
});