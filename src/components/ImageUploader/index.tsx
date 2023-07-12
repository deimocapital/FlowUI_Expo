import React from 'react'
import { View } from 'react-native'
import Button from '../Button';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
    title: "Select Image",
    type: "library",
    options:{
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 5,
        mediaType: "photo",
        includeBase64: true,
    }
};

const ImageUploader = () => {

  const openGallery = async() => {
    const images = await launchImageLibrary(options);

    console.log(images);
    
  };

  return (
    <View >
      <Button text="Upload Image" type='image-uploader' onPress={openGallery} />
    </View>
  )
}

export default ImageUploader;