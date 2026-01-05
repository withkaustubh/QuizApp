import { Text, Pressable, StyleSheet } from 'react-native';

export default function OptionButton(props) {
    return (
        <Pressable
            onPress={props.onPress}
            // android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? 'rgba(255, 255, 255, 0.45)'
                        : (props.isSelected ? 'rgba(255, 255, 255, 0.93)' : 'rgba(255,255,255,0.06)'),
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
        backgroundColor: 'rgba(255,255,255,0.06)',
    },

    textNotSelected: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: '#ffffffc6',
        textAlign: 'center',
    },
    textSelected: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: '#2d2a2aff',
        textAlign: 'center',
    }

});


