import useAsync from "hooks/useAsync";
import { Text, View } from "react-native";
import { getServices } from "utils/services";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {scale} from 'react-native-size-scaling'

export default function ServicesScreen() {
  const { status, value, error } = useAsync<any>( getServices, true);


  if( status === "idle" || status === "pending"    ) {
<Text style={{fontSize: 32}}>Loading...</Text>
  }

  if(status === "error" ) {
<Text style={{fontSize: 32}}>{error}</Text>
  }



  return <FlatList style={{ flex: 1 }} contentContainerStyle={{ }} data={value} renderItem={({item}) =><View style={{backgroundColor: "white", padding: 10, 
  marginVertical: scale(20) , marginHorizontal: scale(15), borderRadius: 10}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
  </View> } />
}
