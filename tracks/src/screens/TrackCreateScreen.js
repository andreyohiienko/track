import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h3 style={styles.title}>
        TrackCreateScreen
      </Text>
      <Map />
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
