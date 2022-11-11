import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

import React from "react";
import { Text } from "react-native-rapi-ui";
import HomeScreen from "../screens/Home";
import QuotesScreen from "../screens/Quotes";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <RootNavigator />
    </NavigationContainer>
  );
}

export function RootNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Quotes"
        component={QuotesScreen}
        options={({ route }) => ({
          title: "Quotes for  " + route.params.data,
        })}
      />
    </Stack.Navigator>
  );
}

export function SettingsScreen() {
  return (
    <>
      <Text size="h2"> Read a shabad </Text>
    </>
  );
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
