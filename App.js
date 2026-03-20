import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 1. Chỉ import 1 lần duy nhất các thành phần cần thiết
import { useAuth, AuthProvider } from './src/context/AuthContext';
import LoginScreen from './LoginScreen'; 
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

// 2. Thành phần điều hướng logic dựa trên đăng nhập
function RootNavigation() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          tabBar={(props) => <MyTabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="ORDER" component={CartScreen} />
          <Tab.Screen name="INBOX" component={HomeScreen} /> 
          <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}

// 3. Main App - Bọc AuthProvider ở ngoài cùng
export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <RootNavigation />
      </SafeAreaView>
    </AuthProvider>
  );
}

// 4. Custom Tab Bar giữ nguyên logic của Lan
function MyTabBar({ state, navigation }) {
  return (
    <View style={styles.customTabBarContainer}>
      <Image 
        source={require('./src/assets/tab-bar-full.png')} 
        style={styles.fullTabImage} 
        resizeMode="contain" 
      />
      <View style={styles.touchableArea}>
        {state.routes.map((route, index) => {
          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (state.index !== index && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customTabBarContainer: { position: 'absolute', bottom: 10, width: width, height: 60, alignItems: 'center', justifyContent: 'center' },
  fullTabImage: { width: '85%', height: '100%' },
  touchableArea: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', paddingHorizontal: '7.5%' },
  tabItem: { flex: 1, height: '100%' }
});