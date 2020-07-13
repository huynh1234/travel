import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'
import styles from '../Styles'

export default class ListImg extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row"}}>
                <ScrollView  horizontal style={{flexDirection: "row",paddingLeft : 16}} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.img} source={require("../img/1.png")} />
                    <Image style={styles.img} source={require("../img/1.png")} />
                    <Image style={styles.img} source={require("../img/1.png")} />
                    <Image style={styles.img} source={require("../img/1.png")} />
                    <Image style={styles.img} source={require("../img/1.png")} />
                    <Image style={styles.img} source={require("../img/1.png")} />
                </ScrollView>
            </View>
            
        )
    }
}
