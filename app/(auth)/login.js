import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { TextInput } from "react-native-element-textinput";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-size-scaling";
import api from "utils/api";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const logUser = async () => {
    try {
      const request = await api("/auth/login", "POST", { email, password });

      const response = await request.json();

      console.log(response, "response of logging");

      if (request.status === 200) {
        // add async storage hereee
        await AsyncStorage.setItem("user", JSON.stringify(response)).then(
          () => {
            router.replace("/home/businesses");
          }
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  console.log("login, layout hereee ");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <View style={{ alignItems: "center", flex: 1 }}>
        <Image
          source={require("assets/quickdo.png")}
          style={{ width: 250, height: 100 }}
          resizeMode="contain"
        />
        <TextInput
          value={email}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Email"
          placeholder="entgrez votre adresse email"
          placeholderTextColor="gray"
          focusColor="#DDD"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput
          mode="password"
          value={password}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Mot de passe"
          placeholder="entrez votre mot de passe"
          placeholderTextColor="gray"
          focusColor="#DDDDDD"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Pressable
          onPress={logUser}
          style={{
            backgroundColor: "blue",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
    marginHorizontal: 25,
    marginVertical: 15,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 14,
    position: "absolute",
    top: -10,
    backgroundColor: "white",
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
