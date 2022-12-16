import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useColorScheme } from 'react-native';
import { ROUTES } from '../constant';
import { HomeScreen } from '../modules';
import { Colors } from '../theme';

const RootStack = createStackNavigator();

const AppContainer = () => {
  const theme = useColorScheme();

  return (
    <>
      <NavigationContainer
        theme={theme === 'dark' ? Colors.dark : Colors.light}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={ROUTES.Home} component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppContainer;
