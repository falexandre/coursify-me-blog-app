import React from 'react';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Main from './src/navigation';

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    const theme = extendTheme({});

    return (
        <NativeBaseProvider theme={theme}>
            <StatusBar />
            <Main/>
        </NativeBaseProvider>
    );
}

