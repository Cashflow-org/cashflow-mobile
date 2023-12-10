import { View } from "../../../components/Themed";
import { useEffect, useState } from "react";
import { Product, getAllProducts } from "../../../services/product";
import { styles } from "./style";
import ProductCard from "../../../components/ProductCard/productCard";

export default function TabOneScreen() {
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
          count={4}
          price={x.price}
          imgUrl={x.imgUrl}
        />
      ))}
    </View>
  );
}
