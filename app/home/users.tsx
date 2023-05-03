import useAsync from 'hooks/useAsync'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-scaling'
import { getUsers } from 'utils/users'

export default function UsersScreen() {
  const { status, value, error } = useAsync<any>(getUsers, true)

  if (status === 'idle' || status === 'pending') {
    return <Text style={{ fontSize: 32 }}>Loading...</Text>
  }

  if (status === 'error') {
    return <Text style={{ fontSize: 32 }}>{error} 😞</Text>
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{}}
      data={value}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginVertical: scale(20),
            marginHorizontal: scale(15),
            borderRadius: 10,
          }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {item.last_name} {item.first_name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: scale(5) }}>
            <Text>{item.email}</Text>
          </View>
        </View>
      )}
    />
  )
}
