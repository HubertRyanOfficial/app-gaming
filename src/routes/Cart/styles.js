import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/Theme';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  content: {
    flex: 1,
    backgroundColor: Theme.secondary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  finishCartContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  finishCartText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    color: Theme.light,
  },
  finishCartTextBold: {
    fontFamily: 'OpenSans-Bold',
  },
  finishCartIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Theme.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separte: {
    height: 4,
    width: 60,
    backgroundColor: Theme.greyLight,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 5,
  },
  contentInfoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  contentInfoTitle: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: Theme.greyMedium,
  },
  contentInfoPrice: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  contentInfoItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
});

// Desenvolvido por Hubert Ryan
