import { View, StyleSheet, Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { darkTheme, lightTheme } from "../utils"
import { Theme } from "../store/theme"


export const Header = ({ title, children }: { title: string, children: any }) => {
  
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { backgroundColor: theme.theme === Theme.LIGHT ? lightTheme.primary : darkTheme.primary }]}>
        <Text style={[styles.title, { color: theme.theme === Theme.LIGHT ? lightTheme.textPrimary : darkTheme.textPrimary }]}>{title}</Text>
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
  },
  contentContainer: {
    flex: 10,
  },
})