import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const colors = useTheme().colors;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeColor,
        padding: 20,
      }}>
      <Text style={{ color: colors.white }}>
        This is demo of default dark/light theme using navigation.
      </Text>
      <TextInput
        style={{
          borderColor: colors.gray,
          padding: 10,
          borderWidth: 2,
          borderRadius: 5,
          width: '100%',
          marginTop: 20,
          color: colors.white,
        }}
        placeholder="Type here"
      />
      <TouchableOpacity
        style={{
          backgroundColor: colors.sky,
          padding: 10,
          borderRadius: 6,
          width: '100%',
          height: 57,
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.commonWhite,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
