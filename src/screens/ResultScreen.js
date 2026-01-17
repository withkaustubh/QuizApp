import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { questions } from '../data/quizData';
import { Ionicons } from '@expo/vector-icons';

export default function ResultScreen({ navigation, route }) {
    const { score, name } = route.params || { score: 0, name: 'User' };
    const totalQuestions = questions.length;
    const { theme, toggleTheme, isDarkMode } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Pressable style={styles.themeButton} onPress={toggleTheme}>
                <Ionicons name={isDarkMode ? "moon" : "sunny"} size={24} color={theme.text} />
            </Pressable>
            <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
                <Text style={[styles.completedText, { color: theme.text }]}>Quiz Completed 🎉</Text>
                {name ? <Text style={[styles.nameText, { color: theme.textSecondary }]}>Well done, {name}!</Text> : null}
                <Text style={[styles.scoreText, { color: theme.accent }]}>
                    Score: {score} / {totalQuestions}
                </Text>

                <Pressable
                    style={[styles.retryButton, { backgroundColor: theme.primary }]}
                    onPress={() => navigation.navigate('Quiz', { name })}
                >
                    <Text style={[styles.retryText, { color: theme.buttonText }]}>Restart Quiz</Text>
                </Pressable>

                <Pressable
                    style={[styles.retryButton, styles.homeButton, { backgroundColor: theme.cardBackground, borderColor: theme.textSecondary }]}
                    onPress={() => navigation.navigate('Home', { name })}
                >
                    <Text style={[styles.retryText, { color: theme.text }]}>Go Home</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '85%',
        maxWidth: 500,
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 10,
    },
    completedText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    scoreText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    nameText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    retryButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    homeButton: {
        borderWidth: 1,
    },
    retryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    themeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        padding: 10,
        zIndex: 10,
    },
});
