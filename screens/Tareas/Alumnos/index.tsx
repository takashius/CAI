import React from 'react'
import Wrapper from '../../../components/Wrapper'
import styles from '../style'
import ItemAlumno from '../../../components/ItemAlumno'
import { FlatList } from 'react-native'
import { FAB } from 'react-native-paper'

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
  {
    id: '6',
    name: 'Miranda Marquez',
    grado: '1er Grado',
    edad: '6',
  },
  {
    id: '7',
    name: 'Maria Pinto',
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

  const navigateToAdd = () => {
    navigation.navigate('FormAlumnos')
  }

  const renderItem = (alumno: any) => {
    return (<ItemAlumno item={alumno.item} onSelect={navigateToDetail} />)
  }

  return (
    <Wrapper title={'Alumnos'} subtitle={'Lorem ipsun dolor sit ammet'} navigation={navigation}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigateToAdd()}
      />
    </Wrapper>
  )
}

export default Alumnos