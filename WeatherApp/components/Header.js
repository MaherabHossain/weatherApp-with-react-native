import React from 'react'
import {StyleSheet} from 'react-native'
import { Appbar } from 'react-native-paper';

const Header = (props) => {


  return (
    <Appbar.Header >
      <Appbar.Content title="Weather" subtitle={props.subTitle} style={{alignItems:'center',justifyContent:'center'}} />
    </Appbar.Header>
  );
};

export default Header;

