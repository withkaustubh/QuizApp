import { Text, Pressable, StyleSheet } from 'react-native';

export default function OptionButton(props) {
    return (
        <Pressable style={styles.button} onPress = {props.onPress}>
            <Text style={styles.text}>{props.option}</Text>

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
    text: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: '#ffffffc6',
        textAlign: 'center',
    }

});


