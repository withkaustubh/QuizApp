import { Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function OptionButton(props) {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? COLORS.optionPressed
                        : (props.isSelected ? COLORS.optionSelected : COLORS.optionDefault),
                    opacity: pressed ? 0.98 : 1,
                    transform: pressed ? [{ scale: 0.998 }] : [{ scale: 1 }]
                }
            ]}
        >
            <Text style={props.isSelected ? styles.textSelected : styles.textNotSelected}>{props.option}</Text>
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
        backgroundColor: COLORS.optionDefault,
    },
    textNotSelected: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
    textSelected: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: COLORS.textDark,
        textAlign: 'center',
    }
});
