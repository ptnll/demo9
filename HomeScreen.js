import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. Header màu vàng cong */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('./src/assets/avatar.png')} 
              style={styles.avatar} 
            />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Your Location</Text>
            <Text style={styles.locationValue}>Savar, Dhaka</Text>
          </View>
          <TouchableOpacity style={styles.notiBtn}>
            <Image 
              source={require('./src/assets/icon-notification.png')} 
              style={styles.icon24} 
            />
          </TouchableOpacity>
        </View>

        {/* 2. Thanh Search màu tím */}
        <View style={styles.searchBar}>
          <Image 
              source={require('./src/assets/icon-search.png')} 
              style={styles.icon20} 
          />
          <TextInput 
            placeholder="Search your food" 
            placeholderTextColor="#DDD" 
            style={styles.searchInput} 
          />
          <TouchableOpacity style={styles.filterBtn}>
            <Image 
              source={require('./src/assets/icon-filter.png')} 
              style={styles.icon20} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. Categories (Pizza, Burger, Drink) */}
      <View style={styles.section}>
          <View style={styles.catRow}>
              {/* Pizza - Active */}
              <TouchableOpacity style={[styles.catCard, {backgroundColor: '#2ECC71'}]}>
                <Image source={require('./src/assets/icon-pizza.png')} style={styles.iconCat} />
                {/* <Text style={styles.catTextActive}>PIZZA</Text> */}
              </TouchableOpacity>
              
              {/* Burger */}
              <TouchableOpacity style={styles.catCardGray}>
                <Image source={require('./src/assets/icon-burger.png')} style={styles.iconCat} />
                {/* <Text style={styles.catText}>BURGER</Text> */}
              </TouchableOpacity>

              {/* Drink */}
              <TouchableOpacity style={styles.catCardGray}>
                <Image source={require('./src/assets/icon-drink.png')} style={styles.iconCat} />
                {/* <Text style={styles.catText}>DRINK</Text> */}
              </TouchableOpacity>
          </View>
      </View>

      {/* 4. Banner Burger Khuyến Mãi */}
      <View style={styles.promoSection}>
          <Image 
              source={require('./src/assets/burger-banner.png')} 
              style={styles.bannerImage} 
              resizeMode="stretch"
          />
      </View>

      {/* 5. Popular Items - CHỈ DÙNG 1 ẢNH DUY NHẤT */}
      <View style={styles.popularSection}>
          <View style={styles.popHeader}>
              <Text style={styles.sectionTitle}>Popular Items</Text>
              <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
          </View>

          {/* Đây là phần bạn cần: Chỉ 1 TouchableOpacity chứa 1 Image duy nhất */}
          <TouchableOpacity style={styles.popularImageWrapper}>
              <Image 
                source={require('./src/assets/food-item-1.png')} // Tên file ảnh chứa cả 2 món
                style={styles.popularFullImage} 
                resizeMode="contain"
              />
          </TouchableOpacity>
      </View>
      
      {/* Khoảng trống cuối trang để không bị che bởi Tab Bar */}
      <View style={{height: 100}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  // Header
  header: { backgroundColor: '#FFF9C4', padding: 20, borderBottomLeftRadius: 45, borderBottomRightRadius: 45, paddingTop: 50 },
  headerTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  avatarContainer: { width: 45, height: 45, borderRadius: 25, backgroundColor: 'white', overflow: 'hidden' },
  avatar: { width: '100%', height: '100%' },
  locationContainer: { flex: 1, marginLeft: 12 },
  locationLabel: { color: '#888', fontSize: 12 },
  locationValue: { fontWeight: 'bold', fontSize: 16, color: '#000' },
  notiBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
  icon24: { width: 24, height: 24 },
  
  // Search Bar
  searchBar: { backgroundColor: '#5E5CE6', flexDirection: 'row', alignItems: 'center', borderRadius: 25, height: 50, paddingHorizontal: 15 },
  icon20: { width: 20, height: 20, tintColor: 'white' },
  searchInput: { flex: 1, color: 'white', paddingLeft: 10, fontSize: 15 },
  
  // Categories
  section: { paddingHorizontal: 20, marginTop: 25 },
  catRow: { flexDirection: 'row', justifyContent: 'space-between' },
  catCard: { width: (width - 60) / 3, height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  catCardGray: { width: (width - 60) / 3, height: 100, borderRadius: 20, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' },
  iconCat: { width: 40, height: 40 },
  catTextActive: { color: 'white', fontWeight: 'bold', marginTop: 8, fontSize: 12 },
  catText: { color: '#000', marginTop: 8, fontSize: 12 },

  // Promo Banner
  promoSection: { paddingHorizontal: 20, marginTop: 25 },
  bannerImage: { width: '100%', height: 160, borderRadius: 25 },

  // Popular Items
  popularSection: { paddingHorizontal: 20, marginTop: 25 },
  popHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAll: { color: '#888', fontSize: 14 },
  foodRow: { flexDirection: 'row', justifyContent: 'space-between' },
  
  // Style mới cho thẻ đồ ăn dùng 1 ảnh duy nhất
  foodCardWrapper: { 
    width: (width - 55) / 2, // Chia đôi màn hình trừ đi khoảng cách
    height: 180, 
    borderRadius: 25,
    backgroundColor: 'white',
    // Đổ bóng cho giống card
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    overflow: 'hidden'
  },
  foodFullImage: { 
    width: '100%', 
    height: '100%' 
  }
});

export default HomeScreen;