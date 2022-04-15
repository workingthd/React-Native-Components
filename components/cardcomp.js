import {
  View, StyleSheet, Text, TextInput, TouchableOpacity,
} from 'react-native';

function Card({
  navigation,
}) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.card}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Number"
          secureTextEntry={false}
          placeholderTextColor="#002f6c"
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#002f6c"
        />
        <View style={{
          padding: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              flex: 1, maxHeight: 60, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center', borderColor: 'lightgrey', borderWidth: 1, borderRadius: 80, margin: 15, width: 250,
            }}
          >
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: 22, color: 'grey' }}>OR</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={{
          flex: 1, maxHeight: 55, backgroundColor: '#0096aa', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 0.2, borderRadius: 80, width: 300, marginTop: -70,
        }}
      >
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Create an Account</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10%',
    paddingBottom: 35,
  },

  inputBox: {
    // paddingLeft: 20,
    height: 55,
    width: 230,
    // backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    // borderRadius: 50,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
    marginHorizontal: 60,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Card;
