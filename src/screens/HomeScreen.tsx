import {  SafeAreaView, StyleSheet, FlatList } from "react-native"
import { HomeHeader, Item } from "../components"
import { useSelector } from "react-redux"
import { RootState, Theme } from "../store"
import { darkTheme, lightTheme } from "../utils"
import { data, ItemType } from '../data/data'

export const HomeScreen = () => {

  const themeCtx = useSelector((state: RootState) => state.theme)

  return (
    <HomeHeader>
      <SafeAreaView style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background }]}>
        <FlatList
          data={data}
          renderItem={({ item }: { item: ItemType }) => <Item {...item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </HomeHeader>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
})
