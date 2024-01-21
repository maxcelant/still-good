import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Header } from "../components"

export const SettingsScreen = () => {
  return (
    <Header title='Settings'>
      <SafeAreaView style={styles.container}>
        <Text>
          Stats
        </Text>
      </SafeAreaView>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
})