import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Footer({ currentQuestion, totalQuestions }) {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Question {currentQuestion + 1} of {totalQuestions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
    },
    footerText: {
        color: COLORS.text,
        fontSize: 14,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: COLORS.text,
    },
});
