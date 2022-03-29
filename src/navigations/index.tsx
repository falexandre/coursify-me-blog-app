import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Detail, Home } from '../screens';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

/**
 *                              screenOptions={{
 *                                  cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
 *                              }}
 */