import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreent = () => {
  const { signout } = useContext(AuthContext)

  return (
    <View>
      <Text style={styles.title}>AccountScreent</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  )
}

export default AccountScreent

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
