import { Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function OptionButton(props) {
    const { theme } = useTheme();

    const getBackgroundColor = (pressed) => {
        if (props.isCorrect) return theme.success;
        if (props.isWrong) return theme.error;
        if (pressed) return theme.optionPressed;
        if (props.isSelected) return theme.optionSelected;
        return theme.optionDefault;
    };

    return (
        <Pressable
            onPress={props.disabled ? null : props.onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: getBackgroundColor(pressed),
                    opacity: props.disabled && !props.isCorrect && !props.isWrong && !props.isSelected ? 0.5 : (pressed ? 0.98 : 1),
                    transform: pressed ? [{ scale: 0.998 }] : [{ scale: 1 }]
                }
            ]}
        >
            <Text style={[
                props.isSelected || props.isCorrect || props.isWrong ? styles.textSelected : styles.textNotSelected,
                { color: props.isSelected || props.isCorrect || props.isWrong ? theme.textDark : theme.textSecondary }
            ]}>
                {props.option}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '90%',
        paddingVertical: 16,
        marginVertical: 8,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNotSelected: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        textAlign: 'center',
    },
    textSelected: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        textAlign: 'center',
    }
});
