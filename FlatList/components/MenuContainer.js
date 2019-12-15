import React, { Component } from "react";
import {
    View,
    Text,
    FlatList, 
    StyleSheet,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';

//components
import Menu from "./Menu";
import { DishDetail } from "./DishComponent";
import Home from "./Home";

//navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
        DishDetail: { screen: DishDetail },
    },
    {
        initialRouteName: 'Menu',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f45fff',
            }
        }
    }
);

const AppNavigator = createAppContainer(MainNavigator);

export default class MenuContainer extends Component{
    constructor(props){
        super();
        this.state={

        }
    }

    render(){
        return(
            <View style={{ flex: 1 }}>
                <AppNavigator />
                <View style={{position: "absolute", top: 10, right: 25}}>
                    <Icon
                        raised
                        name='bars'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
            </View>
        )
    }


}