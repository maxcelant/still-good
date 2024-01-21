import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { View, Text, SafeAreaView, StyleSheet, Switch } from "react-native"
import { Header } from "../components"
import { RootState, setTheme } from "../store"
import { Theme } from "../store/theme"
import { ThemePicker } from "../components/ThemePicker"

export const SettingsScreen = () => {

  return (
    <Header title='Settings'>
      <SafeAreaView style={styles.container}>
        <Text>
          Stats
        </Text>
        <View>
         <ThemePicker />
        </View>
      </SafeAreaView>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
})