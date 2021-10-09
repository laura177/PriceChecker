import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";

const foods = [
  {
    id: "0001",
    qrUrl:
      "https://zxing.org/w/chart?cht=qr&chs=350x350&chld=L&choe=UTF-8&chl=0001",
    thumbnail:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/appl e/237/banana_1f34c.png",
    name: "Banana",
    price: "$1.00",
  },
  {
    id: "0002",
    qrUrl:
      "https://zxing.org/w/chart?cht=qr&chs=350x350&chld=L&choe=UTF-8&chl=0002",

    thumbnail:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/appl e/237/red-apple_1f34e.png",
    name: "Apple",
    price: "$4.00",
  },
  {
    id: "0003",
    qrUrl:
      "https://zxing.org/w/chart?cht=qr&chs=350x350&chld=L&choe=UTF-8&chl=0003",
    thumbnail:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/appl e/237/sparkles_2728.png",
    name: "Other Stuff",
    price: "$10.00",
  },
];

export default class GroceryMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      addedFood: "",
      addedFoodPrice: "",
      addedFoodQty: "",
      food: []
    };
    this.renderModal = this.renderModal.bind(this);
  }

  onAddItem = () => {
    this.setState({ ...this.state, modalVisible: true });
  };
  onSubmit = () => {
    this.setState({ food: []})
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Price Checker</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.itemColumn}>Item</Text>
          <Text style={styles.priceColumn}>Price</Text>
          <Text style={styles.qtyColumn}>Qty</Text>
        </View>
        <View>
            {foods.map((item) => {
                if(item.name.length) {
                    return (
                        <View key={item.id} style={styles.tableRow}>
                        <Text style={styles.item}>{item.name}</Text>
                        <Text style={styles.item}>{item.price}</Text>
                        <Text style={styles.item}>1</Text>
                        </View>
                    )
                }
            })}
        </View>
        <TouchableOpacity onPress={() => this.onAddItem()}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        {this.state.modalVisible ? this.renderModal() : <></>}
        <View>
            <Text>Total: </Text>
        </View>
      </View>
    );
  }
  renderModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setState({ ...this.state, modalVisible: !visible });
        }}
        style={styles.modalView}
      >
          <View>
        <Text>Enter Barcode Number</Text>
            <TextInput style={styles.modalInput} placeholder='1234' placeholderTextColor="#aaaaaa" />
          </View>
        <Pressable
          onPress={() => {
            if(this.state)
            this.setState({
              ...this.state,
              addedFood: "",
              addedFoodPrice: "",
              noFoodError: false,
              modalVisible: !this.state.modalVisible,
            });
          }}
        >
          <Text>Submit</Text>
        </Pressable>
        <Pressable
        onPress={() => {
          this.setState({
            ...this.state,
            addedFood: "",
            addedFoodPrice: "",
            noFoodError: false,
            modalVisible: !this.state.modalVisible,
          });
        }}>
          <Text>Cancel</Text>
          </Pressable>
      </Modal>
    );
  };
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
    width: 150,
    flexDirection: "column",
  },
  priceColumn: {
    fontSize: 20,
    flexDirection: "column",
    marginRight: 90,
  },
  qtyColumn: {
    fontSize: 20,
    flexDirection: "column",
    marginRight: 10
  },
  item: {
    width: 150,
    flexDirection: "column",
  },
  column: {
    flexDirection: "column",
    marginRight: 90
  },
  modalView: {
    margin: 20,
    backgroundColor: '#b2e4db',
    borderRadius: 10,
    borderColor: 'black',
    padding: 50,
    shadowColor: '#a76d60',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
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
});
