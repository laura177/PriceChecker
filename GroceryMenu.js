import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  StyleSheet,
  Alert,
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
      addedFood: [],
    };
    this.renderModal = this.renderModal.bind(this);
  }

  onAddItem = () => {
    this.setState({ ...this.state, modalVisible: true });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Price Checker</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.itemColumn}>Item</Text>
          <Text style={styles.priceColumn}>Price</Text>
        </View>
        <View>
            {foods.map((item) => {
                if(item.name.length) {
                    return (
                        <View style={styles.tableRow}>
                        <Text style={styles.item}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
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

        <Text>Modal is visible!</Text>
          </View>
        <Pressable
          onPress={() => {
            this.setState({
              ...this.state,
              newFood: "",
              newExpiration: "",
              noFoodError: false,
              modalVisible: !this.state.modalVisible,
            });
          }}
        >
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
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 5,
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
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    marginTop: '40%',
  },
});
