import { Pressable, View, Text } from 'react-native';

type CustomButtonProps = {
  title: string;
  handlePressButton: () => void;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
};

export default function CustomButton({ title, handlePressButton }: CustomButtonProps) {
  return (
    <View>
      <Pressable onPress={handlePressButton}>
        {/* {icon && <Icon/>} */}
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}
