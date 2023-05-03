import { Slot, Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function RootLayout() {
  const router = useRouter()

  React.useEffect(() => {
    router.replace('/login')
  }, [router])

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
