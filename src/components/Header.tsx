import { View, StyleSheet, Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { darkTheme, lightTheme } from "../utils"
import { Theme } from "../store/theme"


export const Header = ({ title, children }: { title: string, children: any }) => {
  
  const themeCtx = useSelector((state: RootState) => state.theme)

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.primary : darkTheme.primary }]}>
        <Text style={styles.title}>{title}</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: lightTheme.textHeaders,
  },
  contentContainer: {
    flex: 10,
  },
})