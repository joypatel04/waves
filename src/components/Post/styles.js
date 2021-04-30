import {StyleSheet} from 'react-native';
import {primaryColor, darkCharcoal} from '../../themes/colors';
import {primaryFontBold, secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';
const styles = StyleSheet.create({
  container: {},
  title: {
    color: primaryColor,
    fontFamily: primaryFontBold,
    fontSize: scale(16),
  },
  subTitle: {
    color: darkCharcoal,
    fontFamily: secondaryFont,
    fontSize: scale(14),
    fontWeight: '400',
  },
});

export default styles;
