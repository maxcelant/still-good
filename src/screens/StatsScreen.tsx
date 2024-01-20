import { View, Text, SafeAreaView, StyleSheet } from "react-native"

export const StatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Stats
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