import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Header from './Header'
import { TextInput,Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Search extends Component{
    state = {
        text:''
    }
    storeCity = async() =>{
        
        try{
            await AsyncStorage.setItem('city',this.state.text)
            this.props.navigation.navigate('Home')
        }catch(err){
            console.log(err)
        }
    }
    render(){       
        return(
            <View>
                <Header subTitle = 'set city' />
                <View style={{padding:10}}>
                    <TextInput
                        label="Set City"
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                        style={{marginTop:10}}
                    />
                    <Button icon="city" mode="contained" onPress={this.storeCity} style={{marginTop:5}}>
                        SET CITY
                    </Button>
                </View>
            </View>
        )
    }
}