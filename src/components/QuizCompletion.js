import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function QuizCompletion() {
    return (
        <View style={styles.container}>
            <Text style={styles.completedText}>Quiz Completed 🎉</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    completedText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
    },
});
