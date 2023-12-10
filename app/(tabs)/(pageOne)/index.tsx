import { View } from "../../../components/Themed";
import { useEffect, useState } from "react";
import { Product, getAllProducts } from "../../../services/product";
import { styles } from "./style";
import ProductCard from "../../../components/ProductCard/productCard";
import AddProductModal from "../../(modals)/addProductModal";
import { Modal } from "react-native";
import { PlusCircle } from "react-native-feather";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const [addProductModalVisible, setAddProductModalVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>();
  const getProducts = async () => {
    const products = await getAllProducts();
    setProducts(products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.container}>
      {products?.map((x) => (
        <ProductCard
          key={x.id}
          name={x.name}
          price={x.price}
          imgUrl={x.imgUrl}
        />
      ))}
      <TouchableOpacity onPress={() => setAddProductModalVisible(true)}>
        <ProductCard isNew={true}></ProductCard>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={addProductModalVisible}>
        <AddProductModal handleClose={() => setAddProductModalVisible(false)}></AddProductModal>
      </Modal>
    </View>
  );
}
