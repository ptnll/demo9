import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { PRODUCTS } from './src/data/data';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(PRODUCTS);

  // Logic tìm kiếm bằng Javascript
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = PRODUCTS.filter(item => 
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* 1. Header màu vàng cong */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.avatarContainer}>
              <Image source={require('./src/assets/avatar.png')} style={styles.avatar} />
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>Your Location</Text>
              <Text style={styles.locationValue}>Savar, Dhaka</Text>
            </View>
            <TouchableOpacity style={styles.notiBtn}>
              <Image source={require('./src/assets/icon-notification.png')} style={styles.icon24} />
            </TouchableOpacity>
          </View>

          {/* 2. Thanh Search màu tím */}
          <View style={styles.searchBar}>
            <Image source={require('./src/assets/icon-search.png')} style={styles.icon20} />
            <TextInput 
              placeholder="Search your food" 
              placeholderTextColor="#DDD" 
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={styles.filterBtn}>
              <Image source={require('./src/assets/icon-filter.png')} style={styles.icon20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 3. Categories */}
        <View style={styles.section}>
            <View style={styles.catRow}>
                <TouchableOpacity style={[styles.catCard, {backgroundColor: '#2ECC71'}]}>
                  <Image source={require('./src/assets/icon-pizza.png')} style={styles.iconCat} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.catCardGray}>
                  <Image source={require('./src/assets/icon-burger.png')} style={styles.iconCat} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.catCardGray}>
                  <Image source={require('./src/assets/icon-drink.png')} style={styles.iconCat} />
                </TouchableOpacity>
            </View>
        </View>

        {/* 4. Banner Promo */}
        <View style={styles.promoSection}>
            <Image source={require('./src/assets/burger-banner.png')} style={styles.bannerImage} resizeMode="stretch" />
        </View>

        {/* 5. Popular Items - Chuyển sang hiển thị từ file data.js */}
        <View style={styles.popularSection}>
            <View style={styles.popHeader}>
                <Text style={styles.sectionTitle}>{searchQuery ? 'Search Result' : 'Popular Items'}</Text>
                <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
              {filteredData.map((item) => (
                <TouchableOpacity key={item.id} style={styles.foodCardWrapper}>
                    <Image source={item.image} style={styles.foodFullImage} resizeMode="cover" />
                    <View style={styles.foodInfo}>
                      <Text style={styles.foodName}>{item.name}</Text>
                      <Text style={styles.foodPrice}>${item.price}</Text>
                    </View>
                </TouchableOpacity>
              ))}
              {filteredData.length === 0 && <Text style={styles.noResult}>No food found!</Text>}
            </View>
        </View>
        
        <View style={{height: 120}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { backgroundColor: '#FFF9C4', padding: 20, borderBottomLeftRadius: 45, borderBottomRightRadius: 45, paddingTop: 50 },
  headerTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  avatarContainer: { width: 45, height: 45, borderRadius: 25, backgroundColor: 'white', overflow: 'hidden' },
  avatar: { width: '100%', height: '100%' },
  locationContainer: { flex: 1, marginLeft: 12 },
  locationLabel: { color: '#888', fontSize: 12 },
  locationValue: { fontWeight: 'bold', fontSize: 16, color: '#000' },
  notiBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
  icon24: { width: 24, height: 24 },
  searchBar: { backgroundColor: '#5E5CE6', flexDirection: 'row', alignItems: 'center', borderRadius: 25, height: 50, paddingHorizontal: 15 },
  icon20: { width: 20, height: 20, tintColor: 'white' },
  searchInput: { flex: 1, color: 'white', paddingLeft: 10, fontSize: 15 },
  section: { paddingHorizontal: 20, marginTop: 25 },
  catRow: { flexDirection: 'row', justifyContent: 'space-between' },
  catCard: { width: (width - 60) / 3, height: 80, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  catCardGray: { width: (width - 60) / 3, height: 80, borderRadius: 20, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' },
  iconCat: { width: 40, height: 40 },
  promoSection: { paddingHorizontal: 20, marginTop: 25 },
  bannerImage: { width: '100%', height: 160, borderRadius: 25 },
  popularSection: { paddingHorizontal: 20, marginTop: 25 },
  popHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAll: { color: '#888', fontSize: 14 },
  listContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  foodCardWrapper: { width: (width - 55) / 2, backgroundColor: '#fff', borderRadius: 25, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, overflow: 'hidden' },
  foodFullImage: { width: '100%', height: 120 },
  foodInfo: { padding: 10 },
  foodName: { fontWeight: 'bold', fontSize: 14 },
  foodPrice: { color: '#5E5CE6', fontWeight: 'bold', marginTop: 5 },
  noResult: { width: '100%', textAlign: 'center', marginTop: 20, color: '#888' }
});

export default HomeScreen;