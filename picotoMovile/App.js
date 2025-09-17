import { StyleSheet, StatusBar, Image, Button, Text, ScrollView, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const insets = useSafeAreaInsets();
  const increment = () => {
    if (count == 0) {
      setCount(1);  
    } else {
      setCount(0);
    }
  };

  const juego = {
    nombre: "Carlos",
    image: "https://imgs.search.brave.com/UOSfU62692jX6WbhSjcF6jRY3BI-wJCphYOmjnLvT0g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MzEyNTY2MS9mci9w/aG90by9sb25kb24t/ZW5nbGFuZC1zcGFp/bnMtZm9ybWVyLWtp/bmctanVhbi1jYXJs/b3MtaS13YXRjaGVz/LWR1cmluZy10aGUt/dWVmYS1jaGFtcGlv/bnMtbGVhZ3VlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1W/ZllJendjaW9IQXMz/LW5lcWxOc2VMS19m/UGprQ2lBdmVxc0l3/dm5uR2lJPQ",
    botonTitle: "presionameeeee",
    score: 50,
    descripcion: "Holaa soy Juan Carloss y te vigilo desde lejosss"
  };

  return (
    <SafeAreaProvider style={styles.safeArray}> 
    <ScrollView style={styles.scroll}>
      {Array.from({ length: 30 }).map((_, i) => (
        <View key={i} style={styles.card}>
          <StatusBar 
            barStyle="light-content"   
            backgroundColor="#6200EE" 
            translucent={false}        
          />
          <Image 
            source={{ uri: juego.image }}
            style={styles.image}
          />
          <Text style={styles.title}> {juego.nombre} + Score {juego.score} </Text>
          <Text style={styles.description}>{juego.descripcion}</Text>
          
          <Button 
            title={juego.botonTitle} 
            onPress={() => alert("walaaaa")} 
            color="orange" 
          />
        </View>
      ))}
    </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeArray: {
    flex: 1, 
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  },
  card: {
    alignSelf: "center",
    backgroundColor: "#fff",
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
    elevation: 3, 
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  title: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "orange",
    fontSize: 14,
    marginVertical: 5,
    textAlign: "center",
  },
});
