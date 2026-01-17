import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function NameScreen({ navigation }) {
    const [name, setName] = useState('');
    const { theme, toggleTheme, isDarkMode } = useTheme();

    const handlePress = () => {
        if (name.trim()) {
            navigation.navigate('Home', { name });
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Pressable style={styles.themeButton} onPress={toggleTheme}>
                <Ionicons name={isDarkMode ? "moon" : "sunny"} size={24} color={theme.text} />
            </Pressable>
            <View style={[styles.QuestionCard, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
                <Text style={[styles.titleText, { color: theme.text }]}>Enter your name</Text>
                <TextInput
                    style={[styles.input, { borderColor: theme.textSecondary, color: theme.text }]}
                    placeholder="Your name"
                    placeholderTextColor={theme.textSecondary}
                    value={name}
                    onChangeText={setName}
                />
                <Pressable style={[styles.button, { backgroundColor: theme.primary }]} onPress={handlePress}>
                    <Text style={[styles.buttonText, { color: theme.buttonText }]}>Start Quiz</Text>
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
    },
    QuestionCard: {
        padding: 20,
        borderRadius: 10,
        width: '85%',
        maxWidth: 500,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 10,
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '600',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
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
