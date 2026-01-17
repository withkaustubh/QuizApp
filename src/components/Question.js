import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Question(props) {
    const { theme } = useTheme();
    return (
        <View>
            <Text style={[styles.text, { color: theme.accent }]}>{props.question}</Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20
        }
    }
);
