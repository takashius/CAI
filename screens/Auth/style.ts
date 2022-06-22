import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        marginTop: 80
    },
    card: {
        borderRadius: 30,
        elevation: 10,
        marginHorizontal: 20,
        paddingVertical: 20
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 30,
    },
    input: {
        marginBottom:10
    },
    button: {
        marginTop:10,
        marginHorizontal: 60
    }
})

export default styles;