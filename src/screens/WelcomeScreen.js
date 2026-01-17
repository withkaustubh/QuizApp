import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function WelcomeScreen({ navigation }) {
    const { theme, toggleTheme, isDarkMode } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Name');
        }, 2500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Pressable style={styles.themeButton} onPress={toggleTheme}>
                <Ionicons name={isDarkMode ? "moon" : "sunny"} size={24} color={theme.text} />
            </Pressable>
            <View style={[styles.QuestionCard, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
                <Text style={[styles.welcomeText, { color: theme.text }]}>Welcome to Quiz App 🎉</Text>
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
        borderRadius: 10,
        width: '85%',
        maxWidth: 500,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 10,
        height: 200,
    },
    welcomeText: {
        fontSize: 28,
        textAlign: 'center',
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
