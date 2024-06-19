import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';
import HomepageScreen from './HomepageScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleNavigate = (screen, data) => {
    if (data) {
      setUserData(data);
    }
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' ? (
        <LoginScreen navigate={handleNavigate} />
      ) : (
        <HomepageScreen name={userData.name} email={userData.email} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
