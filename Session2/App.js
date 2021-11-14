import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CustomButton} from "./components/CustomButton";
import {Product} from "./components/Product";
import {PaymentModal} from "./components/PaymentModal";

const db = [
  {
    title: 'Papanasi',
    price: 4.33,
    imgUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/1CFE9191-F494-4411-B2BE-7FC12C45C24E/Derivates/3e7cdc8e-d305-4912-82e1-3d237f9e53b0.jpg',
    amount: 0,
  },
  {
    title: 'Cheescake',
    price: 17,
    imgUrl: 'https://i0.wp.com/pastry-workshop.com/wp-content/uploads/2019/09/goat-cheese-cheesecake-1-5.jpg',
    amount: 0,
  },
  {
    title: 'Brownies',
    price: 6.49,
    imgUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg',
    amount: 0,
  },
  {
    title: 'Biscuits',
    price: 4,
    imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_choc_biscuits-f98c5dd.jpg',
    amount: 0,
  },
];

export default function App() {
  const [products, setProducts] = useState(db);
  const [visible, setVisible] = useState(false);

  return (<>
      {visible ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <PaymentModal modalVisible={visible} products={products} onPay={() => {
            // Process payment
            setProducts(db);
            setVisible(false);
          }}/>
        </View>
        :
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {products.map((product, i) => <Product {...product}
                                                 increaseAmount={() => {
                                                   const newProducts = [...products];
                                                   newProducts[i].amount++;
                                                   setProducts(newProducts);
                                                 }}
                                                 decreaseAmount={() => {
                                                   const newProducts = [...products];
                                                   newProducts[i].amount = Math.max(0, newProducts[i].amount - 1);
                                                   setProducts(newProducts);
                                                 }}
                                                 key={i}
          />)}
          <CustomButton unfilled title={'Apple Pay'} onPress={() => {setVisible(true)}}/>
        </ScrollView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 30,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  myTextInput: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    width: 200,
  },
  img: {
    width: 200,
    height: 200,
  }
});
