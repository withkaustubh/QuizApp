import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';

export default function NextButton({ onPress }) {
    return (
        <View style={styles.navigation}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.navButton,
                    { backgroundColor: pressed ? COLORS.primaryDark : COLORS.primary }
                ]}
            >
                <Text style={styles.buttonText}>
                    Next
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    navigation: {
        flex: 1,
        marginTop: 40,
    },
    navButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
        marginLeft: '60%',
        width: 100,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
        marginRight: 8
    }
});
