import { View, Image, Text, ImageSourcePropType } from "react-native";
import { XCircle } from "react-native-feather";
import { styles } from "./style";
import { FC } from "react";

interface ProductCardProps {
  name: string;
  count?: number;
  price: number;
  imgUrl: string;
}

const ProductCard: FC<ProductCardProps> = ({ price, count, name, imgUrl }) => {
  const CapitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <View style={styles.product}>
        <View>
          <Image source={{ uri: imgUrl }} style={styles.productImage}></Image>
        </View>
        <View style={styles.productContainer}>
          <View style={styles.productContent}>
            <Text style={styles.text}>{CapitalizedName}</Text>
            {count && <XCircle width="16px" color="white" />}
          </View>
          <View style={styles.productContent}>
            {count && (
              <View style={styles.productCounterContainer}>
                <Text style={styles.text}>-</Text>
                <Text style={styles.text}>{count}</Text>
                <Text style={styles.text}>+</Text>
              </View>
            )}
            <Text style={styles.text}>R${price.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductCard;
