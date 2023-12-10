import { Modal, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { FC, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../../components/ProductCard/productCard";
import { Product, getAllProducts } from "../../services/product";

interface AddProductModalProps {
  handleClose: () => void;
}

const AddProductModal: FC<AddProductModalProps> = ({ handleClose }) => {
  const [products, setProducts] = useState<Product[]>();
  const getProducts = async () => {
    const products = await getAllProducts();
    setProducts(products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.ModalView}>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={handleClose}>
          <Text>close</Text>
        </TouchableOpacity>
        {products?.map((x) => (
          <ProductCard
            key={x.id}
            name={x.name}
            price={x.price}
            imgUrl={x.imgUrl}
          ></ProductCard>
        ))}
      </View>
    </View>
  );
};

export default AddProductModal;

const styles = StyleSheet.create({
  ModalView: {
    flex: 1,
    marginTop: "40%",
    backgroundColor: "#323232",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
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
    backgroundColor: "#323232",
  },
});
