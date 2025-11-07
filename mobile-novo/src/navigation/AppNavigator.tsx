import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PracticesScreen from '../screens/PracticesScreen';
import LoginScreen from '../screens/auth/LoginScreen';
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Practices" component={PracticesScreen} />
    </Stack.Navigator>
  );
}
