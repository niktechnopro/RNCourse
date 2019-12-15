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
import MainComponent from "./components/MainComponent";

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <MainComponent />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
});

export default App;
