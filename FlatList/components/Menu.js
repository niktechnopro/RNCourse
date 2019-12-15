import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../assets/dishes';


class Menu extends Component{
    constructor(){
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    static navigationOptions = {
        title: 'Menu'
    };

    onDishSelect(dishId) {
        const newDish = this.state.dishes.filter(value => value.id === dishId);
        this.setState({selectedDish: newDish[0]},()=>{
            //navigate to DishDetails
            this.props.navigation.navigate("DishDetail", {selectedDish: this.state.selectedDish});
        });
    }

    renderMenuItem = ({item, index}) => {
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
            <View style={{ flex: 1 }}>
                <View
                style={{flex: 1}}
                >
                    <FlatList
                    data={this.state.dishes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderMenuItem}
                    />
                </View>
            </View>
        );
    }
    

}

export default Menu;

