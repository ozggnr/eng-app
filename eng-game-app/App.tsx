import { useEffect , useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { getWords } from './src/service';
import { Document } from './Types';

export default function App() {
  const [wordList, setWordList] = useState<Document[]>([])
  useEffect(() => {
    getWords().then(words => setWordList(words))
  }, [])
  
  if (!wordList.length) {
    return null;
  }
  return (
    <SafeAreaView className='h-screen'>
      <View className='flex-row justify-end'>
        <View className='m-1'>
          {wordList.map(words => {    
            return <View id={words.id} className='flex-row flex-wrap gap-x-2'>
             {words.lines.length > 0 && words['lines'].map(word => {
                return <Text className='bg-violet-600 text-white p-4 my-2'>{word}</Text>
              })}
            </View>
          })}
          {/* <Pressable onPress={() => console.log('pressed')} className='bg-red-800 p-2 flex-row text-center'>
            <Text className='text-indigo-100'>Upload File</Text>
          </Pressable> */}
        </View>
      </View>
    </SafeAreaView>
  );

}

