import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/Theme';

export const s = StyleSheet.create({
  container: {
    backgroundColor: Theme.green,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    color: Theme.secondary,
  },
});

// Desenvolvido por Hubert Ryan
