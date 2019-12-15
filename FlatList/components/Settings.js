import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList, 
    StyleSheet,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements'


export default function Settings(props){
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{fontSize: 50}}>Settings Screen</Text>
            <View style={{position: "absolute", top: 25, right: 25}}>
                <Icon
                    raised
                    name='bars'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.navigation.toggleDrawer()} />
            </View>
        </View>
    )
}