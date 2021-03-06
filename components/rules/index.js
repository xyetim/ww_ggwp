import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import styled from 'styled-components'

import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import { Actions } from 'react-native-router-flux'

const win = Dimensions.get('window');

const RulesView = styled.View`
  flex: 1;
  alignItems: flex-start;
  height: 300;
  backgroundColor: rgb(255, 204, 0);
`
const SidebarContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: red;
`
const ListView =  styled.View`
  alignItems: flex-start;
`;
const ItemView = styled.View`
  padding: 20px 10px;
  flexDirection: row;
  alignItems: flex-start;
  alignSelf: flex-start;
  borderBottomColor: black;
  borderBottomWidth: 1px;
  width: ${win.width};
`;
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`
const ItemIcon = styled.View`
  margin-right: 10px
`

class Rules extends React.Component {
  render() {
    console.debug("text")
    return (
      <RulesView>
        <ListView>
          {
            ['Game 7 nguoi', 'Game 8 nguoi', 'Game 9 nguoi'].map((i) =>
            <ItemView key={i}>
              <ItemIcon>
              </ItemIcon>
              <ItemTitle key={i}>{i}</ItemTitle>
            </ItemView>)
          }
        </ListView>
      </RulesView>
    )
  }
}
export default Rules;
