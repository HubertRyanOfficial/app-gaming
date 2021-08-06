import {StyleSheet, Dimensions} from 'react-native';
import {Theme} from '../../utils/Theme';

const {width, height} = Dimensions.get('screen');

export const s = StyleSheet.create({
  container: {
    borderRadius: 12,
    flex: 1,
    backgroundColor: Theme.light,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  imageGame: {
    width: width / 2.3,
    height: 78,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    flex: 1,
  },
  title: {
    marginVertical: 10,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: Theme.greyDark,
  },
  text: {
    fontSize: 10,
    color: Theme.greyDark,
    marginBottom: 5,
    fontFamily: 'OpenSans-Regular',
  },
  containerTag: {
    backgroundColor: Theme.greyLight,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  textTag: {
    color: Theme.greyDark,
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 5,
  },
  addButtonContainer: {
    backgroundColor: Theme.primary,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    padding: 10,
  },
  addButtonPrice: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: Theme.secondary,
    marginLeft: 10,
  },
});

// Desenvolvido por Hubert Ryan
