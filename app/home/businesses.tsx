import { useRouter } from 'expo-router'
import useAsync from 'hooks/useAsync'
import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-scaling'
import { getBusinesses } from 'utils/businesses'

export default function BussinessesScreen() {
  const { status, value, error } = useAsync<any>(getBusinesses, true)

  const router = useRouter()

  if (status === 'idle' || status === 'pending') {
    return <Text style={{ fontSize: 28 }}>Loading 🚀...</Text>
  }

  if (status === 'error') {
    return <Text style={{ fontSize: 32 }}>{error} 😞</Text>
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      data={value}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/[business]',
              params: {
                business: item._id,
              },
            })
          }
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginVertical: scale(20),
            marginHorizontal: scale(15),
            borderRadius: 10,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  )
}
