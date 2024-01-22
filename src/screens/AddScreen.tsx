import { Text, SafeAreaView, StyleSheet } from "react-native"
import { Header } from "../components"
import { useSelector } from "react-redux"
import { RootState, Theme } from "../store"
import { lightTheme, darkTheme } from "../utils"

export const AddScreen = () => {

  const themeCtx = useSelector((state: RootState) => state.theme)

  return (
    <Header>
      <SafeAreaView style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background }]}>
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
    paddingTop: 5,
  },
})