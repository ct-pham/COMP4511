
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import Register from './Components/Register';

const AppNavigator = StackNavigator({
  LoginScreen: { screen: Login },
  RegisterScreen: { screen: Register }
});

export default function App() {
  return (
    <AppNavigator/>
  );
}


