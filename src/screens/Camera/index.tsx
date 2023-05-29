import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import React from 'react';
import { useState, useRef } from 'react';
import {styles} from './styles';
import { Alert, Button,Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import { AntDesign, Feather } from '@expo/vector-icons';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';

interface IPhoto{
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedida] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)
  const [permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false)
  const [face, setFace] = useState<FaceDetector.FaceFeature>()



  if (!permissionCamera || !permissionMedia || !permissionQrCode) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nós precisamos de permissão para acessar sua câmera.</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }
    if (!permissionMedia) {
      // Media permissions are still loading
      return <View />;
    }
  
    if (!permissionMedia.granted) {
      // Media permissions are not granted yet
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>Nós precisamos de permissão para acessar sua galeria.</Text>
          <Button onPress={requestPermissionMedida} title="grant permission" />
        </View>
      );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
    const picture = await ref.current.takePictureAsync()
    setPhoto(picture)
    setTakePhoto(false)
    }
    
    
  }

  async function savePhoto(){
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }

  async function pickImage(){
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }

  const handleBarCodeScanned = ({type, data }: BarCodeScannerResult) => {
     setScanned(true);
     alert(data);
  };

  const handleFacesDetected = ({ faces }: FaceDetectionResult): void =>{
    if (faces.length > 0) {
      const FaceDetect = faces [0] as FaceDetector.FaceFeature
      setFace(FaceDetect)
    } else {
      setFace(undefined)
    } 
  };


  return (
    <View style={styles.container}>
      {takePhoto ? (
        <>
        <ComponentButtonInterface title='flip' type='secondary' onPressI={toggleCameraType} />
        <Camera style={styles.camera} type={type} ref={ref}
          onBarCodeScanned={scanned ? undefined: handleBarCodeScanned}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode : FaceDetector.FaceDetectorMode.accurate,
            detectLandmarks: FaceDetector.FaceDetectorClassifications.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDirectionInterval: 1000,
            tracking: true,
          }}/>
        <ComponentButtonInterface title='Tirar Foto' type='secondary' onPressI={takePicture} />
        <ComponentButtonInterface title='Ler QrCode novamente' type='secondary' onPressI={()=>setScanned(false)} />
        <View style={styles.sorriso}>
          {face && face.smilingProbability && face.smilingProbability> 0.5 ? (
            <Text style={styles.text2}> Sorrindo</Text>
          ):(
            <Text style={styles.text2}> chorando</Text>
          )}
        </View>
        </>
      ):(
        <>
        <ComponentButtonInterface title='Tirar Foto' type='secondary' onPressI={()=>setTakePhoto(true)} />
        <ComponentButtonInterface title='Abrir Imagem' type='secondary' onPressI={pickImage} />
        
        <ComponentButtonInterface title='Salvar Imagem' type='secondary' onPressI={savePhoto} />
        {photo && photo.uri && (
          <Image source={{uri: photo!.uri}} style={styles.img} />
        )}
        </>
      )}
    </View>
  );
}
