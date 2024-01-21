import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { RootState, Theme } from "../store"
import { lightTheme, darkTheme } from "../utils"
import { ItemType } from "../data/data"

export const Item = (item: ItemType) => {

  const themeCtx = useSelector((state: RootState) => state.theme)
  
  return (
    <View style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.secondary : darkTheme.secondary }]}>
      <Text style={[styles.name, { color: themeCtx.theme === Theme.LIGHT ? lightTheme.textPrimary : darkTheme.textPrimary }]}>
        {item.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})