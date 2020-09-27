import React, { useContext } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.title}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
})
