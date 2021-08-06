import {StyleSheet, Dimensions} from 'react-native';
import {Theme} from '../../utils/Theme';

const {width} = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 6,
  },
  contentInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    maxWidth: width / 2,
  },
  price: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  contentOptionsContainer: {
    backgroundColor: Theme.light,
    borderRadius: 6,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  contentOption: {
    padding: 4,
  },
});

// Desenvolvido por Hubert Ryan
