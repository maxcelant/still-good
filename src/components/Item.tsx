import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { RootState, Theme } from "../store"
import { lightTheme, darkTheme } from "../utils"
import { ItemType } from "../data/data"
import { ItemBadge } from "./ItemBadge";

export const Item = (item: ItemType) => {

  const themeCtx = useSelector((state: RootState) => state.theme)
  
  return (
    <View style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background }]}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={[styles.name, { color: themeCtx.theme === Theme.LIGHT ? lightTheme.textPrimary : darkTheme.textPrimary }]}>
          {item.name}
        </Text>
        <View style={styles.badgeContainer}>
          <ItemBadge value={item.storageType} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 0.5,
    display: 'flex',
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameContainer: {
    display: 'flex',
    flex: 8,
    flexDirection: 'column',
    gap: 5,
  },
  name: {
    flex: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  badgeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
})