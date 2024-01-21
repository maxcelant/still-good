import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { Badge } from '@rneui/themed';

import { RootState, Theme } from "../store"
import { lightTheme, darkTheme } from "../utils"
import { ItemType } from "../data/data"

export const Item = (item: ItemType) => {

  const themeCtx = useSelector((state: RootState) => state.theme)
  
  return (
    <View style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.secondary : darkTheme.secondary }]}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={[styles.name, { color: themeCtx.theme === Theme.LIGHT ? lightTheme.textPrimary : darkTheme.textPrimary }]}>
          {item.name}
        </Text>
      </View>
      <Badge 
        value={item.storageType} 
        badgeStyle={{ 
          backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.textSecondary : darkTheme.textSecondary,
          borderRadius: 7,
          minWidth: 60,
        }}
        textStyle={{
          fontSize: 10,
          fontWeight: 'bold',
          color: 'white'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 15,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 2
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameContainer: {
    display: 'flex',
    flex: 8,
    flexDirection: 'row',
  },
  name: {
    flex: 10,
    fontSize: 14,
    fontWeight: 'bold',
  }
})