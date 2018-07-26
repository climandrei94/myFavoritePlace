import React from 'react'
import { 
    ScrollView, 
    Dimensions, 
    View,
    TouchableOpacity,
    Text,
    StyleSheet
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
            <View style={style.swiperBlock}>
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
                <View style={style.swiperButtons}>
                    <TouchableOpacity 
                        onPress={this.swipeToLeft} 
                        style={style.leftButton}
                    >
                        <Text style={style.buttonsText}>{'<'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={this.swipeToRight} 
                        style={style.rightButton}
                    >
                        <Text style={style.buttonsText}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    swiperBlock:{
        flex: 1
    },
    swiperButtons:{
        flex:1,
        flexDirection:'row',
        marginTop:-50,
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftButton:{
        marginRight:10,
        padding:5
        
    },
    rightButton:{
        padding:5
    },
    buttonsText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#8fff4f'    
    }
})