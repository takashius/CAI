import { color } from '@rneui/base';
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.cai.primary,
        color: Colors.cai.secundary
    },
    textImput: {
        marginBottom: 5,
        backgroundColor: Colors.cai.secundary,
        borderColor: Colors.cai.primary,
        color:Colors.cai.gray
    },
    dropdown: {
        width: '100%',
        marginBottom:5,
        marginTop:5,
        height: 50,
        backgroundColor: Colors.cai.secundary,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.cai.primary,
    },
    dropdownBtnTxt: {
        color: Colors.cai.gray, 
        textAlign: 'left'
    },
    dropdownRowTxt: {
        color: Colors.cai.white, 
        textAlign: 'left'
    },
    dropdownDropdownStyle: {
        borderRadius: 15
    },
    dropdownRowStyle: {
        backgroundColor: Colors.cai.primary, 
        borderBottomColor: Colors.cai.secundary
    },
    //STYLES DETAIL
    detailTitle: {
        marginVertical: 15,
        color:Colors.cai.primary,
    },
    detailCard: {
        marginTop: 15,
        backgroundColor:Colors.cai.secundary,
    },
    detailCardTitle: {
        color: Colors.cai.primary
    },
    detailCardSubtitle: {
        color: Colors.cai.primary,
        fontSize: 14
    },
    detailCardContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailCardColumn: {
        color: Colors.cai.primary,
        flex: 1,
        fontSize: 14,
        marginLeft: 5,
        marginTop:5
    }
});