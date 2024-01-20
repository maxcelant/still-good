import { View, Text, SafeAreaView, StyleSheet } from "react-native"

export const AddScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Add
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