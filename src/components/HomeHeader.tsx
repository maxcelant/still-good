import { View, StyleSheet, Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { darkTheme, lightTheme } from "../utils"
import { Theme } from "../store/theme"


export const HomeHeader = ({ children }: { children: any }) => {
  
  const themeCtx = useSelector((state: RootState) => state.theme)

  return (
    <View style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background }]}>
      <View style={styles.headerContainer}>

      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  headerContainer: {
    flex: 1,
    minHeight: 40,
  },
  contentContainer: {
    flex: 10,
  },
})