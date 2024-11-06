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
    
  
  console.log(imageURI);

    // Create a new FormData object to send the image data
    const formData = new FormData();
    formData.append("image", {
      uri: imageURI,
      name: "image.jpg",
      type: "image/jpeg",
    });

    // Append the image to the form data

    

    try {
      const response = await fetch("http://10.110.39.53:8000/api/predict/", {
        method: "POST",
        body: formData,
      });

    

      if (!response.ok) {
        throw new Error("Failed to detect breed");
      }

      const result = await response.json();
      console.log(result);
      const breed = result.breed.predicted_breed || "Unknown breed";
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
