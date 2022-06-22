import { View, Text, ImageBackground, Button, TouchableWithoutFeedback } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import React, { useRef } from 'react'
import style from './style'

const index = (props: any) => {
  const { children, title, subtitle, navigation } = props;

  const navigationView = () => (
    <ImageBackground
      source={require("../../assets/images/back2.png")}
      style={{ width: "100%", height: "100%" }}>
      <View style={[style.drawerContainer]}>
        <Text style={style.drawerParagraph}>I'm in the Drawer!</Text>
        <Button
          title="Close drawer"
          onPress={() => navigation.closeDrawer()}
        />
      </View>
    </ImageBackground>
  );

  return (
    <ImageBackground
      source={require("../../assets/images/back.png")}
      style={{ width: "100%", height: "100%" }}>
      <View style={style.menu}>
        <TouchableWithoutFeedback onPress={() => {navigation.openDrawer()}}>
          <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
        </TouchableWithoutFeedback>
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{ marginLeft: 230 }}
        />
      </View>
      <View style={style.title}>
        <Text style={style.titleText}>{title}</Text>
        {subtitle && <Text style={style.subTitle}>{subtitle}</Text>}
      </View>
      <View style={style.content}>
        {children}
      </View>

    </ImageBackground>
  )
}

export default index