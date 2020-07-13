import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from '../Styles';
import { Icon } from 'native-base';

export default class Listplace extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.headList} onPress={this.props.onPress1}>
                <View style={styles.avtList}>
                    <Image style={{width: "100%", height: "100%"}} source={require("../img/1.png")} />
                </View>
                <View style={{marginLeft: 16, justifyContent: "space-around", width: 232}}>
                    <View><Text style={{fontSize: 16}}>{this.props.tendiadiem}</Text></View>
                    <View
                    style={{flexDirection: "row"}}
                    onPress={this.props.setModalVisible}
                    >
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star-outline" style={{ fontSize: 28, color: "gray" }} />
                    </View>
                </View>
                <View style={{marginLeft: 50, justifyContent: "space-around"}}>
                    <Text>2m</Text>
                    <Icon name="md-navigate" style={{transform: [{ rotate: '90deg'}], fontSize: 28, color: "gray"}}/>
                </View>
            </TouchableOpacity>
        )
    }
}
