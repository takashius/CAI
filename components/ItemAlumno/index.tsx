import { Card, Title, Text } from 'react-native-paper'
import { View } from 'react-native'
import React from 'react'
import style from './style'

const ItemAlumno = (alumno:any) => {
    const {item, onSelect} = alumno
    return (
        <Card style={style.container} onPress={() => {onSelect(item)}}>
            <Card.Content>
                <Title>{item.name}</Title>
                <View style={style.content}>
                    <View style={style.paragraph}>
                        <Text>{item.grado}</Text>
                    </View>
                    <View style={style.paragraph}>
                        <Text style={style.textRight}>Edad: {item.edad}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}

export default ItemAlumno