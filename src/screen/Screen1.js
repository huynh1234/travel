import React, { Component } from 'react'
import EHeader from '../components/EHeader'
import ListImg from '../components/ListImg'
import AddRate from '../components/AddRate'
// import styles from '../Styles'
import { Text, View, ScrollView } from 'react-native'
import styles from '../Styles'
import Comments from '../components/Comments'

export default class Screen1 extends Component {
    state = {
        modalVisible: false
    };
    
    
    render() {
        const { diadiem } = this.props.route.params;
        return (
            <View style={styles.container}>
                 <ScrollView>
                    <EHeader setModalVisible={() => this.setState({ modalVisible: true })} diadiem={diadiem}/>
                    <ListImg />
               
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                
                
                <AddRate modalVisible={this.state.modalVisible} setModalVisible={() => this.setState({ modalVisible: false })}/>
                </ScrollView>
            </View>
        )
    }
}
