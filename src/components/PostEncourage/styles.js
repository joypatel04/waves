import {StyleSheet} from 'react-native';

import {darkCharcoal, primaryColor} from '../../themes/colors';
import {
  primaryBoldFont,
  secondaryFont,
  secondaryBoldFont,
} from '../../themes/fonts';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: scale(16),
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
    marginTop: scale(10),
    fontSize: scale(14),
    color: darkCharcoal,
    fontWeight: '400',
    fontFamily: secondaryFont,
  },
  button: {
    marginTop: scale(15),
    padding: scale(3),
    paddingHorizontal: scale(30),
    borderRadius: scale(15),
    backgroundColor: primaryColor,
  },
  buttonText: {
    fontSize: scale(18),
    fontFamily: secondaryBoldFont,
  },
  newPostButton: {
    backgroundColor: primaryColor,
    marginHorizontal: scale(16),
    padding: scale(10),
    borderRadius: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  newPostButtonText: {
    fontSize: scale(14),
    fontFamily: secondaryBoldFont,
    color: 'white',
  },
});

export default styles;
