import { View, Text, SafeAreaView, StyleSheet } from "react-native"

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Home
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
})