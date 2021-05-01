import {StyleSheet} from 'react-native';
import {darkCharcoal, primaryColor} from '../../themes/colors';
import {primaryBoldFont, secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  username: {
    fontSize: scale(14),
    color: darkCharcoal,
    fontFamily: primaryBoldFont,
  },
  email: {
    fontSize: scale(14),
    color: primaryColor,
    fontFamily: secondaryFont,
  },
  icon: {
    marginHorizontal: scale(5),
  },
});

export default styles;
