import React, {memo} from 'react';

// * modules

import {useNavigation} from '@react-navigation/native';

// * components

import {View, Image, TouchableOpacity} from 'react-native';

// * utils

import {s} from './styles';
import Cart from '../../../assets/icons/cart.svg';
import Arrow from '../../../assets/icons/arrow-right.svg';

//

function Header({type}) {
  const navigation = useNavigation();

  if (type === 'cart') {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={[
            s.container,
            {
              justifyContent: 'flex-start',
              padding: 20,
            },
          ]}>
          <Arrow width={18} height={16} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={s.container}>
      <Image
        fadeDuration={0}
        source={require('../../../assets/icons/logo.png')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <>
          <Cart width={24} height={24} />
          <View style={s.cartActive} />
        </>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Header);
// Desenvolvido por Hubert Ryan
