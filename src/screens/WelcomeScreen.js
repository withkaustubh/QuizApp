import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { COLORS } from '../constants/colors';

export default function WelcomeScreen({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <View style={styles.container}>
            <View style={styles.QuestionCard}>
                <Text style={styles.welcomeText}>Welcome to Quiz App 🎉</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    QuestionCard: {
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
        height: 200, // Fixed height for welcome card to look good
    },
    welcomeText: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.text,
    },
});
