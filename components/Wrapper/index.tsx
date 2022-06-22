import { View, Text, ImageBackground, DrawerLayoutAndroid, Button, TouchableWithoutFeedback } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import React, { useRef, useState } from 'react'
import style from './style'

const index = (props: any) => {
  const { children, title, subtitle } = props;
  const drawer = useRef(null);

  const closeDrawer = () => {
    if (drawer !== null) {
      drawer.current.closeDrawer()
    }
  }

  const openDrawer = () => {
    if (drawer !== null) {
      drawer.current.openDrawer()
    }
  }

  const navigationView = () => (
    <ImageBackground
      source={require("../../assets/images/back2.png")}
      style={{ width: "100%", height: "100%" }}>
      <View style={[style.drawerContainer]}>
        <Text style={style.drawerParagraph}>I'm in the Drawer!</Text>
        <Button
          title="Close drawer"
          onPress={() => closeDrawer()}
        />
      </View>
    </ImageBackground>

  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={navigationView}
    >
      <ImageBackground
        source={require("../../assets/images/back.png")}
        style={{ width: "100%", height: "100%" }}>
        <View style={style.menu}>
          <TouchableWithoutFeedback onPress={openDrawer}>
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
    </DrawerLayoutAndroid>

  )
}

export default index