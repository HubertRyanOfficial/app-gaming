import React, {memo} from 'react';

// * modules

// * components

import {View, Text} from 'react-native';

// * utils

import {s} from './styles';

//

function Title({title, subTitle}) {
  return (
    <View style={s.container}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default memo(Title);
// Desenvolvido por Hubert Ryan
