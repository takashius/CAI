import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
    container: {
        marginBottom:10,
        backgroundColor: Colors.cai.secundary,
        borderWidth:0
    },
    content:{
        flex: 1, 
        flexDirection: 'row'
    },
    paragraph:{
        flex: 1,
    },
    textRight: {
        color:'black',
        textAlign: 'right'
    }
});