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

import Swiper from 'react-native-swiper';

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

    swipeToLeft = () =>{
      if(this.state.numberOfCurrentImage>0){
        let curentImage = this.state.numberOfCurrentImage-1
        let scrollingTo = Dimensions.get('window').width*curentImage
        this.setState({
          numberOfCurrentImage:curentImage
        })
        this.scroller.scrollTo({x:scrollingTo,y:0})
      }
    }

    swipeToRight = () =>{
      if(this.state.numberOfCurrentImage<3)
      {
        let curentImage = this.state.numberOfCurrentImage+1
        let scrollingTo = Dimensions.get('window').width*curentImage
        this.setState({
          numberOfCurrentImage:curentImage
        })
        this.scroller.scrollTo({x:scrollingTo,y:0})
      }
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
            {/* <Swiper style = {locationStyling.swiper}  showsButtons={true}> */}
            <ScrollView 
              horizontal = {true} 
              pagingEnabled={true} 
              ref ={(scroller)=>{this.scroller = scroller}}
              // scrollEnabled={false}s
              onMomentumScrollEnd={(event)=>{
                this.setState({
                  numberOfCurrentImage: Math.abs(Math.ceil(event.nativeEvent.contentOffset.x/Dimensions.get('window').width))
                })
              }}
              // scrollEventThrottle={40}
            >
                <Image source = {require('../images/trans.jpg')} style={{height:300,width:width}}/>
                <Image source = {require('../images/trans2.png')} style={{height:300,width:width}}/>
                <Image source = {require('../images/trans3.jpg')} style={{height:300,width:width}}/>
                <Image source = {require('../images/trans4.jpg')} style={{height:300,width:width}}/>
            {/* </Swiper> */}
            </ScrollView>
            <View style={{flex:1,flexDirection:'row',marginTop:10,marginBottom:5}}>
              <TouchableOpacity onPress={this.swipeToLeft} style={{marginRight:10,borderColor:'black',borderWidth:2,padding:5}}>
                  <Text style={{fontSize:20}}>Swipe to Left</Text>
                  {/* <Image source = {require('../images/left.svg')} style={{height:0,width:0}}/> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={this.swipeToRight} style={{borderColor:'black',borderWidth:2,padding:5}}>
                {/* <Image source = {require('../images/right.svg')} style={{height:300,width:width}}/> */}
                  <Text style={{fontSize:20}}>Swipe to Right</Text>
              </TouchableOpacity>
            </View>
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