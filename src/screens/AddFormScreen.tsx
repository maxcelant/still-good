import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput, StyleSheet, Button, Platform } from "react-native"
import { ItemType } from "../data/data";
import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const initialState: ItemType = {
  id: '',
  icon: '',
  name: '',
  foodGroup: '',
  storageType: '',
  purchaseDate: new Date(),
  expirationDate: new Date(),
  quantity: '',
  quantityType: '',
  notes: '',
  status: ''
}

export const AddFormScreen = () => {

  const [ form, setForm ] = useState<ItemType>(initialState);
  const [ showPurchaseDatePicker, setShowPurchaseDatePicker ] = useState(false);
  const [ showExpirationDatePicker, setShowExpirationDatePicker ] = useState(false);

  const handleInputChange = (name: string, value: string | Date) => {
    setShowPurchaseDatePicker(Platform.OS === 'ios');
    setShowExpirationDatePicker(Platform.OS === 'ios');
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = () => {
    console.log(form)
  }

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>Item Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(text: string) => handleInputChange('name', text)}
      />
      <Text style={{ fontWeight: 'bold' }}>Quanitity</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={form.quantity}
        onChangeText={(text: string) => handleInputChange('quantity', text)}
      />
      <Text style={{ fontWeight: 'bold' }}>Quanitity Type</Text>
      <RNPickerSelect
        onValueChange={(value) => handleInputChange('quantityType', value)}
        items={[
          { label: 'lbs', value: 'lbs' },
          { label: 'oz', value: 'oz' },
          { label: 'g', value: 'g' },
          { label: 'kg', value: 'kg' },
          { label: 'count', value: 'count' },
          { label: 'fl oz', value: 'fl oz' },
          { label: 'mL', value: 'mL' },
          { label: 'L', value: 'L' },
        ]}
      />
      <Text style={{ fontWeight: 'bold' }}>Storage Type</Text>
      <RNPickerSelect
        onValueChange={(value) => handleInputChange('quantityType', value)}
        items={[
          { label: 'Frozen', value: 'frozen' },
          { label: 'Ambient', value: 'ambient' },
          { label: 'Chill', value: 'chill' },
        ]}
      />
      <Text style={{ fontWeight: 'bold' }}>Purchase Date</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formatDate(form.purchaseDate)}</Text>
        <Button title="Select Purchase Date" onPress={() => setShowPurchaseDatePicker(true)} />
        {showPurchaseDatePicker && <DateTimePicker
          mode="date"
          display="default"
          style={styles.input}
          value={form.purchaseDate}
          onChange={(_, date) => handleInputChange('purchaseDate', date ?? new Date())}
          />}
      </View>
      <Text style={{ fontWeight: 'bold' }}>Expiration Date</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formatDate(form.expirationDate)}</Text>
        <Button title="Select Expiration Date" onPress={() => setShowExpirationDatePicker(true)} />
        {showExpirationDatePicker && <DateTimePicker
          mode="date"
          display="default"
          style={styles.input}
          value={form.expirationDate}
          onChange={(_, date) => handleInputChange('expirationDate', date ?? new Date())}
        />}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateText: {
    fontWeight: '600'
  },
  buttonContainer: {
    paddingTop: 15,
  }
})