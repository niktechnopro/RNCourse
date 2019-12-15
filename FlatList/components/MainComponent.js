import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import ContactComponent from "./ContactComponent";
import MenuContainer from "./MenuContainer";
import Home from "./Home";
import AboutComponent from "./AboutComponent";

//navigation
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";


const MyDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },//not really need navigationOptions, because we use static inside component
    AboutUs: { screen: AboutComponent,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
      }, 
    },
    Menu: { screen: MenuContainer },
    Contact: { screen: ContactComponent,
      navigationOptions: {
        title: 'Contact',
        drawerLabel: 'Contact Us'
      }, 
    },
  },
  {
    drawerWidth: 230,//this is a drawer config
    drawerBackgroundColor: "#dae4f3",
    drawerType: "front", //default
    contentOptions:{
      activeTintColor:'#0f1013',
      inactiveTintColor:'#000',
      labelStyle:{
        fontFamily:'Verdana',
        fontSize: 21
      }
    }
  }
);

const MyApp = createAppContainer(MyDrawerNavigator);


export default function  MainComponent() {
  return (
      <View style={styles.body}>
        <MyApp />
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  }
});