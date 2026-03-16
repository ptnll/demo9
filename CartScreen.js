import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CartScreen = () => {
  return (
    <View style={styles.container}>
      {/* 1. Dải màu vàng nhạt phía trên cùng của Header */}
      <View style={styles.yellowCurveBg} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn}><Text style={styles.backArrow}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity style={styles.headerBtn}>
             <Image source={require('./src/assets/icon-delete.png')} style={styles.icon24} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 2. Phần ảnh Burger: Gồm 1 ảnh to và 1 ảnh chứa 3 cái bánh nhỏ */}
        <View style={styles.imageSection}>
          <Image 
            source={require('./src/assets/cart-burger-main.png')} 
            style={styles.mainBurgerImage}
            resizeMode="cover"
          />
          <View style={styles.smallImagesWrapper}>
             <Image 
                source={require('./src/assets/three-burgers-row.png')} 
                style={styles.threeBurgersImage}
                resizeMode="contain"
             />
          </View>
        </View>

        {/* 3. Thông tin chi tiết món ăn */}
        <View style={styles.infoSection}>
          <View style={styles.titlePriceRow}>
            <Text style={styles.foodTitle}>BURGER</Text>
            <Text style={styles.priceValue}>$28</Text>
          </View>
          
          <View style={styles.ratingCounterRow}>
            <Text style={styles.ratingText}>⭐ 4.9 (3k+ Rating)</Text>
            <View style={styles.counterRow}>
               <TouchableOpacity style={styles.counterCircle}><Text style={styles.counterText}>+</Text></TouchableOpacity>
               <Text style={styles.qtyNumber}>02</Text>
               <TouchableOpacity style={styles.counterCircle}><Text style={styles.counterText}>−</Text></TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 4. Địa chỉ giao hàng (Màu xanh bạc hà) */}
        <View style={styles.deliveryContainer}>
          <View style={styles.addressBox}>
             <View style={styles.locationIconWrap}>
                <Image source={require('./src/assets/icon-location.png')} style={styles.icon20} />
             </View>
             <View style={{marginLeft: 12}}>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressValue}>Dhaka, Bangladesh</Text>
             </View>
          </View>
          <TouchableOpacity style={styles.editSquare}>
             <Image source={require('./src/assets/icon-edit-white.png')} style={styles.icon20} />
          </TouchableOpacity>
        </View>

        {/* 5. Phương thức thanh toán */}
        <View style={styles.paymentContainer}>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('./src/assets/icon-card.png')} style={styles.cardImage} />
              <Text style={styles.paymentMethodLabel}>Payment Method</Text>
           </View>
           <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
           </TouchableOpacity>
        </View>

        {/* 6. Checkout Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryHeader}>Checkout Summary</Text>
          <View style={styles.summaryRow}><Text style={styles.sLabel}>Subtotal (2)</Text><Text style={styles.sVal}>$56</Text></View>
          <View style={styles.summaryRow}><Text style={styles.sLabel}>Delivery Fee</Text><Text style={styles.sVal}>$6.20</Text></View>
          
          <View style={styles.totalDivider} />
          
          <View style={styles.summaryRow}>
            <Text style={styles.totalText}>Payable Total</Text>
            <Text style={styles.totalPrice}>$62.2</Text>
          </View>

          <TouchableOpacity style={styles.btnConfirm}>
            <Text style={styles.btnConfirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>

        {/* Khoảng đệm để không bị Tab Bar đè */}
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  yellowCurveBg: { 
    position: 'absolute', 
    top: 0, 
    width: width, 
    height: 120, 
    backgroundColor: '#FFF9C4', 
    borderBottomLeftRadius: 50, 
    borderBottomRightRadius: 50 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingTop: 50, 
    zIndex: 1 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  backArrow: { fontSize: 24, fontWeight: 'bold' },
  icon24: { width: 24, height: 24 },
  icon20: { width: 20, height: 20 },

  scrollContent: { paddingTop: 10 },

  // Image Section
  imageSection: { width: '90%', height: 240, alignSelf: 'center', marginTop: 15, position: 'relative', marginBottom: 40 },
  mainBurgerImage: { width: '100%', height: '100%', borderRadius: 25 },
  smallImagesWrapper: { 
    position: 'absolute', 
    bottom: -35, 
    alignSelf: 'center', 
    width: '100%', 
    height: 85 
  },
  threeBurgersImage: { width: '100%', height: '100%' },

  // Info Section
  infoSection: { paddingHorizontal: 20, marginTop: 10 },
  titlePriceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  foodTitle: { fontSize: 32, fontWeight: '900', color: '#1A1A1A' },
  priceValue: { fontSize: 28, fontWeight: 'bold', color: '#5E5CE6' },
  ratingCounterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
  ratingText: { color: '#A0A0A0', fontSize: 14 },
  counterRow: { flexDirection: 'row', alignItems: 'center' },
  counterCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E0E0E0' },
  counterText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  qtyNumber: { marginHorizontal: 15, fontSize: 18, fontWeight: 'bold' },

  // Delivery Container
  deliveryContainer: { flexDirection: 'row', paddingHorizontal: 20, marginTop: 30 },
  addressBox: { backgroundColor: '#E0F7EF', flex: 1, marginRight: 15, borderRadius: 20, flexDirection: 'row', alignItems: 'center', padding: 15 },
  locationIconWrap: { backgroundColor: 'white', padding: 8, borderRadius: 12 },
  addressLabel: { fontSize: 12, color: '#7D7D7D' },
  addressValue: { fontSize: 15, fontWeight: 'bold', color: '#2D2D2D' },
  editSquare: { backgroundColor: '#A29BFE', width: 56, height: 56, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },

  // Payment
  paymentContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 25 },
  cardImage: { width: 45, height: 30, resizeMode: 'contain' },
  paymentMethodLabel: { marginLeft: 10, fontSize: 16, fontWeight: '500', color: '#333', flex: 1 },
  changeButton: { borderWidth: 1, borderColor: '#5E5CE6', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 15 },
  changeButtonText: { color: '#5E5CE6', fontWeight: 'bold', fontSize: 13 },

  // Summary
  summarySection: { paddingHorizontal: 20, marginTop: 30 },
  summaryHeader: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  sLabel: { color: '#8E8E93', fontSize: 15 },
  sVal: { fontWeight: 'bold', fontSize: 15, color: '#1A1A1A' },
  totalDivider: { height: 1, backgroundColor: '#F0F0F0', marginVertical: 10 },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  totalPrice: { fontSize: 22, fontWeight: 'bold', color: '#5E5CE6' },

  btnConfirm: { backgroundColor: '#5E5CE6', borderRadius: 25, paddingVertical: 18, alignItems: 'center', marginTop: 25, elevation: 4 },
  btnConfirmText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});

export default CartScreen;