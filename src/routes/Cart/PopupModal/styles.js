import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/Theme';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: Theme.secondary,
    padding: 10,
    borderRadius: 12,
    alignSelf: 'stretch',
  },
  finishedText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    marginTop: 20,
    marginLeft: 15,
    color: Theme.greyDark,
  },
  contentInfo: {
    marginHorizontal: 15,
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentInfoTitle: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: Theme.greyMedium,
  },
  contentInfoTotal: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: Theme.greyDark,
  },
  buttonContainer: {
    backgroundColor: Theme.primary,
    padding: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: Theme.secondary,
  },
});

// Desenvolvido por Hubert Ryan
