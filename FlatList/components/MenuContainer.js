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
import DishDetail from "./DishComponent";

//navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
})

const AppNavigator = createAppContainer(MainNavigator);

export default class Home extends Component{
    constructor(props){
        super();
        this.state={

        }
    }

    componentDidMount = () => {

    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <AppNavigator />
                <View style={{position: "absolute", top: 25, right: 25}}>
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