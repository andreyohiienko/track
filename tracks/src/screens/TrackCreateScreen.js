import '../_mockLocation'
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location)
        },
      )
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
