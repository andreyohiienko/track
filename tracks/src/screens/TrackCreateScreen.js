import React, { useCallback, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import '../_mockLocation'

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)

  const callback = useCallback((location) => {
    addLocation(location, state.recording)
  })

  const [err] = useLocation(isFocused, callback)

  return (
    <SafeAreaView>
      <Text h3 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
