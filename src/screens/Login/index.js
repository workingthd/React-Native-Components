import {
  StyleSheet, Text, View, ImageBackground,
} from 'react-native';

import Card from '../../../components/cardcomp';

function Login() {
  return (
    <View>
      <ImageBackground source={{ uri: 'https://www.teahub.io/photos/full/208-2084374_simple-blue-wallpaper-phone.jpg' }} style={styles.imagebackground}>
        <View style={styles.imageView}>
          {/* <Image source={require('../../../assets/Chip-Logo.png')} /> */}
          <Text style={styles.imageText}>
            Login
          </Text>
          <Card />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  imageView: {
    // justifyContent: 'center',
    flex: 6,
    marginTop: '20%',
    alignItems: 'center',
  },
  imagebackground: {
    width: '100%', height: '100%',
  },
});

export default Login;
