import React from 'react'
import Wrapper from '../../../components/Wrapper'
import { Text } from '../../../components/Themed'
import styles from '../style'

const FormAlumnos = (props:any) => {
    const {navigation} = props;
  return (
    <Wrapper title={'Form Alumnos'} subtitle2={'Lorem ipsun dolor sit ammet'} navigation={navigation}>
        <Text style={styles.title}>Alumnos form content</Text>
    </Wrapper>
  )
}

export default FormAlumnos