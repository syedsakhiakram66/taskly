import { StyleSheet, TextInput, FlatList, View, Text } from "react-native";
import {  ShoppingListItem  } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
    id: string;
    name: string;
}

const initialList: ShoppingListItemType[] = [
    {id: "1", name: "Coffee"},
    {id: "2", name: "Tea"},
    {id: "3", name: "Milk"},
];

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
  const [shoppingList, setShoppingList] = useState(initialList);
  const [value, setValue] = useState<string>();

  const handleSubmit = () => {
      if (value) {
          const newShoppingList = [
              {id: new Date().toISOString(), name: value},
              ...shoppingList
              ];
          setShoppingList(newShoppingList);
          setValue(undefined)
      }
  }

  return (
    <FlatList
        ListHeaderComponent={
        <TextInput
            value={value}
            style={styles.textInput}
            onChangeText={setValue}
            placeholder="E.g Coffee"
            onSubmitEditing={handleSubmit}
            returnKeyType="done"
            />
        }
        ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
        <Text>Your shopping list is empty</Text>
        </View>
        }

        data={shoppingList}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        stickyHeaderIndices={[0]}
        renderItem={({item}) => <ShoppingListItem name={item.name} />}
    ></FlatList>



  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        paddingTop: 12,
    },
    contentContainer: {
        paddingBottom: 24,
    },
    textInput: {
        borderColor: theme.colorLightGrey,
        borderWidth: 2,
        padding: 12,
        fontSize: 18,
        borderRadius: 15,
        marginHorizontal: 12,
        marginBottom: 12,
        marginTop: 12,
        backgroundColor: theme.colorWhite,
    },
    listEmptyContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 18,
    },
});