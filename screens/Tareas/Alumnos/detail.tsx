import React from 'react'
import Wrapper from '../../../components/Wrapper'
import { Text, View } from 'react-native'
import { Card, Title } from 'react-native-paper'
import styles from '../style'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from '../../../constants/Colors'

const DetailAlumnos = (props: any) => {
  const { navigation } = props;

  const editAlumno = () => {

  }

  return (
    <Wrapper
      title={'Detalle Alumno'}
      subtitle2={'Lorem ipsun dolor sit ammet'}
      navigation={navigation}
      back={true}
      edit={editAlumno}
    >
      <Card style={styles.detailCard} mode='elevated'>
        <Card.Title
          title="Juan Gonzalez"
          subtitle="5to Grado"
          titleStyle={styles.detailCardTitle}
          subtitleStyle={styles.detailCardSubtitle}
        />
        <Card.Content>
          <View style={styles.detailCardContent}>
            <Icon size={18} name='town-hall' color={Colors.cai.primary} />
            <Text style={styles.detailCardColumn}>Colegio San Martin</Text>
          </View>
          <View style={styles.detailCardContent}>
            <Icon size={18} name='gender-male' color={Colors.cai.primary} />
            <Text style={styles.detailCardColumn}>Masculino</Text>
          </View>
          <View style={styles.detailCardContent}>
            <Icon size={18} name='cake-variant-outline' color={Colors.cai.primary} />
            <Text style={styles.detailCardColumn}>7 años</Text>
          </View>
          <View style={styles.detailCardContent}>
            <Icon size={18} name='cellphone' color={Colors.cai.primary} />
            <Text style={styles.detailCardColumn}>04143168556</Text>
          </View>
          <View style={styles.detailCardContent}>
            <Icon size={18} name='email-outline' color={Colors.cai.primary} />
            <Text style={styles.detailCardColumn}>correo@correodemo.com</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.detailCard} mode='elevated'>
        <Card.Title
          title="Suhail Brito"
          subtitle="Maestra"
          titleStyle={styles.detailCardTitle}
          subtitleStyle={styles.detailCardSubtitle}
        />
      </Card>

        <Title style={styles.detailTitle}>
          Pagos:
        </Title>

    </Wrapper>
  )
}

export default DetailAlumnos