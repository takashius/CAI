import React from 'react'
import Wrapper from '../../../components/Wrapper'
import { Text } from '../../../components/Themed'
import styles from '../style'

const DetailAlumnos = (props:any) => {
    const {navigation} = props;
  return (
    <Wrapper title={'Detalle Alumnos'} subtitle2={'Lorem ipsun dolor sit ammet'} navigation={navigation}>
        <Text style={styles.title}>Alumnos detail content</Text>
    </Wrapper>
  )
}

export default DetailAlumnos