import React from 'react'; 
import {View, Text} from 'react-native';
import styles from './styles';
import Styles from './styles'; 

const CovidMessage = (props) => {
    return (

    <View style={styles.container}> 
        <Text style={styles.title}>Travel only if necessary</Text>
        <Text style={styles.text}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker. </Text>
        <Text style={styles.learnMore}>Learn more </Text>

    </View>
    )
}

export default CovidMessage; 