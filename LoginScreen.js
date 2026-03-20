import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Dimensions,
  Alert 
} from 'react-native';
import { useAuth } from './src/context/AuthContext'; // Gọi kho dữ liệu

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Lấy hàm login từ AuthContext

  const handleLogin = () => {
    // Logic kiểm tra đơn giản
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ Email và Password");
      return;
    }

    // Giả sử đăng nhập thành công
    // Lan truyền thông tin user vào đây
    login({ 
      name: 'Phạm Thị Ngọc Lan', 
      id: '23810310232' 
    }); 
  };

  return (
    <View style={styles.container}>
      {/* Logo ứng dụng */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('./src/assets/avatar.png')} // Lan có thể đổi thành logo app
          style={styles.logo} 
        />
        <Text style={styles.brandName}>FOOD APP</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Ẩn mật khẩu
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerLink}>
          <Text style={styles.grayText}>Don't have an account? </Text>
          <Text style={styles.purpleText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20, justifyContent: 'center' },
  logoContainer: { alignItems: 'center', marginBottom: 50 },
  logo: { width: 100, height: 100, borderRadius: 50 },
  brandName: { fontSize: 24, fontWeight: 'bold', color: '#5E5CE6', marginTop: 10 },
  form: { width: '100%' },
  label: { fontSize: 14, color: '#888', marginBottom: 8 },
  input: { 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#EEE', 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    marginBottom: 20,
    backgroundColor: '#F9F9F9'
  },
  loginBtn: { 
    backgroundColor: '#5E5CE6', 
    height: 55, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
    elevation: 3
  },
  loginText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  registerLink: { flexDirection: 'row', justifyContent: 'center', marginTop: 25 },
  grayText: { color: '#888' },
  purpleText: { color: '#5E5CE6', fontWeight: 'bold' }
});

export default LoginScreen;