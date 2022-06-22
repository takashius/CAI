import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Wrapper from '../components/Wrapper';
import React from 'react';

export default function TabOneScreen(props:any) {
  const {navigation} = props;
  return (
    <Wrapper title={'Home'} subtitle2={'Lorem ipsun dolor sit ammet'} navigation={navigation}>
        <Text style={styles.title}>Tab One</Text>
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
