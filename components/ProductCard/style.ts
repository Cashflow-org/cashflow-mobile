import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    product: {
        display: 'flex',
        flexDirection: 'row',
        border: 'solid #323232 1px',
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        gap: 10,
        padding: 8,
        color: 'white',
      },
      productContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
      },
      productContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
      },
      productImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      productCounterContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        padding: 5,
        border: 'solid #323232 1px',
        borderRadius: 10,
      },
});