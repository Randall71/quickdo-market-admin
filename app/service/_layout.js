import { Link, Stack, useRouter } from 'expo-router'
import { View, Text } from 'react-native'

export default function NoteLayout() {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="[service]"
        options={{
          headerShown: true,
          title: 'Détail du service',
        }}
      />
    </Stack>
  )
}
