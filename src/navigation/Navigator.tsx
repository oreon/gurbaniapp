import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

import React from "react";
import { Text } from "react-native-rapi-ui";
import DailyScreen from "../screens/Daily";
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

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Daily readings" component={DailyScreen} />
    </Tab.Navigator>
  );
}
