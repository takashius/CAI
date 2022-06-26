import React from 'react'
import Wrapper from '../../../components/Wrapper'
import { Text } from '../../../components/Themed'
import styles from '../style'

const Maestras = (props:any) => {
    const {navigation} = props;
  return (
    <Wrapper title={'Maestras'} subtitle2={'Lorem ipsun dolor sit ammet'} navigation={navigation}>
        <Text style={styles.title}>Mestras content</Text>
    </Wrapper>
  )
}

export default Maestras