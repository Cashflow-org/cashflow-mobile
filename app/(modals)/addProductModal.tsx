import { Modal, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function AddProductModal() {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.ModalView}>
        <View style={styles.centeredView}>
          <Text>test</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  ModalView: {
    flex: 1,
    marginTop: '40%',
    backgroundColor: "#323232",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "#323232",
  },
});
