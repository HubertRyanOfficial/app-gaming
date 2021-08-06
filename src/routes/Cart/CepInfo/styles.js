import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/Theme';

export const s = StyleSheet.create({
  cepInfoContainer: {
    marginBottom: 5,
  },
  cepInfoContent: {
    backgroundColor: Theme.light,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cepInfoTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: Theme.greyDark,
  },
  cepInfoSubtitle: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: Theme.greyDark,
  },
});

// Desenvolvido por Hubert Ryan
