import { StyleSheet, Image, Button, Text, View } from 'react-native';
import "./style.css"
export default function App() {
  return (
    <View id='holitas'>
      <Image
        source={{ uri: "https://stock.adobe.com/search/images?k=nes" }}
        style={{ width: 50, height: 50, marginTop: 20 }}
      />
      <Button title="Presioname" 
        onPress={() => alert("¡Hola!")}
        color="orange">
      </Button>
     <Text style={{ color:"red", fontSize: "30px"}}> quien tu misterioso amor, tu gran ocupacion, tu misterioso alguieennnn</Text>
    </View>
  );
}
