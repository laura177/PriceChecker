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
  Button
} from "react-native";

export default class GroceryMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      foodName: '',
      price: '',
      quantity: '',
      code: ''
    };
    this.renderModal = this.renderModal.bind(this);
    // this.enterBarCode = this.enterBarCode.bind(this);
  }

  // componentDidUpdate(prevProps){
    
  // }

  onAddItem = () => {
    this.setState({ ...this.state, modalVisible: true });
  };
  onSubmit = () => {
    this.setState({ food: []})
  }
  enterBarCode = (code) => {
    if(code === this.props.foods.id){
      this.state.foodName = this.props.foods.name
      this.state.price = this.props.foods.price
      this.state.quantity = 1
    }
  }

  render() {
    console.log("PROPS>>>", this.props)
    const { modalVisible } = this.state;
    // const foodName = this.state.addedFoodItem.foodName
    // const price = this.state.addedFoodItem.price
    // const quantity = this.state.addedFoodItem.quantity
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Price Checker</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.itemColumn}>Item</Text>
          <Text style={styles.priceColumn}>Price</Text>
          <Text style={styles.qtyColumn}>Qty</Text>
        </View>
        <View>
            {this.props.foods.map((item) => {
                if(item.name.length) {
                    return (
                        <View key={item.id} style={styles.tableRow}>
                        <Text style={styles.item}>{item.name}</Text>
                        <Text style={styles.item}>{item.price}</Text>
                        <Text style={styles.item}>1</Text>
                        <Button title="+" color={'#6b818c'}/>
                        <Button title="-" color={'#6b818c'}/>
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
            <TextInput style={styles.modalInput}
            placeholder='1234'
            placeholderTextColor="#aaaaaa"
            keyboardType="number-pad"
            maxLength="4"
            value={this.state.code}
            onChangeText={() => {
              if(this.state.code === this.props.foods.id){
                this.setState({foodName: this.props.foods.name, price: this.props.foods.price, quantity: 1})
              }
            }}/>
          </View>
        <Pressable
          onPress={() => {
              this.setState({
                ...this.state,
                modalVisible: !this.state.modalVisible,
              })
          }}
        >
          <Text>Submit</Text>
        </Pressable>
        <Pressable
        onPress={() => {
          this.setState({
            ...this.state,
            quantity: 1,
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
    alignContent: "space-evenly",
    marginTop: 10,
    marginBottom: 5,
    gap: 5
  },
  itemColumn: {
    fontSize: 20,
    width: 200,
    flexDirection: "column",
  },
  priceColumn: {
    fontSize: 20,
    flexDirection: "column",
    marginRight: 110,
  },
  qtyColumn: {
    fontSize: 20,
    flexDirection: "column",
    marginRight: 5
  },
  item: {
    width: 100,
    flexDirection: "column",
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
});
