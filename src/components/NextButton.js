import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function NextButton({ onPress, disabled, title = "Next" }) {
    const { theme } = useTheme();

    return (
        <View style={styles.navigation}>
            <Pressable
                onPress={disabled ? null : onPress}
                style={({ pressed }) => [
                    styles.navButton,
                    {
                        backgroundColor: disabled
                            ? theme.optionDefault
                            : (pressed ? theme.primaryDark : theme.primary),
                        opacity: disabled ? 0.7 : 1
                    }
                ]}
            >
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    navigation: {
        marginTop: 30,
        marginBottom: 10,
        marginRight: '7.5%',
        alignItems: 'flex-end',
        width: '100%',
        maxWidth: 600,
        paddingRight: 20,
    },
    navButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
        width: 'auto',
        minWidth: 120,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
        marginRight: 8
    }
});
