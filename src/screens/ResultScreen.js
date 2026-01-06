import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';

export default function ResultScreen({ score, totalQuestions, username, onRetry }) {
    return (
        <View style={styles.container}>
            <Text style={styles.completedText}>Quiz Completed 🎉</Text>
            {username ? <Text style={styles.nameText}>Well done, {username}!</Text> : null}
            <Text style={styles.scoreText}>
                Score: {score} / {totalQuestions}
            </Text>

            <Pressable style={styles.retryButton} onPress={onRetry}>
                <Text style={styles.retryText}>Restart Quiz</Text>
            </Pressable>
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
    completedText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: 10,
    },
    scoreText: {
        fontSize: 20,
        color: COLORS.accent,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    nameText: {
        fontSize: 18,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginBottom: 20,
    },
    retryButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    retryText: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
