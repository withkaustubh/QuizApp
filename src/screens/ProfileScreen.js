import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';

export default function ProfileScreen({ route, navigation }) {
    const { name } = route.params || { name: 'User' };
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Header onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
                    <Text style={[styles.greeting, { color: theme.textSecondary }]}>Hello,</Text>
                    <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: 40,
        borderRadius: 20,
        alignItems: 'center',
        width: '85%',
        maxWidth: 400,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 8,
    },
    greeting: {
        fontSize: 24,
        marginBottom: 10,
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
