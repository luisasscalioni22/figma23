import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginTop: 150,
        padding: 40,
        fontSize:30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.black
    },
    formRow: {
        margin: 10,
        flexDirection:'row',
        alignItems:"center",
        borderWidth: 1,
        borderCOlor: colors.primary,
        borderRadius: 5
    },
    icon: {
        fontSize:28,
        color: colors.primary,
        padding: 5
    },
    input: {
        fontSize:18,
        padding: 10,
        width: "70%"
    }
    
});