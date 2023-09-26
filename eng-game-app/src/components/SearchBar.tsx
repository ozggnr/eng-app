import { useState } from 'react';
import { TextInput } from 'react-native';
import { View } from 'react-native';

// type SearchBarProps = {
//   searchText: string;
// };

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  return (
    <View className="w-100">
      <TextInput
        className="bg-slate-200 w-80 h-10 border-solid border-r-violet-800 rounded-md mx-auto mt-4 pl-4"
        placeholder="search"
        value={searchText}
        onChangeText={(e) => console.log('e', e)}
      />
    </View>
  );
}
