import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import React, { useRef } from 'react'
import style from './style'
import Colors from '../../constants/Colors'

const index = (props: any) => {
  const { children, title, subtitle, navigation, save, edit } = props;

  return (
    <ImageBackground
      source={require("../../assets/images/back.png")}
      style={{ width: "100%", height: "100%" }}>
      <View style={style.menu}>
        <View>
          <TouchableWithoutFeedback onPress={() => { navigation.openDrawer() }}>
            <Icon name="menu" size={30} color={Colors.cai.button} style={{ width: 20 }} />
          </TouchableWithoutFeedback>
        </View>
        <View style={style.title}>
          <Text style={style.titleText}>{title}</Text>
          {subtitle && <Text style={style.subTitle}>{subtitle}</Text>}
        </View>
        <View>
          {save &&
            <TouchableWithoutFeedback onPress={() => { save() }}>
              <Icon name="content-save" size={30} color={Colors.cai.primary} />
            </TouchableWithoutFeedback>
          }
          {edit &&
            <TouchableWithoutFeedback onPress={() => { edit() }}>
              <Icon name="content-save-edit" size={30} color={Colors.cai.primary} />
            </TouchableWithoutFeedback>
          }
        </View>
      </View>

      <View style={style.content}>
        {children}
      </View>

    </ImageBackground>
  )
}

export default index