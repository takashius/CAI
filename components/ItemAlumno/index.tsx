import { Card, Title, Text } from 'react-native-paper'
import { View } from 'react-native'
import React from 'react'
import style from './style'

const ItemAlumno = (alumno:any) => {
    return (
        <Card style={style.container}>
            <Card.Content>
                <Title>{alumno.item.name}</Title>
                <View style={style.content}>
                    <View style={style.paragraph}>
                        <Text>{alumno.item.grado}</Text>
                    </View>
                    <View style={style.paragraph}>
                        <Text style={style.textRight}>Edad: {alumno.item.edad}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}

export default ItemAlumno