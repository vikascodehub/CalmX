import MeditationScreen from "@/components/MeditationScreen";
import { useLocalSearchParams } from "expo-router";

export default function MeditationPage() {
  const { id } = useLocalSearchParams();
  return <MeditationScreen meditationId={id as string} />;
}
