import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    containerImput: {
        backgroundColor: '#d9d9d9',
        margin: 10,
        padding: 10, 
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    titleImput: {
    fontSize: 15,
    fontWeight: '500',
    color:'#6e6e6e'
       
    }, 
    InputDrop:{
        flexDirection: 'row', 
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: '#ffff',
        padding:10,
        borderRadius: 20
  
    },
    row: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',

        


    },
    iconColor: {
        backgroundColor: '#b2b2b2',
        padding: 5,
        borderRadius: 20
    }, 
    textLeft:{
        paddingLeft:10,
        fontSize: 15,
        fontWeight: '600'
       
    }

})


export default styles;