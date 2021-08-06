import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/Theme';

export const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartActive: {
    width: 13,
    height: 13,
    backgroundColor: Theme.primary,
    borderRadius: 6.5,
    position: 'absolute',
    left: 15,
    top: -5,
  },
});

// Desenvolvido por Hubert Ryan
