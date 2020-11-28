import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WellcomeAuth } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} 
            options={{
                headerShown: false,
            }}/>
            <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
                headerShown: false,
            }} />
            <Stack.Screen 
                name="WellcomeAuth" 
                component={WellcomeAuth} 
                options={{
                    headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default Router;