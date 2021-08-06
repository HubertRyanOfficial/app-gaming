import React, {useCallback} from 'react';

// * modules

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// * components

import {FlatList, Text, View} from 'react-native';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Game from '../../components/Game';
import PopupItemAdded from './PopupItemAdded';

// * utils

import {s} from './styles';

import {updateCart} from '../../config/actions';
import {useState} from 'react';

//

function Home({games, configCart, updateCart}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddItem = useCallback(
    itemData => {
      let allItems = [...configCart.items];
      let getItem = allItems.filter(item => item.id === itemData.id);

      if (getItem && getItem.length === 1) {
        getItem[0].total = getItem[0].total + 1;
      } else {
        allItems.push({
          id: itemData.id,
          title: itemData.title,
          price: itemData.price,
          free: itemData.free,
          image: itemData.image,
          total: 1,
        });
      }

      updateCart({
        items: allItems,
        loaded: false,
      });

      setShowPopup(true);
    },
    [configCart],
  );

  const handlePopupItem = useCallback(value => setShowPopup(value), []);

  return (
    <View style={s.container}>
      <Header type="initial" />
      <Title title="Games" subTitle="Populares" />
      <FlatList
        data={games}
        renderItem={({item}) => (
          <Game data={item} handleFunction={handleAddItem} />
        )}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 20}}
        ItemSeparatorComponent={() => <View style={{marginVertical: 10}} />}
      />

      <PopupItemAdded showPopup={showPopup} handleFunction={handlePopupItem} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    games: state.gameReducer.allGames,
    configCart: state.gameReducer.cart,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCart,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// Desenvolvido por Hubert Ryan
