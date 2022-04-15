import { Text, TouchableOpacity } from 'react-native';

function Home({ navigation }) {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
      <Text>Home Screen</Text>
    </TouchableOpacity>
  );
}
export default Home;
