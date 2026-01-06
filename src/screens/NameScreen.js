import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../constants/colors';

export default function NameScreen({ onStart }) {
    const [name, setName] = useState('');

    const handlePress = () => {
        if (name.trim()) {
            onStart(name);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.QuestionCard}>
                <Text style={styles.titleText}>Enter your name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your name"
                    placeholderTextColor={COLORS.textSecondary}
                    value={name}
                    onChangeText={setName}
                />
                <Pressable style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Start Quiz</Text>
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
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
        color: COLORS.text,
        fontWeight: '600',
    },
    input: {
        width: '100%',
        borderColor: COLORS.textSecondary,
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        color: COLORS.text,
        fontSize: 16,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
