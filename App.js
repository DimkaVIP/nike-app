import { StyleSheet, View } from 'react-native';
import Main from './screens/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#F8F8F8'
  }
});
