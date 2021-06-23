import React, { Component } from 'react'

import {View,Text,FlatList,StyleSheet,Image, Alert} from 'react-native'
import Header from'./Header'
import { List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Home extends Component{
  
    state = {
        item:{
            name:'loading..',
            temp:'loading..',
            humidity:'loading..',
            description:'loading',
            key:''
        }
    }

    getData = async() =>{
        var city = await AsyncStorage.getItem('city')
        console.log(city)
        if(city==null){
            city = 'New York'
        }
        console.log(city)
        var key = '46a9246bebba16d42b36aac3fc3ba8af';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(data=>data.json())
        .then(data2=>{
            if(data2.cod==404){
                Alert.alert('not found')
                this.props.navigation.navigate('Settings')
            }else{
                var temp = data2.main.temp;
                var humidity = data2.main.humidity;
                var name = data2.name;
                var key  = data2.coord.lat;
                var description = data2.weather[0].description;
                this.setState({item:{name,temp,humidity,description,key}})
            }           
        })
    }

    componentDidMount(){
        this.getData()
    }
    componentDidUpdate(){
        this.getData()
    }
    //uniq -> cooed.lat
    render(){
        return(
            <View style={style.container}>
                <Header subTitle = 'current city'/>
                <View style={style.main}>
                    <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center'}}>{this.state.item.name}</Text>
                    <Image source = {{uri:'https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png'}}
                        style = {{ width: 150, height: 110,marginLeft:70,marginTop:10 }}
                    />
                </View>
                <List.Item
                style={{backgroundColor:'#fff',margin:5}}
                    title={`Temperature: ${this.state.item.temp}`}
                    // left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                style={{backgroundColor:'#fff',margin:5}}
                    title={`Humidity: ${this.state.item.humidity}`}
                    // left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                     style={{backgroundColor:'#fff',margin:5}}
                    title={`description: ${this.state.item.description}`}
                    // left={props => <List.Icon {...props} icon="folder" />}
                />
            </View>
        )
        
    }
    
    
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#d3d3d3',
        flex:1
    },
    main:{
        height:200,
        padding:30
    }
})

