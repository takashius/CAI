import React from 'react'
import Wrapper from '../../../components/Wrapper'
import { Text } from '../../../components/Themed'
import styles from '../style'
import ItemAlumno from '../../../components/ItemAlumno'
import { FlatList } from 'react-native'

const DATA = [
  {
    id: '1',
    name: 'Juan Perez',
    grado: '2do Grado',
    edad: '8',
  },
  {
    id: '2',
    name: 'Ana Fernandez',
    grado: '2do Grado',
    edad: '7',
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    grado: '1er Grado',
    edad: '6',
  },
  {
    id: '4',
    name: 'Lorena Mendoza',
    grado: '3do Grado',
    edad: '9',
  },
  {
    id: '5',
    name: 'Leandro Espinoza',
    grado: '1er Grado',
    edad: '6',
  },
];

const Alumnos = (props: any) => {
  const { navigation } = props;

  const navigateToDetail = (item: any) => {
    navigation.navigate('DetailAlumnos', {
      warehouseId: item.id,
    });
  }

  const renderItem = (alumno:any) => {
    return(<ItemAlumno item={alumno.item} onSelect={navigateToDetail} />)
  }

  return (
    <Wrapper title={'Alumnos'} subtitle2={'Lorem ipsun dolor sit ammet'} navigation={navigation}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  )
}

export default Alumnos