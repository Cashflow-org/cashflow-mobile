import { View, Image, Text, ImageSourcePropType } from "react-native";
import { XCircle } from "react-native-feather";
import { styles } from "./style";
import { FC } from "react";
import { PlusCircle } from "react-native-feather";

interface ProductCardProps {
  name?: string;
  count?: number;
  price?: number;
  imgUrl?: string;
  isNew?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  price,
  count,
  name,
  imgUrl,
  isNew = false,
}) => {
  let CapitalizedName;
  name
    ? (CapitalizedName = name?.charAt(0).toUpperCase() + name.slice(1))
    : (CapitalizedName = "");
  return (
    <>
      <View style={styles.product}>
        {isNew ? (
          <>
            <View style={styles.plusContainer}>
              <PlusCircle color={'#c7c602'} width={36} height={36}></PlusCircle>
            </View>
          </>
        ) : (
          <>
            <View>
              <Image
                source={{ uri: imgUrl }}
                style={styles.productImage}
              ></Image>
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
                {price && <Text style={styles.text}>R${price.toFixed(2)}</Text>}
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default ProductCard;
