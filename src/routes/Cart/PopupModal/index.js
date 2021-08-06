import React, {memo} from 'react';

// * modules

// * components

import {Modal, Text, TouchableOpacity, View} from 'react-native';

import Title from '../../../components/Title';

// * utils

import {s} from './styles';

//

function PopupModal({configModal, configCart, handleFunction}) {
  const total = Number(configCart.totalPrice + configCart.totalTruck);
  const totalFormated = total.toFixed(2);

  return (
    <Modal visible={configModal} animationType="fade" transparent>
      <View style={s.container}>
        <View style={s.content}>
          <Title title="Compra" subTitle="Finalizada" />
          <Text style={s.finishedText}>
            Sua compra foi finalizada com sucesso!
          </Text>

          <View style={s.contentInfo}>
            <Text style={s.contentInfoTitle}>valor da compra: </Text>
            <Text style={s.contentInfoTotal}>R${totalFormated}</Text>
          </View>

          <TouchableOpacity onPress={() => handleFunction()}>
            <View style={s.buttonContainer}>
              <Text style={s.buttonText}>Voltar para a Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default memo(PopupModal);
// Desenvolvido por Hubert Ryan
