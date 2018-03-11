import React from 'react'
import { Router, Scene, Actions, Modal } from 'react-native-router-flux'
import Rules from './rules'
import Login from './login'
import SetUp from './setup'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { color } from '../resource/';
import { View, Text, Image, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';

const Routes = () => (
   <Router>
     <Modal>
       <Scene key = "root">
          <Scene key = "login" component = {Login} title = "Login" initial = {false} />
          <Scene tabs initial={true} title="WEREWOLF" showLabel={false} activeTintColor={color.yellow}>
           <Scene
              key='project'  title='project'
             component={Rules}
             icon={(tab) => {
               const color = tab.focused ? tab.activeTintColor : 'black'
               return <Icon size={24} color={color} name="playlist-add-check" />
             }}
           />
         <Scene
          key='setup'
          component={() => <View></View>}
          tabBarLabel={'Set Up'}
          tabBarOnPress={()=> {
            Actions.setupModal()
          }}
          icon={(tab) => {
            const color = tab.focused ? tab.activeTintColor : 'black';
            return <Icon size={24} color={color} name="playlist-add" />
          }}
          >

         </Scene>
           <Scene tabBarLabel={'Stories'} component={Rules}
             icon={(tab) => {
               const color = tab.focused ? tab.activeTintColor : 'black';
               return <Icon size={24} color={color} name="book" />
             }}
             />
            </Scene>
       </Scene>
        <Scene
          backTitle={'Close'}
          key='setupModal'
          component={SetUp}
          renderRightButton={<Button
            title="Next"
            color="#841584"
            onPress={() => {
              Actions.pop()
            }}
          />}
        />
     </Modal>
   </Router>
)
export default Routes;