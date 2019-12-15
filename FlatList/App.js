/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import ContactComponent from "./components/ContactComponent";
import MenuContainer from "./components/MenuContainer";
import Home from "./components/Home";
import AboutComponent from "./components/AboutComponent";

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


const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <MyApp />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
