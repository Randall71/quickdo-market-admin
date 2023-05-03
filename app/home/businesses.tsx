import useAsync from "hooks/useAsync";
import {View , Text} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import api from "utils/api";
import { getBusinesses, myFunction } from "utils/businesses";
import {scale} from 'react-native-size-scaling'


export default function BussinessesScreen() {

    const { status, value, error } = useAsync<any>( getBusinesses, true);


    if( status === "idle" || status === "pending"    ) {
<Text style={{fontSize: 32}}>Loading...</Text>
    }

    if(status === "error" ) {
<Text style={{fontSize: 32}}>{error}</Text>
    }

  

    return <FlatList style={{ flex: 1 }} contentContainerStyle={{flex: 1 }} data={value} renderItem={({item}) =><View style={{backgroundColor: "white", padding: 10, 
    marginVertical: scale(20) , marginHorizontal: scale(15), borderRadius: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
    </View> } />
}