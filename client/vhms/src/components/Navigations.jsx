import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import CreateOwnerScreen from "../screens/CreateOwner";
import CreateVehicleScreen from "../screens/CreateVehicle";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, splashLoading } = useContext(AuthContext);
  console.log("userinfo", userInfo);

  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //         {splashLoading ? (
    //             <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
    //         ): userInfo.token ?(
    //             <Stack.Screen name="Home" component={HomeScreen} />
    //         ):(
    //             <>
    //               <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
    //               <Stack.Screen names="Register" component={RegisterScreen} options={{headerShown:false}} />
    //             </>
    //         )}
    //         {/* <Stack.Screen name="createVehicle" component={CreateVehicleScreen} />
    //         <Stack.Screen name="createOwner" component={CreateOwnerScreen} />
    //          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
    //         <Stack.Screen name="Register" component={RegisterScreen} /> */}
    //     </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : userInfo.token ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
