const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MealFull from "./screens/MealFull";
import EditAddOn from "./screens/EditAddOn";
import Homepage from "./screens/Homepage";
import RestaurantMenu from "./screens/RestaurantMenu";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Search from "./screens/Search";
import PhoneVerification from "./screens/PhoneVerification";
import MealCollapsed from "./screens/MealCollapsed";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MealFull"
              component={MealFull}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditAddOn"
              component={EditAddOn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMenu"
              component={RestaurantMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhoneVerification"
              component={PhoneVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealCollapsed"
              component={MealCollapsed}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
