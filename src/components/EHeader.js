import React, { Component } from 'react'
import styles from '../Styles';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
export default class EHeader extends Component {
    render() {

        return (
            <View style={styles.headstore}>
                <View style={styles.avtstore}>
                    <Image style={{ width: "100%", height: "100%" }} source={require("../img/1.png")} />
                </View>
                <View style={{ marginLeft: 16 }}>
                    <View><Text style={{ fontSize: 16 }}>{this.props.diadiem}</Text></View>
                    <TouchableOpacity
                        style={{ flexDirection: "row" }}
                        onPress={this.props.setModalVisible}
                    >
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                        <Icon name="md-star-outline" style={{ fontSize: 28, color: "gray" }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
