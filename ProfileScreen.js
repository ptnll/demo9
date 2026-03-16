import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Switch, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <View style={styles.container}>
      {/* 1. Nền màu vàng uốn lượn phía sau */}
      <View style={styles.yellowBg} />

      {/* 2. Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}><Text style={styles.backText}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 3. Khu vực Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarOuterCircle}>
            <View style={styles.avatarInnerCircle}>
              <Image 
                source={require('./src/assets/avatar-large.png')} 
                style={styles.avatarImage} 
              />
              <TouchableOpacity style={styles.editIconBtn}>
                 <Image source={require('./src/assets/icon-edit-white1.png')} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.userName}>Rakibul Hasan</Text>
          <Text style={styles.userEmail}>rakibhbrand@gmail.com</Text>
        </View>

        {/* 4. Danh sách Menu Items */}
        <View style={styles.menuContainer}>
          <MenuItem icon={require('./src/assets/icon-home-profile.png')} title="Home" />
          <MenuItem icon={require('./src/assets/icon-wallet.png')} title="My Card" />
          
          <View style={styles.menuItem}>
            <Image source={require('./src/assets/icon-moon.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Dark Mood</Text>
            <Switch 
              value={darkMood} 
              onValueChange={setDarkMood}
              trackColor={{ false: "#767577", true: "#070611" }}
              thumbColor={darkMood ? "#FFFFFF" : "#f4f3f4"}
            />
          </View>

          <MenuItem icon={require('./src/assets/icon-track.png')} title="Truck Your Order" />
          <MenuItem icon={require('./src/assets/icon-settings.png')} title="Settings" />
          <MenuItem icon={require('./src/assets/icon-help.png')} title="Help Center" />
        </View>

        {/* 5. Nút Log Out bằng 1 tấm ảnh duy nhất */}
        <TouchableOpacity 
          style={styles.logoutImageWrapper}
          onPress={() => console.log("Logged out!")}
        >
          <Image 
            source={require('./src/assets/btn-logout-full.png')} 
            style={styles.logoutFullImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuText}>{title}</Text>
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  yellowBg: { 
    position: 'absolute', 
    top: 0, 
    width: width, 
    height: 220, 
    backgroundColor: '#FFF9C4', 
    borderBottomLeftRadius: 60, 
    borderBottomRightRadius: 60 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingTop: 50 
  },
  backBtn: { width: 40, height: 40, justifyContent: 'center' },
  backText: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },

  scrollContent: { paddingTop: 20 },

  avatarSection: { alignItems: 'center', marginTop: 10 },
  avatarOuterCircle: { 
    width: 150, height: 150, borderRadius: 75, 
    borderWidth: 1, borderColor: '#E0E0E0', 
    justifyContent: 'center', alignItems: 'center' 
  },
  avatarInnerCircle: { 
    width: 130, height: 130, borderRadius: 65, 
    borderWidth: 1, borderColor: '#E0E0E0', 
    position: 'relative', padding: 5
  },
  avatarImage: { width: '100%', height: '100%', borderRadius: 60 },
  editIconBtn: { 
    position: 'absolute', bottom: 5, right: 5, 
    backgroundColor: '#5E5CE6', width: 32, height: 32, 
    borderRadius: 16, justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: 'white'
  },
  editIcon: { width: 16, height: 16 },
  userName: { fontSize: 22, fontWeight: 'bold', marginTop: 15, color: '#1A1A1A' },
  userEmail: { color: '#8E8E93', fontSize: 14, marginTop: 4 },

  menuContainer: { paddingHorizontal: 30, marginTop: 30 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18 },
  menuIcon: { width: 22, height: 22, resizeMode: 'contain' },
  menuText: { flex: 1, marginLeft: 20, fontSize: 16, color: '#1A1A1A', fontWeight: '500' },
  chevron: { fontSize: 24, color: '#A0A0A0' },

  logoutImageWrapper: {
    width: '100%',
    height: 70, // Lan tăng giảm số này để nút Logout to/nhỏ tùy ý nhé
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoutFullImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileScreen;