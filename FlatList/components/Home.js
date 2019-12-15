import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../assets/dishes';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/Leaders';

function RenderItem(props) {
    
        const item = props.item;
        
        if (item != null) {
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={require('../assets/uthappizza.png')}>
                    <Text
                        style={{margin: 10}}>
                        {item.description}</Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        
        return(
            <View>
                <ScrollView>
                    <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                    <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                    <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
                </ScrollView>
                <View style={{position: "absolute", bottom: 10, right: 25}}>
                    <Icon
                        raised
                        name='bars'
                        type='font-awesome'
                        color='#85888c'
                        onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
            </View>
        );
    }
}