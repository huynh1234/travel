import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import Listplace from '../components/Listplace';

export default function Screen2(props) {
    const [diadiem, setdiadiem] = useState([
        {diadiem: "The Coffee house", key: "1"},
        {diadiem: "KichiKichi", key: "2"},
        {diadiem: "Cafe- sách", key: "3"},
        {diadiem: "Khách sạn Bruss", key: "4"},
        {diadiem: "Drink Tea", key: "5"},
        {diadiem: "King Of War gaming center  ", key: "6"},
        {diadiem: "The Coffee house", key: "7"},
        {diadiem: "The Coffee house", key: "8"},
        {diadiem: "The Coffee house", key: "9"},
        {diadiem: "The Coffee house", key: "10"},
        {diadiem: "The Coffee house", key: "11"},
        {diadiem: "The Coffee house", key: "12"},
        {diadiem: "The Coffee house", key: "13"},
        {diadiem: "The Coffee house", key: "14"},
        {diadiem: "The Coffee house", key: "15"},
    ])

        // const { navigation } = this.props;
    return (
        <ScrollView>
            {diadiem.map( (value) =>(
                <Listplace key={value.key} 
                tendiadiem={value.diadiem}  onPress1= {()=> props.navigation.navigate('Screen1', {diadiem : value.diadiem})}/>
            ))}
        </ScrollView>
    )
}
