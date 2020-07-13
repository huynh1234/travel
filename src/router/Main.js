import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from '../screen/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import Listplace from '../components/Listplace';
import Screen1 from '../screen/Screen1';
const Stack = createStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // screenOptions={{
      //   header: ()=> null
      // }}
      >
          <Stack.Screen name="Screen2" component={Screen2} 
            options={{
              title: 'Place',
            }}
          />
          <Stack.Screen name="Listplace" component={Listplace} />
          <Stack.Screen name="Screen1" component={Screen1} 
          options={{
            title: 'travel',
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
