import { Text, View , StyleSheet} from 'react-native';

export default function Question(props) {
    return (
        <View>
            <Text style={styles.text}>{props.question}</Text>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#aabdeaff',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20
        }
    }
);