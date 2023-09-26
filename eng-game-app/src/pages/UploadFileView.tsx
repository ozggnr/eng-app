import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { getWords } from 'services/docService';
import { Document } from '../../Types';

export default function UploadFileView() {
  const [wordList, setWordList] = useState<Document[]>([]);
  useEffect(() => {
    getWords().then((words) => setWordList(words));
  }, []);
  console.log(wordList);
  if (!wordList.length) {
    return null;
  }
  return (
    <View className="m-1">
      {wordList.map((words) => {
        return (
          <View key={words.id} className="flex-row flex-wrap gap-x-2">
            <Text className="text-white">{words.date}</Text>
            {words.lines.length > 0 &&
              words['lines'].map((word, i) => {
                return (
                  <Pressable
                    className="bg-violet-600 py-2 px-1 my-2 rounded"
                    key={i}
                    onPress={() => console.log('pressed')}
                  >
                    <Text className="text-white">{word}</Text>
                  </Pressable>
                );
              })}
          </View>
        );
      })}
      {/* <Pressable onPress={() => console.log('pressed')} className='bg-red-800 p-2 flex-row text-center'>
      <Text className='text-indigo-100'>Upload File</Text>
    </Pressable> */}
    </View>
  );
}
