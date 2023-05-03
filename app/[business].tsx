import { Stack, useSearchParams } from 'expo-router'
import useAsync from 'hooks/useAsync'
import React from 'react'
import { View, Text } from 'react-native'
import { getBusinessDetail } from 'utils/businesses'

export default function Business() {
  const { business } = useSearchParams()

  const { status, value, error } = useAsync<any>(
    React.useCallback(() => getBusinessDetail(business as string), [business]),
    true,
  )

  if (status === 'idle' || status === 'pending') {
    return (
      <View>
        <Stack.Screen
          options={{ title: 'Détail business', headerShown: true }}
        />
        <Text style={{ fontSize: 28 }}>Loading 🚀...</Text>
      </View>
    )
  }

  if (status === 'error') {
    return (
      <View>
        <Stack.Screen
          options={{ title: 'Détail business', headerShown: true }}
        />

        <Text style={{ fontSize: 32 }}>{error}</Text>
      </View>
    )
  }

  if (status === 'success') {
    console.log(value)
    return (
      <View>
        <Stack.Screen options={{ title: value.name, headerShown: true }} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Pays
        </Text>
        <Text style={{ fontSize: 18 }}>{value.country}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Ville
        </Text>
        <Text style={{ fontSize: 18 }}>{value.city}</Text>

        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Quartier
        </Text>
        <Text style={{ fontSize: 18 }}>{value.street}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Vérifié
        </Text>
        <Text style={{ fontSize: 18 }}>
          {value.verified === true ? 'Oui' : 'Non'}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 15 }}>
          Actif
        </Text>
        <Text style={{ fontSize: 18 }}>
          {value.active === true ? 'Oui' : 'Non'}
        </Text>
      </View>
    )
  }
}
