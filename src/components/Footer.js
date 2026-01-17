import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Footer({ currentQuestion, totalQuestions }) {
    const { theme } = useTheme();
    return (
        <View style={styles.footer}>
            <Text style={[styles.footerText, { color: theme.text, textDecorationColor: theme.text }]}>Question {currentQuestion + 1} of {totalQuestions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        fontSize: 14,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    },
});
