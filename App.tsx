import React, {useState} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import PersonalInfo from './components/PersonalInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './components/Styles';
import Chat from './components/Chat';
import AppLoading from 'expo-app-loading'

export default function App() {

  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsloading] = useState(true)
  const storageUserNameKey = 'chatapp-username';
  const storageImageKey = 'chatapp-image';

  const fetchedPersonalData = async () => {
    let fetchedUserName = await AsyncStorage.getItem(storageUserNameKey);
    let userName = fetchedUserName ?? '';
    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage ?? '';
    setUsername(userName);
    setImage(image);
  }

  const onPersonalInfo = async (name:string, image:string) => {
    setUsername(name);
    await AsyncStorage.setItem(storageUserNameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  }

  if(isLoading){
    return (
      <AppLoading startAsync={fetchedPersonalData} onFinish={() =>setIsloading(false)} onError={console.warn}/>
    )
  }

  let activeComponent = username?
      (
      <Chat username={username} image={image}/>
      )
      :
      (
        <PersonalInfo onClosed={onPersonalInfo}/>
      )
    
  return (
    <SafeAreaView style={Styles.container}>
     {activeComponent}
    </SafeAreaView>
  );
}


