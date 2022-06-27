import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import Login from '../screens/Auth/Login';

//IMPORT SCREENS TAREAS
import Alumnos from '../screens/Tareas/Alumnos';
import Maestras from '../screens/Tareas/Maestras';
import FormAlumnos from '../screens/Tareas/Alumnos/form';
import DetailAlumnos from '../screens/Tareas/Alumnos/detail';

import DrawerCustom from './DrawerCustom';

import { RootStackParamList, RootTabParamList, AlumnosStackParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={DrawerNavigation} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15
        },
        drawerActiveBackgroundColor: Colors.cai.primary,
        drawerActiveTintColor: Colors.cai.secundary
      }}
      drawerContent={props => <DrawerCustom {...props} />}
    >
      <Drawer.Screen
        name="Tareas Dirigidas"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Icon size={30} name='school-outline' color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="AlumnosTab"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
        }
      }}>
      <BottomTab.Screen
        name="AlumnosTab"
        component={AlumnosStackNavigator}
        options={({
          headerShown: false,
          title: 'Alumnos',
          tabBarIcon: ({ color }) => <TabBarIcon name="account" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Maestras"
        component={Maestras}
        options={{
          title: 'Maestras',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="face-woman" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TareasStack = createNativeStackNavigator<AlumnosStackParamList>();

function AlumnosStackNavigator() {

  return (
    <TareasStack.Navigator>
      <TareasStack.Screen
        name="Alumnos"
        component={Alumnos}
        options={{ headerShown: false }}
      />
      <TareasStack.Screen
        name="DetailAlumnos"
        component={DetailAlumnos}
        options={{ headerShown: false }}
      />
      <TareasStack.Screen
        name="FormAlumnos"
        component={FormAlumnos}
        options={{ headerShown: false }}
      />
    </TareasStack.Navigator>
  );
}

function TabBarIcon(props: {
  name: string;
  color: string;
}) {
  const { name, color } = props;
  return <Icon size={30} name={name} color={color} />
}
