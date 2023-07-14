import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../Button';


const ImageSelector = ({images, setImages}) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  },[]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets[0].uri);
    }
  };

  if(hasGalleryPermission === false) {
    return <Text>No access to gallery</Text>
  }

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Button 
       text='Select Image' 
       type='image-picker' 
       onPress={pickImage} 
       textStyles={{color:'grey', fontSize: 12, fontWeight:'bold'}}
       containerStyles={{
        height: 35,
        backgroundColor: '#000',
        borderRadius: 8,
       }} 
      />
    </View>
  );
};

export default ImageSelector;