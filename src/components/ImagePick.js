import React from 'react';
import {SafeAreaView, Image, ActivityIndicator, Button} from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: '이미지 선택',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const config = {
  headers: {
    Authorization: 'Client-ID eb7ce279d9f3729',
  },
};

const ImagePick = () => {
  const [url, setUrl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <SafeAreaView>
        <Button
          title="이미지 선택"
          onPress={() => {
            ImagePicker.showImagePicker(options, (response) => {
              setIsLoading(true);
              console.log('Response = ', response);

              if (response.didCancel) {
                setIsLoading(false);
                console.log('User cancelled image picker');
              } else if (response.error) {
                setIsLoading(false);
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                setIsLoading(false);
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
              } else {
                //const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                //setUrl('data:' + response.type + ';base64,' + response.data);
                const params = new FormData();
                params.append('image', response.data);
                axios
                  .post('https://api.imgur.com/3/image', params, config)
                  .then((response) => {
                    setUrl(response.data.data.link);
                  })
                  .catch((error) => {
                    console.warn(error.response.data);
                    alert('Error:' + errorcd.response.data.data.error);
                  })
                  .finally(() => {
                    setIsLoading(false);
                  });
              }
              setIsLoading(false);
            });
          }}
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {url && (
              <Image source={{uri: url}} style={{width: 340, height: 340}} />
            )}
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default ImagePick;
