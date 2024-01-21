import { useEffect, useState } from "react";
import { Switch } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState, Theme, setTheme } from "../store";

export const ThemePicker = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme)
  const [isLightTheme, setIsLightTheme] = useState(theme.theme === Theme.LIGHT)

  useEffect(() => {
    setIsLightTheme(theme.theme === Theme.LIGHT)
  }, [theme])

  const toggleSwitch = () => {
    dispatch(setTheme(isLightTheme ? { theme: Theme.DARK } : { theme: Theme.LIGHT }))
    setIsLightTheme(!isLightTheme)
  }
  return (
    <>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isLightTheme ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isLightTheme}
      />
    </>
  )
}