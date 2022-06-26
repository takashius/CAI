const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const colorPrincipal = '#5555be';
const colorSecundario = '#dadbfc';
const colorButton = '#a2a2db';
const colorGrey = '#757575'

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: colorSecundario,
    tabIconDefault: tintColorLight,
    tabIconSelected: tintColorDark,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#FFF',
    tabIconSelected: tintColorDark,
  },
  cai:{
    primary: colorPrincipal,
    secundary: colorSecundario,
    background:{
      white: '#FFF'
    },
    white: '#FFF',
    gray: colorGrey,
    button: colorButton,
  }
};
