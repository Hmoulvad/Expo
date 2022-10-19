import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../screens/Model";

type NavigationType = NativeStackNavigationProp<RootStackParamsList>;

export function useNav() {
  return useNavigation<NavigationType>();
}
