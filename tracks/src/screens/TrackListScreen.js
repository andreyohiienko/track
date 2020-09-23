import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
