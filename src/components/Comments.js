import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles'
import { Icon } from 'native-base'
export default class Comments extends Component {
    render() {
        return (
            <View style={styles.comments}>
                <View style={{ flexDirection: "row", padding: 4 }}>
                    <View style={styles.avtstore}>
                        <Image style={{ width: "100%", height: "100%" }} source={require("../img/1.png")} />
                    </View>
                    <View style={{ marginLeft: 16 }}>

                        <TouchableOpacity
                            style={{ flexDirection: "row" }}
                        >
                            <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                            <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                            <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                            <Icon name="md-star" style={{ fontSize: 28, color: "gray" }} />
                            <Icon name="md-star-outline" style={{ fontSize: 28, color: "gray" }} />
                        </TouchableOpacity>
                        <View><Text style={{ fontSize: 16 }}>Nguyễn Phúc Vinh</Text></View>
                    </View>

                </View>
                <View>
                    <Text style={{ paddingRight: 4, width: 400, opacity: 0.7 }}>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sint consequuntur perspiciatis iure quibusdam repudiandae sapiente blanditiis dignissimos optio, illum alias quasi delectus vel quae quaerat, error inventore dolorum esse?</Text>
                </View>
            </View>
        )
    }
}
