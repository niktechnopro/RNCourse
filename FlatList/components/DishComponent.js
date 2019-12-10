import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../assets/dishes';


function RenderDish(props){
    const dish = props.dish;
    console.log("dish: ", dish)
    if(dish != null){
        return(
            <Card
                featureTitle={dish.name}
                image={{ source: { uri: dish.image }}}
                >
                <Text style={{margin: 30}}>{dish.description}</Text>
            </Card>
        )
    }else{
        return(
            <View/>
        )
    }
    
}


export function DishDetail(props){
    console.log(props)
    return(
        <RenderDish dish={props.selectedDish} />
    )
}

