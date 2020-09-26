import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import '../_mockLocation'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
  const [err] = useLocation(addLocation)

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
