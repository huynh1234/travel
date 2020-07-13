import React, { Component } from 'react'
import { Modal, Alert, View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import { Icon } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class AddRate extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '   comment' };
      }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{width: "100%", height: "100%", backgroundColor: "#f0f8ff", alignSelf:"center", borderRadius:8}}>
                    

                    
                      <View style={{marginTop:20,marginLeft: 4,marginRight:20,flexDirection: "row",justifyContent: "flex-end"}}>
                        <View><Text style={{fontSize: 16}}>{this.props.diadiem}</Text></View>
                        <TouchableOpacity 
                                  style={{flexDirection: "row"}}
                
                              >
                                  <Icon name="md-star" style={{fontSize : 28, color:"gray"}} />
                                  <Icon name="md-star" style={{fontSize : 28, color:"gray"}} />
                                  <Icon name="md-star" style={{fontSize : 28, color:"gray"}} />
                                   <Icon name="md-star" style={{fontSize : 28, color:"gray"}} />
                                <Icon name="md-star-outline" style={{fontSize : 28, color:"gray"}} />
                        </TouchableOpacity>
                        <View style={{marginLeft:200}}>
                            <TouchableOpacity
                               onPress={this.props.setModalVisible}
                              >
                                <Icon name="md-send" style={{fontSize : 28, color:"gray"}} />
                            </TouchableOpacity> 
                         </View>

                     </View>
                    <View>
                     <TextInput
                       style={{height: 70,width:"90%", borderColor: 'gray', borderWidth: 1,marginTop:30,marginLeft:20}}
                       onChangeText={(text) => this.setState({text})}
                       value={this.state.text}
                     />
                    </View>
                </View>
            </Modal>
        )
    }
}
