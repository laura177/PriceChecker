import React, {useEffect, useState} from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  StyleSheet,
  Alert,
  TextInput,
  Button
} from "react-native";


const GroceryList = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputtedCode, setInputtedCode] = useState('')

    const increaseQuantity = (index) => {
        const currentItems = [...item];


    }
    //currently just have all 3 food items from sample
    //data rendered on page, but I want to add each item to item state array, 
    //with quantity key value default to 1
    //
    //need to enter ID number into text input, then check if it matches ID in foods data,
    //then add to item state

    //{name: , price: , quantity: }
    console.log("PROPS?!?", props)
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
          {item.map((item) => {
              if(item.name.length) {
                return (
                    <View key={item.id} style={styles.tableRow}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.price}</Text>
                    <Text style={styles.item}>{quantity}</Text>
                    <Button title="+" onPress={() => Alert.alert("button pressed")}/>
                    <Button title="-" />
                    </View>
                )
            }
          })}
        </View>
        <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            value={inputtedCode}
            placeholder='1234'
            placeholderTextColor="#aaaaaa"
            keyboardType="number-pad"
            maxLength="4"
            onChangeText={code => setInputtedCode(code)}/>
        <Button title="Add Item" onPress={(code) => {
            setItem(props.food)
        }}/>
        </View>
        
        {/* <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible) 
        }}
        style={styles.modalView}>
            <View>
        <Text>Enter Barcode Number</Text>
            <TextInput style={styles.modalInput}
            placeholder='1234'
            placeholderTextColor="#aaaaaa"
            keyboardType="number-pad"
            maxLength="4"
            />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
        

    </View>
    <View>
        <Text style={styles.total}>Total: </Text>
    </View>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        testItems: state.test
    }
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
      marginRight: 90
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
    }
  });
  
export default GroceryList