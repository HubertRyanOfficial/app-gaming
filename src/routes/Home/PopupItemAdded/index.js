import React, {memo, useEffect, useState} from 'react';

// * modules

// * components

import {View, Text, Animated} from 'react-native';

// * utils

import {s} from './styles';

//

function PopupItemAdded({showPopup, handleFunction}) {
  if (showPopup === false) return null;

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setTimeout(() => handleFunction(false), 1000));
  }, []);

  return (
    <Animated.View
      style={[
        s.container,
        {
          opacity: animation,
        },
      ]}>
      <Text style={s.text}>Item adicionado ao carrinho</Text>
    </Animated.View>
  );
}

export default memo(PopupItemAdded);
// Desenvolvido por Hubert Ryan
