import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList, 
    StyleSheet,
    Image
} from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props){
    const dish = props.dish;
    if(dish !== null){
        return(
            <Card
            featuredTitle={dish.name}
            image={require("../assets/uthappizza.png")}
            >
                <Text style={{margin: 30}}>{dish.description}</Text>
            </Card>
        )
    }else{
        return(
            <View style={styles.cardWrapper} />
        )
    }
    
}


export default class DishDetail extends Component{
    constructor(props){
        super();
        this.state = {
            selectedDish: null
        }
    }

    static navigationOptions = {
        title: 'Dish details'
    };

    componentDidMount = () => {
        const params = this.props.navigation.getParam("selectedDish", "");
        // console.log("componentDidMount: ", this.props.navigation.getParam("selectedDish", ""));
        this.setState({selectedDish: params})
    }

    render(){
        return(
            <RenderDish dish={this.state.selectedDish} />
        )
    }
}

const styles = StyleSheet.create({
    
})

