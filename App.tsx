import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <View className="p-4 bg-blue-100 rounded-xl">
        <Text className="text-blue-600 text-2xl font-bold text-center">
          DripNote RN 💧
        </Text>
        <Text className="text-gray-600 text-center mt-2 font-medium">
          NativeWind Setup Complete!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
