import React from 'react'
import { 
    ScrollView, 
    Dimensions, 
    View,
    TouchableOpacity,
    Text
} from 'react-native'

export default class HorizontalScroller extends React.Component {
    state = {
        page: 0,
        scroller:null,
        numberOfCurrentImage: 0
    }

    scrollEventHandler = event => 
        this.setState({
            page: Math.abs(Math.ceil(event.nativeEvent.contentOffset.x / Dimensions.get('window').width))
        })

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
            if(this.state.numberOfCurrentImage<3){
              let curentImage = this.state.numberOfCurrentImage+1
              let scrollingTo = Dimensions.get('window').width*curentImage
              this.setState({
                numberOfCurrentImage:curentImage
              })
              this.scroller.scrollTo({x:scrollingTo,y:0})
            }
        }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.scrollEventHandler}
                    ref ={(scroller)=>{this.scroller = scroller}}
                    onMomentumScrollEnd={(event)=>{
                        this.setState({
                          numberOfCurrentImage: Math.abs(Math.ceil(event.nativeEvent.contentOffset.x/Dimensions.get('window').width))
                        })
                    }}
                >
                    {this.props.children}
                </ScrollView>
                <View style={{
                        flex:1,
                        flexDirection:'row',
                        marginTop:10,
                        marginBottom:5,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={this.swipeToLeft} style={{marginRight:10,borderColor:'black',borderWidth:2,padding:5}}>
                        <Text style={{fontSize:20}}>Swipe to Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.swipeToRight} style={{borderColor:'black',borderWidth:2,padding:5}}>
                        <Text style={{fontSize:20}}>Swipe to Right</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 