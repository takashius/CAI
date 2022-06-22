import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isFontLoaded , setFontLoaded ] = useState<boolean>(false);

  useEffect(()=> {
    loadFonts();
  }, [] )

  const loadFonts = async () => {
    await Font.loadAsync({
      'RobotoBold' : require('./assets/fonts/Roboto-Bold.ttf'),
      'RobotoRegular' : require('./assets/fonts/Roboto-Regular.ttf'),
    });
    setFontLoaded(true);
  }

  if (!isLoadingComplete || !isFontLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar backgroundColor='transparent' translucent={true} />
      </SafeAreaProvider>
    );
  }
}
