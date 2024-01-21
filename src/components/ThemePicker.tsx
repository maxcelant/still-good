import { useEffect, useState } from "react";
import { Switch, View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState, Theme, setTheme } from "../store";

export const ThemePicker = () => {
  const dispatch = useDispatch();
  const themeCtx = useSelector((state: RootState) => state.theme)
  const [isLightTheme, setIsLightTheme] = useState(themeCtx.theme === Theme.LIGHT)

  useEffect(() => {
    setIsLightTheme(themeCtx.theme === Theme.LIGHT)
  }, [themeCtx])

  const toggleSwitch = () => {
    dispatch(setTheme(isLightTheme ? { theme: Theme.DARK } : { theme: Theme.LIGHT }))
    setIsLightTheme(!isLightTheme)
  }
  return (
    <View>
      <Text>Theme:</Text>
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isLightTheme}
      />
    </View>
  )
}