// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  console.log('Homescreen', navigation);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() =>
          navigation.navigate('Details', {id: 1, Name: 'Reeturaj'})
        }>
        Home Screen
      </Text>
      <Text onPress={() => navigation.navigate('Services')}>
        Detail Screen Again
      </Text>
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  console.log('detail', DetailsScreen);
  const {id, Name} = route.params;
  console.log('route', route);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('Services')}>
        Details Screen
      </Text>
      <Text> Item : {id}</Text>
      <Text>Name : {Name}</Text>
    </View>
  );
}

function Services({navigation}) {
  console.log('detail', Services);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('Details')}>Services</Text>
      {/* <Text onPress={() => navigation.goBack()}>Details Screen Again</Text> */}
      <Text>Hiii</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
console.log('createNativeStackNavigator', Stack);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Services" component={Services} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
