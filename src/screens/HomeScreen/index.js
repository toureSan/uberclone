import React from 'react'; 
import {View, Text} from 'react-native';

import HomeMap from '../../components/Map/index'
import CovidMessage from '../../components/CovidMessage/index'
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
    return (
     <View>
         <HomeMap/>
         <CovidMessage/>
        <HomeSearch/>
     </View>
     
    )
}

export default HomeScreen; 
