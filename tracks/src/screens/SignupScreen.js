import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to mainflow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
