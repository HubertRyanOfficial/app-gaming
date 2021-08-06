import React, {useMemo, useCallback, useState, useEffect} from 'react';

// * modules

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import api from '../../config/api';

// * components

import {
  FlatList,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';

import Header from '../../components/Header';
import Title from '../../components/Title';
import GameCart from '../../components/GameCart/Index';
import CepInfo from './CepInfo';
import CepInput from './CepInput';

import PopupModal from './PopupModal';

// * utils

import {s} from './styles';

import CartCheck from '../../../assets/icons/cart-check.svg';
import {updateCart, updateCartLoaded, resetCart} from '../../config/actions';

//

var totalPrice,
  totalItems,
  totalTruck,
  count,
  price,
  countOff = 0;

function Cart({navigation, configCart, updateCart}) {
  const [cepValue, setCepValue] = useState('');
  const [loadingCep, setLoadingCep] = useState(false);
  const [configModal, setConfigModal] = useState(false);

  //

  useEffect(() => {
    totalPrice = 0;
    totalItems = 0;
    totalTruck = 0;

    if (!configCart.loaded) {
      console.log('RELOADED CONFIG');

      const allItems = configCart.items;
      const cepConfig = configCart.cep;
      allItems.forEach(item => {
        if (!item.free) {
          count = 0;
          countOff = 0;
          price = 0;

          for (var i = 1; i <= item.total; i++) {
            count++;
            if (count === 3) {
              count = 0;
              countOff++;

              price += ((item.price * 75) / 100) * 3;
            }
          }

          let getOthersItems = item.total - countOff * 3;
          let multiPrice = item.price * getOthersItems;
          let totalPriceItem = price + multiPrice;

          totalPrice += countOff > 0 ? totalPriceItem : item.price * item.total;
          totalItems += item.total;
        }
      });

      if (cepConfig && cepConfig.uf == 'PE') {
        totalTruck = 100;
      } else if (cepConfig && cepConfig.uf != 'PE') {
        totalTruck = 200;
      }

      updateCart({
        totalTruck,
        totalPrice,
        totalItems,
        loaded: true,
      });
    }
  }, [configCart]);

  const handleCepValue = useCallback(value => setCepValue(value), []);
  const handleSearchCep = useCallback(async () => {
    setLoadingCep(true);
    try {
      if (cepValue && configCart.items.length > 0) {
        let route = `${cepValue}/json`;

        Keyboard.dismiss();

        const response = await api.get(route);
        const data = response.data;

        if (data.erro) {
          ToastAndroid.show(
            'Houve um error ao pesquisar este CEP.',
            ToastAndroid.SHORT,
          );
          return;
        }

        updateCart({
          cep: data,
          loaded: false,
        });
      } else if (cepValue && !configCart.items.length > 0) {
        ToastAndroid.show(
          'Adicione itens ao carrinho para poder calcular o frete!',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      ToastAndroid.show(
        'Houve um error ao pesquisar este CEP.',
        ToastAndroid.SHORT,
      );
    } finally {
      setLoadingCep(false);
    }
  }, [cepValue, configCart]);

  //

  const ItemsContent = useMemo(() => {
    if (configCart.totalItems > 1) {
      return `${configCart.totalItems} itens`;
    }
    return `${configCart.totalItems} item`;
  }, [configCart]);
  const TotalPrice = useMemo(
    () => Number(configCart.totalPrice).toFixed(2).replace('.', ','),
    [configCart],
  );
  const TotalTruck = useMemo(
    () => Number(configCart.totalTruck).toFixed(2).replace('.', ','),
    [configCart],
  );
  const EnabledButton = useMemo(
    () => (configCart.items.length > 0 && configCart.cep ? true : false),
    [configCart],
  );

  //

  const handleAddItem = useCallback(
    itemId => {
      let allItems = [...configCart.items];
      let getItem = allItems.filter(item => item.id === itemId);
      getItem[0].total = getItem[0].total + 1;

      updateCart({
        items: allItems,
        loaded: false,
      });
    },
    [configCart],
  );
  const handleRemoveItem = useCallback(
    itemId => {
      let allItems = [...configCart.items];
      let getItem = allItems.filter(item => item.id === itemId);
      getItem[0].total = getItem[0].total - 1;

      if (getItem[0].total === 0) {
        updateCart({
          items: allItems.filter(item => item.id !== itemId),
          loaded: false,
        });

        return;
      }

      updateCart({
        items: allItems,
        loaded: false,
      });
    },
    [configCart],
  );

  //

  const finishCart = useCallback(() => {
    setConfigModal(true);
  }, []);

  const finishedCart = useCallback(() => {
    resetCart();
    setConfigModal(false);
    navigation.goBack();
  }, []);

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Header type="cart" />
        <Title title="Seu" subTitle="Carrinho" />
        <FlatList
          data={configCart.items}
          renderItem={({item}) => (
            <GameCart
              data={item}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          )}
          contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 20}}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <View style={{marginVertical: 10}} />}
          showsVerticalScrollIndicator={false}
        />

        <View style={s.separte} />

        <KeyboardAvoidingView behavior="padding">
          <CepInput
            cepValue={cepValue}
            handleInputFunction={handleCepValue}
            handleFunction={handleSearchCep}
            loading={loadingCep}
          />

          <View style={s.contentInfoContainer}>
            <CepInfo configCart={configCart} />
            <View>
              {configCart.cep && configCart.totalTruck > 0 && (
                <View style={s.contentInfoItems}>
                  <Text style={s.contentInfoTitle}>frete</Text>
                  <Text
                    style={[
                      s.contentInfoPrice,
                      {
                        fontSize: 16,
                      },
                    ]}>
                    R${TotalTruck}
                  </Text>
                </View>
              )}
              <View style={s.contentInfoItems}>
                <Text style={s.contentInfoTitle}>{ItemsContent}</Text>
                <Text style={s.contentInfoPrice}>R${TotalPrice}</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity onPress={() => finishCart()} disabled={!EnabledButton}>
        <View
          style={[
            s.finishCartContainer,
            {
              opacity: EnabledButton ? 1 : 0.5,
            },
          ]}>
          <Text style={s.finishCartText}>
            Finalizar<Text style={s.finishCartTextBold}>Compra</Text>
          </Text>
          <View style={s.finishCartIcon}>
            <CartCheck width={24} height={24} />
          </View>
        </View>
      </TouchableOpacity>

      <PopupModal
        configModal={configModal}
        configCart={configCart}
        handleFunction={finishedCart}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    configCart: state.gameReducer.cart,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCartLoaded,
      updateCart,
      resetCart,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// Desenvolvido por Hubert Ryan
