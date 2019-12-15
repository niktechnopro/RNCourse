import React, { Component } from "react";
import {
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';

//components
import Menu from "./Menu";
import { DishDetail } from "./DishComponent";

//just for top bar
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";

//navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
        DishDetail: { screen: DishDetail },
        AboutComponent: {screen: AboutComponent},
        ContactComponent: {screen: ContactComponent}
    },
    {
        initialRouteName: 'Menu',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#083880',
            },
            headerTintColor: {
                color: "#fff"
            },
            headerTintColor: '#ffffff',//font color for stack navigator
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
            <View style={{ flex: 1, backgroundColor: "#e8eaed" }}>
                <AppNavigator />
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