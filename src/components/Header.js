import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header({ onBack }) {
    const { theme, toggleTheme, isDarkMode } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.headerContainer, {
            backgroundColor: theme.cardBackground,
            shadowColor: theme.shadow,
            marginTop: insets.top
        }]}>
            {onBack && (
                <Pressable
                    onPress={onBack}
                    style={({ pressed }) => [
                        styles.backButton,
                        { backgroundColor: pressed ? theme.optionPressed : 'transparent' }
                    ]}
                >
                    <Ionicons name="chevron-back" size={24} color={theme.text} />
                </Pressable>
            )}
            <View>
                <Text style={[styles.appName, { color: theme.text }]}>QuizApp</Text>
                <Text style={[styles.appTagline, { color: theme.textSecondary }]}>Test your knowledge!</Text>
            </View>
            <View style={{ flex: 1 }} />
            <Pressable style={styles.themeButton} onPress={toggleTheme}>
                <Ionicons name={isDarkMode ? "moon" : "sunny"} size={24} color={theme.text} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '98%',
        marginBottom: 10,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
    },
    backButton: {
        marginRight: 15,
        padding: 5,
        borderRadius: 20,
    },
    appName: {
        fontFamily: 'Times New Roman',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    appTagline: {
        fontSize: 13,
    },
    themeButton: {
        padding: 5,
    },
});
