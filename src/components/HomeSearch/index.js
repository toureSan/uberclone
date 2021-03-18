import React from 'react';
import { View, Text } from 'react-native';
import styles from '../HomeSearch/styles';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcon'; 
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeSearch = (props) => {
    return (
        <View>
            <View style={styles.containerImput}>
                <Text style={styles.titleImput}>Where to go ? </Text>
                <View style={styles.InputDrop} >
                    <AntDesign name={'clockcircle'} size={20} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconColor}>

                  <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
                </View>
                <Text style={styles.textLeft}>Spin night club</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconColor, {backgroundColor: '#2b80ff'}]}>
                  <AntDesign name={'home'} size={20} color={'#ffffff'}/>
                </View>
                <Text style={styles.textLeft}>Spin night club</Text>
            </View>
        </View>
    )

}

export default HomeSearch; 
