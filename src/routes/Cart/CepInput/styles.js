import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/Theme';

export const s = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  cepText: {
    fontSize: 16,
    color: '#707070',
  },
  cepInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cepInput: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Theme.primary,
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    marginTop: 5,
  },
  cepInputButton: {
    backgroundColor: Theme.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});

// Desenvolvido por Hubert Ryan
