import {
  Stack,
  Tabs,
  usePathname,
  useSearchParams,
  useSegments,
} from 'expo-router'
import useAsync from 'hooks/useAsync'
import React from 'react'
import { View, Text } from 'react-native'
import { getServiceDetail } from 'utils/services'

export default function Service() {
  const { service } = useSearchParams()

  const { status, value, error } = useAsync<any>(
    React.useCallback(() => getServiceDetail(service as string), [service]),
    true,
  )

  if (status === 'idle' || status === 'pending') {
    return <Text style={{ fontSize: 28 }}>Loading 🚀...</Text>
  }

  if (status === 'error') {
    return <Text style={{ fontSize: 32 }}>{error}</Text>
  }

  if (status === 'success') {
    return (
      <View>
        {/* <Tabs.Screen
          options={{
            href: {
              pathname: '',
              params: {
                service: '',
              },
            },
          }}
        /> */}
        <Stack.Screen options={{ title: value.name }} />
        {/* <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Nom du service
        </Text>
        <Text style={{ fontSize: 18 }}>{value.description}</Text> */}
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Description
        </Text>
        <Text style={{ fontSize: 18 }}>{value.description}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Prix
        </Text>
        <Text style={{ fontSize: 18 }}>{value.price}</Text>

        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Status
        </Text>
        <Text style={{ fontSize: 18 }}>{value.status}</Text>
      </View>
    )
  }
}
