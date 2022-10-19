import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  PermissionStatus,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { minutes } from "../helper/Time";

export function useGPS() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      const location = await getLocation();
      if (location) {
        setLocation(location);
      }
    })();
  }, []);

  return {
    location,
  };
}

export async function getLocation() {
  const { status } = await requestForegroundPermissionsAsync();

  if (status !== PermissionStatus.GRANTED) {
    return;
  }
  return await getCurrentPositionAsync({
    accuracy: LocationAccuracy.Highest,
    timeInterval: minutes(10),
  });
}
