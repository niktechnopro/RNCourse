import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList, 
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { LEADERS } from "../shared/Leaders";

function History(){//History functional component
    return(
        <Card
            title="Our History"
            titleStyle={{textAlign: "center", fontSize: 21, fontWeight: "bold" }}
        >
            <Text style={styles.insideText}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>

            <Text style={styles.insideText}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
        </Card>
    )
}


export default class AboutComponent extends Component{
    constructor(props){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#e8eaed"}}>
                <View style={{backgroundColor: "#083880",}}>
                    <Text style={{fontSize: 21, color: "#fff", margin: 14}}>About us</Text>
                </View>
                <ScrollView>
                    <History />
                    <Card
                        title="Corporate Leadership"
                        titleStyle={{textAlign: "center", fontSize: 21, fontWeight: "bold" }}
                        wrapperStyle={{margin: 0, padding: 0}}
                   > 
                       {
                           LEADERS.map((value, index) => {
                                return(
                                    <ListItem
                                        leftAvatar={{ source: require('../assets/images/alberto.png') }}
                                        title={value.name}
                                        titleStyle={{fontSize: 18}}
                                        subtitle={value.description}
                                        subtitleStyle={{fontSize: 14}}
                                    />
                                )
                           })
                       }
                    </Card>
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
        )
    }
}

const styles = StyleSheet.create({
    insideText : {
        fontSize: 12,
        textAlign: "left",
        paddingVertical: 5
    }
})