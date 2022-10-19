import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamsList } from "../routes/Model";

type NavigationType = NativeStackNavigationProp<RootStackParamsList>;

export function useNav() {
  return useNavigation<NavigationType>();
}
