import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import img from './images/trans.jpg'
import {appStyling} from './styling/styling'
import Locations from './components/locations'

export default class App extends Component {
  render() {
    let pictures = {
      transfagarasan : {
        uri: ".images/trans.jpg",
        name: "Transfagarasan",
      },
    }
    return (
      <ScrollView>
        <View style = {appStyling.container}>
          <Locations img = {pictures.transfagarasan.uri} name ={pictures.transfagarasan.name}/>
        </View>
      </ScrollView>
    );
  }
}

