import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { DISHES } from '../assets/dishes';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    render(){
        return(
            <View>
                <Text>Hello There</Text>
            </View>
        );
    }
    

}

export default Menu;

