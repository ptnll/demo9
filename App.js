import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import các màn hình của bạn
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

// Thành phần thanh Tab tùy chỉnh
function MyTabBar({ state, navigation }) {
  return (
    <View style={styles.customTabBarContainer}>
      {/* 1. Tấm ảnh chứa 4 icon - Lan để trong src/assets/tab-bar-full.png */}
      <Image 
        source={require('./src/assets/tab-bar-full.png')} 
        style={styles.fullTabImage}
        resizeMode="contain" // Giúp ảnh không bị méo và nhỏ gọn lại
      />
      
      {/* 2. Các vùng nhấn tàng hình để chuyển trang */}
      <View style={styles.touchableArea}>
        {state.routes.map((route, index) => {
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (state.index !== index && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabItem}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <MyTabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="ORDER" component={CartScreen} />
          <Tab.Screen name="INBOX" component={HomeScreen} /> 
          <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  customTabBarContainer: {
    position: 'absolute',
    bottom: 10, // Đẩy lên một chút cho đẹp
    width: width,
    height: 60,  // GIẢM CHIỀU CAO Ở ĐÂY ĐỂ ICON NHỎ LẠI
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  fullTabImage: {
    width: '80%', // Thu nhỏ chiều ngang lại một chút
    height: '100%',
  },
  touchableArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: '2.9%', // Khớp với độ rộng 95% của ảnh
  },
  tabItem: {
    flex: 1,
    height: '100%',
  }
});