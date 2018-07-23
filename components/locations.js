import React,{Component} from 'react';
import { locationStyling } from '../styling/styling'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Button, 
  Alert,
  FlatList
} from 'react-native';

export default class Locations extends Component{
    constructor(props){
      super(props)
      this.state={
        comment : [],
        text: 'Scrie parerea ta aici...',
        initialState: true
      }
    }

    onFocusFunction = ()=>{
      if(this.state.initialState){
        this.setState({
          text: "",
          initialState:false
        })
      }
    }

    onBlurFunction = ()=>{
      if(this.state.text === ""){
        this.setState({
          text:'Scrie parerea ta aici...',
          initialState:true
        })
      }
    }

    changeText = (textValue)=>{
      this.setState({
        text: textValue
      })
    }

    handlePress = () =>{
      let curentComments = this.state.comment
      console.log(curentComments)
      curentComments.push({key:'Andreea',comment:this.state.text})
      this.setState({
        comment: curentComments,
        text:'Scrie parerea ta aici...',
        initialState: true
      })
    }
    render(){
      return(
        <View style = {locationStyling.fullContainer}>
          <View style={locationStyling.infoContainer}>
            <Text style={locationStyling.textTitle}>Locatia: {this.props.name}</Text>
            <Image source = {require('../images/trans.jpg')} style={locationStyling.images}/>
            <Text style={locationStyling.text}>Spune-ne parerea ta despre aceasta locatie:</Text>
            <TextInput 
              style={locationStyling.textInput}
              onChangeText={this.changeText}
              value={this.state.text}
              onFocus={this.onFocusFunction}
              onBlur={this.onBlurFunction}
              multiline = {true}
              numberOfLines = {4}
              editable = {true}
              maxLength = {40}
              windowSoftInputMode = 'adjustResize'
            />
            <Button 
              onPress = {this.handlePress}
              title = "Trimite parerea"
              style = {locationStyling.button}
            />
          </View>
          <View style = {locationStyling.commentSection}>
          <Text style={locationStyling.textTitle}>Commentarii</Text>
            <FlatList
              data = {this.state.comment}
              extraData={this.state}
              renderItem={({item})=><Text style={locationStyling.comments}>{item.key}:{"\n      "}{item.comment}</Text>}
            />
          </View>
        </View>
      )
    }
  }