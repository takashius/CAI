import { View, ImageBackground, Image } from 'react-native'
import { TextInput, Card, Button, Paragraph } from 'react-native-paper';
import React, { useState } from 'react'
import style from './style'

const Login = (props:any) => {
    const { navigation, route } = props;
    const [text, setText] = useState("");

    return (
        <ImageBackground
            source={require("../../assets/images/back.png")}
            style={{ width: "100%", height: "100%" }}>
            <View style={[style.container]}>
                <Image source={require('../../assets/images/logo.png')} style={[style.image]} />
            </View>
            <Card style={style.card}>
                <Card.Title title="Login" titleStyle={style.cardTitle} />
                <Card.Content>
                    <TextInput
                        label="Email"
                        placeholder="Escriba su correo de inicio"
                        value={text}
                        mode='outlined'
                        onChangeText={text => setText(text)}
                        style={style.input}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        placeholder="Escriba su contraseña"
                        secureTextEntry={true}
                        right={<TextInput.Icon name="eye" />}
                        style={style.input}
                    />
                    <Button mode="contained" onPress={() => navigation.navigate('Root')} style={style.button}>
                        Login
                    </Button>
                </Card.Content>
            </Card>
        </ImageBackground>
    )
}

export default Login