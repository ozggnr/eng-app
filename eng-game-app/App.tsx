import { useEffect, useState } from 'react';
import { SafeAreaView, Pressable, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <SafeAreaView className="h-screen m-3">
      <View>
        <SearchBar />
        {/* latestSavedWords */}
      </View>
    </SafeAreaView>
  );
}
