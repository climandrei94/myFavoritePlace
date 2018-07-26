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
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Swiper from './swiper';

export default class Locations extends Component{
    constructor(props){
      super(props)
      this.state={
        comment : [],
        existsComments: false,
        nume: "",
        text: 'Scrie parerea ta aici...',
        initialState: true,
        scroller: null,
        numberOfCurrentImage:0
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

    changeTextComment = (textValue)=>{
      this.setState({
        text: textValue
      })
    }

    changeTextName = (textValue)=>{
      this.setState({
        nume: textValue
      })
    }

    handlePress = () =>{
      let curentComments = this.state.comment
      curentComments.push({key:this.state.nume,comment:this.state.text})
      this.setState({
        comment: curentComments,
        existsComments: true,
        nume: "",
        text:'Scrie parerea ta aici...',
        initialState: true
      })
    }
    render(){
      let width = Dimensions.get('window').width
      return(
        <View style = {locationStyling.fullContainer}>
          <View style={locationStyling.infoContainer}>
            <Text style={locationStyling.textTitle}>Locatia: {this.props.name}</Text>
            <Swiper>
                <Image source = {require('../images/trans.jpg')} style={{height:300,width:width}}/>
                <Image source = {require('../images/trans2.png')} style={{height:300,width:width}}/>
                <Image source = {require('../images/trans3.jpg')} style={{height:300,width:width}}/>
                <Image source = {require('../images/trans4.jpg')} style={{height:300,width:width}}/>
            </Swiper>
            <Text style={locationStyling.text}>Spune-ne parerea ta despre aceasta locatie:</Text>
            <TextInput 
              style={locationStyling.textInput}
              onChangeText={this.changeTextName}
              placeholder="Numele dumneavoastra"
            />
            <TextInput 
              style={locationStyling.textInput}
              onChangeText={this.changeTextComment}
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
            {
              this.state.existsComments &&
              <FlatList
                data = {this.state.comment}
                extraData={this.state}
                renderItem={({item})=><Text style={locationStyling.comments}>{item.key}:{"\n      "}{item.comment}</Text>}
              />}
          </View>
        </View>
      )
    }
  }