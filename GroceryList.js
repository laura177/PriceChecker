import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Alert,
  TextInput,
  Button
} from "react-native";
import foods from './sampleData/foods'


const GroceryList = () => {
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputtedCode, setInputtedCode] = useState('');

    const handleItemSubmit = () => {
        const foundItem = foods.find(item => inputtedCode === item.id);
        foundItem.quantity = 1;
        const newItems = [...items, foundItem];
        setItems(newItems);
    }

    const handleIncreaseQty = (id) => {
        const foundItem = items.find(item => id === item.id);
        foundItem.quantity++;
        const newItems = [...items];
        setItems(newItems);
    }

    const handleDecreaseQty = (id) => {
        const foundItem = items.find(item => id === item.id);
        foundItem.quantity--;
        const newItems = [...items];
        setItems(newItems);
    }

   const calculateTotal = () => {
       let totalSum = 0
       for(let i = 0; i < items.length; i++){
           let currentItem = items[i];
           let convertPrice = parseInt(currentItem.price)
           let mult = convertPrice * currentItem.quantity
           totalSum += mult
        }
        return totalSum
    }

    const total = items.length === 0 ? 0 : calculateTotal()

    return (
        <>
    <View style={styles.container}>
        <Text style={styles.header}>Price Checker</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.itemColumn}>Item</Text>
          <Text style={styles.priceColumn}>Price</Text>
          <Text style={styles.qtyColumn}>Qty</Text>
        </View>
        <View style={styles.container}>
          {items.map((item) => {
                return (
                    <View key={item.id} style={styles.tableRow}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.price}</Text>
                    <Text style={styles.item}>{item.quantity}</Text>
                    <Button title="+" color={'#6b818c'} onPress={() => handleIncreaseQty(item.id)}/>
                    <Button title="-" color={'#6b818c'} onPress={() => handleDecreaseQty(item.id)}/>
                    </View>
                )
          })}
        </View>
        <View>
        <View style={styles.inputContainer}>
        <Button title="Add Item" color={'#6b818c'} style={styles.addItemButton}/>
        </View>

        <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible) 
        }}
        style={styles.modalView}>
            <View>
        <Text style={styles.modalText}>Enter Barcode Number</Text>
            <TextInput style={styles.modalInput}
            placeholder='0001'
            placeholderTextColor="#aaaaaa"
            keyboardType="number-pad"
            maxLength="4"
            value={inputtedCode}
            onChangeText={setInputtedCode}
            />
            <Button title="Submit" color={'#6b818c'} onPress={handleItemSubmit}/>
            <Button title="Cancel" color={'#6b818c'} onPress={() => setModalVisible(!modalVisible)}/>
          </View>
        </Modal>
        </View>
    </View>
    <View>
        <Text style={styles.total}>Total: ${total}</Text>
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "marginTop",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 5,
      fontSize: 30,
    },
    tableHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 5,
      borderBottomColor: "black",
      borderBottomWidth: 2,
    },
    tableRow: {
      flexDirection: "row",
      alignContent: "space-between",
      marginTop: 10,
      marginBottom: 5,
      gap: 5
    },
    itemColumn: {
      fontSize: 20,
      width: 125,
      flexDirection: "column",
    },
    priceColumn: {
      fontSize: 20,
      flexDirection: "column",
      marginRight: 100,
      width: 70
    },
    qtyColumn: {
      fontSize: 20,
      flexDirection: "column",
      marginRight: 10,
      width: 70
    },
    item: {
        flex: 1,
      width: 75,
      marginLeft: 70,
      flexDirection: "column",
      justifyContent: "space-evenly"
    },
    column: {
      flexDirection: "column",
      marginVertical: 40
    },
    modalView: {
      margin: 20,
      backgroundColor: '#D3EAEE',
      borderRadius: 10,
      borderColor: 'black',
      padding: 50,
      shadowColor: '#6B818C',
      shadowOffset: {
        width: 2,
        height: 6,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 20,
      marginTop: '40%',
    },
    modalInput: {
      height: 48,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: 'black',
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 5,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
    },
    inputContainer: {
        flex: 1,
        alignItems: "center"
    },
    input: {
        height: 48,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: 'black',
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 5,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
    },
    total: {
        marginBottom: 200
    },
    addItemButton: {
        marginBottom: 140
    },
  });
  
export default GroceryList