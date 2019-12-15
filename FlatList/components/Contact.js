import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList, 
    StyleSheet,
    Image
} from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class Contact extends Component{


    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#e8eaed"}}>
                <Card
                    title="Contact Information"
                    titleStyle={{textAlign: "center", fontSize: 21, fontWeight: "bold" }}
                >
                    <Text style={styles.insideText}>121, Clear Water Bay Road</Text>
                    <Text style={styles.insideText}>Clear Water Bay, Kowloon</Text>
                    <Text style={styles.insideText}>HONG KONG</Text>
                    <Text style={styles.insideText}>Tel: +852 1234 5678</Text>
                    <Text style={styles.insideText}>Fax: +852 8765 4321</Text>
                    <Text style={styles.insideText}>Email:confusion@food.net</Text>
                </Card>
                <View style={{position: "absolute", bottom: 10, right: 25}}>
                    <Icon
                        raised
                        name='bars'
                        type='font-awesome'
                        color='#85888c'
                        onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    insideText:{
        fontSize: 18,
        textAlign: "left",
        paddingVertical: 5
    }
})
