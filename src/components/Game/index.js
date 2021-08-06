import React from 'react';

// * modules

// * components

import {View, Image, Text, TouchableOpacity} from 'react-native';

// * utils

import {s} from './styles';

import AddCart from '../../../assets/icons/add.svg';

//

function Game({data, handleFunction}) {
  const priceFormated = String(Number(data.price).toFixed(2)).replace('.', ',');

  return (
    <View style={s.container}>
      <Image style={s.imageGame} source={data.image} resizeMode="cover" />
      <View style={s.content}>
        <Text style={s.title}>{data.title}</Text>
        <Text style={s.text}>Plataform: {data.platform}</Text>
        <Text style={s.text}>Categora/Gênero</Text>

        <View style={s.tags}>
          {data.tags.map((tag, index) => (
            <View key={index} style={s.containerTag}>
              <Text style={s.textTag}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={() => handleFunction(data)}>
        <View style={s.addButtonContainer}>
          <AddCart width={16} height={16} />
          <Text style={s.addButtonPrice}>
            {data.free ? `Gratuito p/Jogar` : `R$ ${priceFormated}`}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Game;
// Desenvolvido por Hubert Ryan
