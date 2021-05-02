import {StyleSheet} from 'react-native';
import {darkCharcoal, secondaryColor} from '../../themes/colors';
import {secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
  },
  cardContainer: {
    borderRadius: 16,
    height: scale(44),
    marginBottom: scale(10),
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    height: scale(42),
    padding: 0,
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputStyle: {
    color: darkCharcoal,
    fontFamily: secondaryFont,
  },
});

export default styles;
