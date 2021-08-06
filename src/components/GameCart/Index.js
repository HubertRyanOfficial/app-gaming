import React from 'react';

// * modules

// * components

import {Image, Text, TouchableOpacity, View} from 'react-native';

// * utils

import {s} from './styles';

//

function GameCart({data, handleAddItem, handleRemoveItem}) {
  const priceFormated = String(Number(data.price).toFixed(2)).replace('.', ',');

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Image
          style={s.image}
          fadeDuratio={0}
          source={data.image}
          resizeMode="cover"
        />
        <View style={s.contentInfo}>
          <Text style={s.title}>{data.title}</Text>
          <Text style={s.price}>
            {data.free ? `Gratuito p/Jogar` : `R$ ${priceFormated}`}
          </Text>
        </View>
      </View>
      <View style={s.contentOptionsContainer}>
        <TouchableOpacity onPress={() => handleAddItem(data.id)}>
          <Text style={s.contentOption}>+</Text>
        </TouchableOpacity>
        <Text>{data.total}</Text>
        <TouchableOpacity onPress={() => handleRemoveItem(data.id)}>
          <Text style={s.contentOption}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GameCart;
// Desenvolvido por Hubert Ryan
