import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../assets/dishes';
import { DishDetail } from './DishComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        const newDish = this.state.dishes.filter(value => value.id === dishId);
        this.setState({selectedDish: newDish});
    }

    renderMenuItem = ({item, index}) => {
        console.log(item)
        return(
            <ListItem
                leftAvatar={{ source: { uri: item.image } }}
                title={item.name}
                subtitle={item.description}
                onPress={() => this.onDishSelect(item.id)}
                bottomDivider
            />
        )
    }

   
    render(){
        return(
            <View style={{flex: 1}}>
                <View
                style={{flex: 1}}
                >
                    <FlatList
                    data={this.state.dishes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderMenuItem}
                    />
                </View>
                <DishDetail 
                    selectedDish = {this.state.selectedDish}
                />
            </View>
        );
    }
    

}

export default Menu;

