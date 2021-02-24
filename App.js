import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ForumsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('WelcomeScreen')} title="Go back home" />
      <ScrollView>

      </ScrollView>
      </View>
  )
}

function WelcomeScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <StatusBar style='auto' />
    <Image style={styles.logo} source={require('./pangaea.png')}/>
      <Text style={styles.title}>Welcome to the Federation of Pangaea App</Text>
      <Text style={styles.bodycontent}> To navigate swipe the drawer open </Text>
      <Text style={styles.bodycontent}> from the left </Text>
      <Text style={styles.bodycontent}> Register in the forums to participate</Text>
      <Text style={styles.bodycontent}> as a citizen of Pangaea</Text>
      <Button
        onPress={() => navigation.navigate('Forums')} title="Go To Pangaea Forums" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="WelcomeScreen">
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Forums" component={ForumsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20
  },
  bodycontent: {
    fontSize: 14
  }

});