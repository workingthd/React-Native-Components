import {
  Image, View,
} from 'react-native';
import Chipbutton from '../../../components/buttons/index';
import LinkText from '../../../components/LinkText';
import styles from './style';

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.tinyLogo} source={require('../../../assets/Chip-Logo.png')} />
      </View>

      <Chipbutton text="Sign up as a User" />
      <Chipbutton text="Sign up as Merchant" customStyle={styles.SignupMerchantButton} customText={styles.SignupMerchantText} />
      <LinkText text="Back to login!" />

    </View>
  );
}

export default SignUp;
