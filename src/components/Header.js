import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.appName}>QuizApp</Text>
            <Text style={styles.appTagline}>Test your knowledge!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 10,
        padding: 15,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 5,
    },
    appName: {
        fontFamily: 'Times New Roman',
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        paddingBottom: 5,
    },
    appTagline: {
        fontSize: 13,
        color: COLORS.text,
    },
});
