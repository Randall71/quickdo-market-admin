import { useRouter } from 'expo-router'
import useAsync from 'hooks/useAsync'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-scaling'
import { API_URL } from 'utils/api'
import { getServices } from 'utils/services'

export default function ServicesScreen() {
  const { status, value, error } = useAsync<any>(getServices, true)

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
      data={value}
      renderItem={({ item }) => {
        // console.log(`${API_URL}/${item.image}`, 'IMAGEEEEE')
        return (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/service/[service]',
                params: { service: item._id },
              })
            }
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginVertical: scale(20),
              marginHorizontal: scale(15),
              borderRadius: 10,
            }}>
            <Image
              source={{
                uri: `${API_URL}/${item.image}`,
                headers: {
                  'application-key': 'MRZGFPLYPXMETWJBTV2Z84AR',
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUyNGFlMzM1YWM0MjA4YjZhNDRiNzUiLCJmaXJzdF9uYW1lIjoiVGVzdCBRdWlja2RvIiwibGFzdF9uYW1lIjoibGFzdCBuYW1lIHF1aWNrZG8iLCJlbWFpbCI6Inlhbm5waGlwcDE3QGdtYWlsLmNvbSIsImNvdW50cnkiOiJjYW1lcm9vbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzExNDcyMywiZXhwIjoxNjgzMjg3NTIzfQ.oghrPdi_R6KwslLsnE-5vpRK95XystUdiyGgVCMUnbw`,
                },
                width: 300,
                height: 200,
              }}
              style={{ height: 100, width: 100 }}
            />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
      }}
    />
  )
}
