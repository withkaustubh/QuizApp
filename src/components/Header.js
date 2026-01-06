import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';

import { Ionicons } from '@expo/vector-icons';

export default function Header({ onBack }) {
    return (
        <View style={styles.headerContainer}>
            {onBack && (
                <Pressable
                    onPress={onBack}
                    style={({ pressed }) => [
                        styles.backButton,
                        { backgroundColor: pressed ? 'rgba(255,255,255,0.1)' : 'transparent' }
                    ]}
                >
                    <Ionicons name="chevron-back" size={24} color={COLORS.text} />
                </Pressable>
            )}
            <View>
                <Text style={styles.appName}>QuizApp</Text>
                <Text style={styles.appTagline}>Test your knowledge!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '98%',
        marginBottom: 10,
        padding: 15,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 15,
        padding: 5,
        borderRadius: 20, // Makes the background circular
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
