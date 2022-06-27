import React, { useState, useEffect } from 'react'
import Wrapper from '../../../components/Wrapper'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import styles from '../style'
import Colors from '../../../constants/Colors'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { TextInput } from 'react-native-paper'
import Moment from 'moment'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const FormAlumnos = (props: any) => {
  const { navigation } = props;
  const [date, setDate] = useState(new Date());
  const [fecha, setFecha] = useState('');
  const genero = ["Femenino", "Masculino"]
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
      display: 'calendar'
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
            style={styles.textImput}
            outlineColor={Colors.cai.primary}
          />

          <TextInput
            label="Apellido"
            mode='outlined'
            autoComplete='name-family'
            style={styles.textImput}
            outlineColor={Colors.cai.primary}
          />

          <TextInput
            label="Correo"
            mode='outlined'
            autoComplete='email'
            keyboardType='email-address'
            style={styles.textImput}
            outlineColor={Colors.cai.primary}
          />

          <TextInput
            label="Teléfono"
            mode='outlined'
            autoComplete='tel'
            keyboardType='phone-pad'
            style={styles.textImput}
            outlineColor={Colors.cai.primary}
          />
          <TouchableOpacity onPress={() => { showDatepicker() }}>
            <TextInput
              label="Fecha de Nacimiento"
              mode='outlined'
              editable={false}
              value={fecha}
              style={styles.textImput}
              outlineColor={Colors.cai.primary}
              onPressIn={() => { showDatepicker() }}
              right={<TextInput.Icon name="calendar" />}
            />
          </TouchableOpacity>

          <SelectDropdown
            data={genero}
            defaultButtonText='Genero'
            dropdownIconPosition='right'
            onSelect={(selectedItem:any, index:any) => {
              //console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem:any, index:any) => {
              return selectedItem
            }}
            rowTextForSelection={(item:any, index:any) => {
              return item
            }}
            buttonStyle={styles.dropdown}
            buttonTextStyle={styles.dropdownBtnTxt}
            rowStyle={styles.dropdownRowStyle}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowTextStyle={styles.dropdownRowTxt}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={Colors.cai.gray} size={18} />;
            }}
          />

        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default FormAlumnos