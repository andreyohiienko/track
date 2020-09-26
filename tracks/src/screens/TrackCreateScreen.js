import '../_mockLocation'
import { requestPermissionsAsync } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
    } catch (error) {
      setErr(error)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return (
    <SafeAreaView>
      <Text h3 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
