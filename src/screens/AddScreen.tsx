import { Text, SafeAreaView, StyleSheet } from "react-native"
import { Header } from "../components"

export const AddScreen = () => {
  return (
    <Header title='Add'>
      <SafeAreaView style={styles.container}>
        <Text>
          Add
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