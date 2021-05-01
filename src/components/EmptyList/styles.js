import {StyleSheet} from 'react-native';
import {darkCharcoal, primaryColor} from '../../themes/colors';
import {
  primaryBoldFont,
  secondaryBoldFont,
  secondaryFont,
} from '../../themes/fonts';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: scale(16),
    padding: scale(16),
    borderRadius: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(150),
  },
  title: {
    fontSize: scale(18),
    color: darkCharcoal,
    fontFamily: primaryBoldFont,
  },
  subTitle: {
    width: '80%',
    marginTop: scale(10),
    fontSize: scale(14),
    color: darkCharcoal,
    fontWeight: '400',
    fontFamily: secondaryFont,
    textAlign: 'center',
  },
  button: {
    marginTop: scale(15),
    padding: scale(4),
    paddingHorizontal: scale(25),
    borderRadius: scale(15),
    backgroundColor: primaryColor,
  },
  buttonText: {
    fontSize: scale(16),
    fontFamily: secondaryBoldFont,
  },
});

export default styles;
