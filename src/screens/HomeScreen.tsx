import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Header } from "../components"

export const HomeScreen = () => {
  return (
    <Header title='Home'>
      <SafeAreaView style={styles.container}>
        <Text>
          Home
        </Text>
      </SafeAreaView>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
})