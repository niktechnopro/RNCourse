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
  ScrollView,
  View,
  Text,
} from 'react-native';
import Menu from "./components/Menu";
import { DishDetail } from "./components/DishComponent";

//navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";


const MainNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
})

const AppNavigator = createAppContainer(MainNavigator);


const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <AppNavigator />
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
    borderWidth: 2,
    borderColor: "green"
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
