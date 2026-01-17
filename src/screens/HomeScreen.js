import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';

export default function HomeScreen({ navigation, route }) {
    const { name } = route.params || { name: 'User' };
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Header />
            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.text }]}>Welcome, {name}!</Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, { backgroundColor: theme.primary, shadowColor: theme.shadow }]}
                    onPress={() => navigation.navigate('Quiz', { name })}
                >
                    <Text style={[styles.buttonText, { color: theme.buttonText }]}>Start Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, styles.secondaryButton, { backgroundColor: theme.cardBackground, borderColor: theme.primary }]}
                    onPress={() => navigation.navigate('Profile', { name })}
                >
                    <Text style={[styles.buttonText, { color: theme.text }]}>View Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        paddingVertical: 16,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    secondaryButton: {
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    }
});
