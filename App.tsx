import React from 'react';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Main from './src/navigations';
import { StateGlobalProvider } from './src/stores/global.context';

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
            <StateGlobalProvider>
                <StatusBar/>
                <Main/>
            </StateGlobalProvider>
        </NativeBaseProvider>
    );
}

