import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Scanner = ({ navigation }) => {
  const [barcode, setBarcode] = useState(null);

  const onBarcodeRead = (scanResult) => {
    setBarcode(scanResult.data);
    fetchProductInfo(scanResult.data);
  };

  const fetchProductInfo = (barcode) => {
    // Fetch product info from an API or local text file
    fetch(`http://your-server-url/checkProduct.php?barcode=${barcode}`)
      .then((response) => response.json())
      .then((data) => {
        navigation.navigate('Result', { result: data });
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RNCamera
        style={{ flex: 1, width: '100%' }}
        onBarCodeRead={onBarcodeRead}
        captureAudio={false}
      >
        <Text>Scan a barcode to check if it's American!</Text>
      </RNCamera>
    </View>
  );
};

export default Scanner;
