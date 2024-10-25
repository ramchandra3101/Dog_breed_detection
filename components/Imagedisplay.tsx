import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import ImagedisplayStyles from "../styles/ImagedisplayStyles";
import { useState } from "react";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  ImageDisplay: { imageURI: string };
};
type ImagedisplayRouteProp = RouteProp<RootStackParamList, "ImageDisplay">;

export default function Imagedisplay({
  route,
}: {
  route: ImagedisplayRouteProp;
}) {
  const { imageURI } = route.params;
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectBreed, setDetectBreed] = useState<string | null>(null);

  

  const handleDetection = async () => {
    setIsProcessing(true);
    setDetectBreed(null);

    const formData = new FormData();
    // Instead of converting to a blob, directly use the image URI
    formData.append("image", {
      uri: imageURI,
      name: "image.jpg", // Name of the file
      type: "image/jpeg", // MIME type of the image
    });

    console.log(formData);

    try {
      const response = await fetch("http://10.0.0.72:3000/predict/", {
        method: "POST",
        body: formData, // No need to set Content-Type manually
      });

      console.log(response.status);

      if (!response.ok) {
        throw new Error("Failed to detect breed");
      }

      const result = await response.json();
      const breed = result.predicted_breed || "Unknown breed";
      setDetectBreed(breed);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "An unknown error occurred");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <View style={ImagedisplayStyles.Page}>
      {/* Display the selected image in a box */}
      <View style={ImagedisplayStyles.Box}>
        {imageURI ? (
          <Image
            source={{ uri: imageURI }}
            style={ImagedisplayStyles.InBox}
            onError={(error) =>
              console.log("Error loading image:", error.nativeEvent.error)
            }
          />
        ) : (
          <Text>No image selected</Text>
        )}
      </View>
      <TouchableOpacity
        style={ImagedisplayStyles.Button}
        onPress={handleDetection}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={ImagedisplayStyles.ButtonText}>Detect Breed</Text>
        )}
      </TouchableOpacity>
      {detectBreed && (
        <Text style={ImagedisplayStyles.ResultText}>
          Detected Breed: {detectBreed}
        </Text>
      )}
    </View>
  );
}
