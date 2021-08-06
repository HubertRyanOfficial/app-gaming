import React, {memo} from 'react';

// * modules

// * components

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// * utils

import {s} from './styles';

import CepIcon from '../../../../assets/icons/map-mark.svg';
import {Theme} from '../../../utils/Theme';

//

function CepInput({handleInputFunction, cepValue, handleFunction, loading}) {
  return (
    <View style={s.container}>
      <Text style={s.cepText}>Calcular o frete</Text>
      <View style={s.cepInputContainer}>
        <TextInput
          style={s.cepInput}
          placeholder="Seu cep"
          keyboardType="decimal-pad"
          value={cepValue}
          onChangeText={handleInputFunction}
        />
        <TouchableOpacity onPress={() => handleFunction()} disabled={loading}>
          <View style={s.cepInputButton}>
            {!loading ? (
              <CepIcon width={18} height={18} />
            ) : (
              <ActivityIndicator size="small" color={Theme.secondary} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(CepInput);
// Desenvolvido por Hubert Ryan
