import React, { useState, useEffect } from 'react'
import Wrapper from '../../../components/Wrapper'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import styles from '../style'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { TextInput } from 'react-native-paper'
import Moment from 'moment'

const FormAlumnos = (props: any) => {
  const { navigation } = props;
  const [date, setDate] = useState(new Date());
  const [fecha, setFecha] = useState('');
  Moment.locale('es-ve');

  const save = () => {

  }

  useEffect(() => {

    setFecha(Moment(date).format('DD/MM/YYYY'))
  }, [date])

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  }

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      display:'calendar'
    })
  }

  return (
    <Wrapper
      title={'Form Alumnos'}
      subtitle2={'Lorem ipsun dolor sit ammet'}
      navigation={navigation}
      back={true}
      save={save}
    >
      <ScrollView>
        <View>
          <TextInput
            label="Nombre"
            mode='outlined'
            autoComplete='name'
          />

          <TextInput
            label="Apellido"
            mode='outlined'
            autoComplete='name-family'
          />

          <TextInput
            label="Correo"
            mode='outlined'
            autoComplete='email'
            keyboardType='email-address'
          />

          <TextInput
            label="Teléfono"
            mode='outlined'
            autoComplete='tel'
            keyboardType='phone-pad'
          />
          <TouchableOpacity onPress={() =>{showDatepicker()}}>
            <TextInput
              label="Fecha de Nacimiento"
              mode='outlined'
              editable={false}
              value={fecha}
              onPressIn={() => { showDatepicker() }}
              right={<TextInput.Icon name="calendar" />}
            />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default FormAlumnos