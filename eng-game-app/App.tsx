import { useEffect, useState } from 'react';
import { SafeAreaView, Button, Text, View, ScrollView, Modal, TextInput } from 'react-native';
import SearchBar from './src/components/SearchBar';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <SafeAreaView className="h-screen">
      <View>
        <View>
          <SearchBar />
        </View>
        <View>
          <Button title="Add New" onPress={() => setOpenModal(true)} />
        </View>
        <View>
          <Modal visible={openModal} animationType="slide">
            <View>
              <Text>Hello</Text>
              <TextInput />
            </View>
            <View>
              <Button title="Cancel" onPress={() => setOpenModal(false)} />
            </View>
          </Modal>
        </View>

        {/* latestSavedWords 5e0acc*/}
      </View>
    </SafeAreaView>
  );
}
