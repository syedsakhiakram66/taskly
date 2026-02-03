import {StyleSheet, View} from 'react-native';
import {  ShoppingListItem  } from "./components/ShoppingListItem";
import { theme } from "./theme";


export default function App() {
  const handleDelete  = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting. "),
          style: "destructive",

        },
        {text: "Cancel", style: "cancel"}
      ]
    )
  }
  return (
    <View style={styles.container}>
        <ShoppingListItem name="Coffee" />
        <ShoppingListItem name="Tea"  isCompleted/>
        <ShoppingListItem name="Milk" isCompleted/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        justifyContent: "center",
    },
});