import {StyleSheet, View} from 'react-native';
import {  ShoppingListItem  } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { Link } from "expo-router";

export default function Index() {
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
        <Link
                href="/counter"
                style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
              >
                Go to /counter
           </Link>

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