import React from 'react';
import {memo} from 'react';

// * modules

// * components

import {View, Text} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
import {Theme} from '../../../utils/Theme';

// * utils

import {s} from './styles';

//

function CepInfo({configCart}) {
  if (!configCart.cep) return null;

  const info =
    configCart.cep.logradouro && configCart.cep.bairro
      ? `${configCart.cep.logradouro}, ${configCart.cep.bairro}`
      : configCart.cep.localidade;
  const infoFormated = info.length > 40 ? `${info.substring(0, 40)}...` : info;

  return (
    <View style={s.cepInfoContainer}>
      <View style={s.cepInfoContent}>
        <Text style={s.cepInfoTitle}>{infoFormated}</Text>
        <Text style={s.cepInfoSubtitle}>
          valor do frete: R${configCart.totalTruck}
        </Text>
      </View>
    </View>
  );
}

export default memo(CepInfo);
// Desenvolvido por Hubert Ryan
