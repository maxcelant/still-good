import { Text, SafeAreaView, StyleSheet, Button, View } from "react-native"
import { Header } from "../components"
import { useSelector } from "react-redux"
import { RootState, Theme } from "../store"
import { lightTheme, darkTheme } from "../utils"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

type AddStackParamList = {
  Add: undefined;
  'Manual Form': undefined;
};

export const AddScreen = () => {

  const themeCtx = useSelector((state: RootState) => state.theme)

  const navigation = useNavigation<StackNavigationProp<AddStackParamList>>();

  return (
    <Header>
      <SafeAreaView style={[styles.container, { backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background }]}>
        <View>
          <Button title="Add Manual" onPress={() => navigation.navigate('Manual Form')}/>
          <Button title="Take Photo" />
        </View>
      </SafeAreaView>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})