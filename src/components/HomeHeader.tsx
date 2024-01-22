import { View, StyleSheet, Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { darkTheme, lightTheme } from "../utils"
import { Theme } from "../store/theme"
import { Button } from "@rneui/base"


export const HomeHeader = ({ children }: { children: any }) => {
  
  const themeCtx = useSelector((state: RootState) => state.theme)

  return (
    <View style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background }]}>
      <View style={styles.headerContainer}>
        <View>
          <Button title="Search" />
        </View>
        <View>
          <Button title="Filtering" />
        </View>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    minHeight: 30,
  },
  contentContainer: {
    flex: 10,
  },
})