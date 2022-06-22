import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { DataTable } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import Wrapper from '../components/Wrapper';

const alumnos = [
  {
    id:1,
    nombre: 'Lisa Simpson',
    edad: 8,
    grado: '3°'
  },
  {
    id:2,
    nombre: 'Bart Simpson',
    edad: 10,
    grado: '5°'
  },
  {
    id:3,
    nombre: 'Nelson',
    edad: 12,
    grado: '6°'
  },
  {
    id:4,
    nombre: 'Milhouse',
    edad: 9,
    grado: '4°'
  }, 
  {
    id:5,
    nombre: 'Lisa Simpson',
    edad: 8,
    grado: '3°'
  },
  {
    id:6,
    nombre: 'Bart Simpson',
    edad: 10,
    grado: '5°'
  },
  {
    id:7,
    nombre: 'Bart Simpson',
    edad: 10,
    grado: '5°'
  },
  {
    id:8,
    nombre: 'Nelson',
    edad: 12,
    grado: '6°'
  },
  {
    id:9,
    nombre: 'Milhouse',
    edad: 9,
    grado: '4°'
  }, 
  {
    id:10,
    nombre: 'Lisa Simpson',
    edad: 8,
    grado: '3°'
  },
  {
    id:11,
    nombre: 'Bart Simpson',
    edad: 10,
    grado: '5°'
  },
]

export default function TabTwoScreen() {

  return (
    <Wrapper title={'Alumnos'} subtitle2={'Lorem ipsun dolor sit ammet'}>
      <Text style={styles.title}>Listado</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nombre</DataTable.Title>
          <DataTable.Title numeric>Edad</DataTable.Title>
          <DataTable.Title numeric>Grado</DataTable.Title>
        </DataTable.Header>
        <ScrollView style={{ maxHeight: 400 }}>
          {alumnos.map((alumno) => (
            <DataTable.Row key={alumno.id}>
              <DataTable.Cell>{alumno.nombre} </DataTable.Cell>
              <DataTable.Cell numeric>{alumno.edad}</DataTable.Cell>
              <DataTable.Cell numeric>{alumno.grado}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
      </DataTable>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
