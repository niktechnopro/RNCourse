import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList, 
    StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../assets/dishes';


function RenderDish(props){
    const dish = props.dish;
    if(dish !== null){
        let img = "../"+dish.image;
        console.log(img)
        return(
            <Card
            featuredTitle={dish.name}
            image={{image: { uri: "..assets/elaicheesecake.png" }}}
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


export function DishDetail(props){
    console.log(props)
    return(
        <RenderDish dish={props.selectedDish} />
    )
}

const styles = StyleSheet.create({
    
})

