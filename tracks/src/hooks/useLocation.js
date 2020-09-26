import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location'
import { useEffect, useState } from 'react'

export default (callback) => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      )
    } catch (error) {
      setErr(error)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return [err]
}
