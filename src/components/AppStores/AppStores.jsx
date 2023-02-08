import React from 'react';
import playStoreImg from '../../assets/play_store.png';
import appStoreImg from '../../assets/app_store.png';
import {
  ImagesContainer,
  Image,
} from './styles';

function AppStores() {
  return (
    <ImagesContainer>
      <Image src={playStoreImg} />
      <Image src={appStoreImg} />
    </ImagesContainer>
  );
}

export default AppStores;
