import {StyleSheet} from 'react-native';
import {primaryColor, darkCharcoal, lightGrey} from '../../themes/colors';
import {primaryFontBold, primaryFont, secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';
const styles = StyleSheet.create({
  userInfocontainer: {
    flexDirection: 'row',
    height: scale(44),
    marginVertical: scale(10),
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: scale(16),
    justifyContent: 'space-around',
  },
  name: {
    color: darkCharcoal,
    fontFamily: primaryFont,
    fontWeight: '500',
  },
  views: {
    color: darkCharcoal,
    fontFamily: secondaryFont,
    fontWeight: '400',
  },
  title: {
    color: primaryColor,
    fontFamily: primaryFontBold,
    fontSize: scale(16),
    marginTop: 10,
  },
  subTitle: {
    color: darkCharcoal,
    fontFamily: secondaryFont,
    fontSize: scale(14),
    fontWeight: '400',
  },
  wavesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wavesImage: {
    width: 30,
    height: 30,
    tintColor: lightGrey,
  },
  wavedColor: {
    tintColor: primaryColor,
  },
  wavesCount: {
    color: primaryColor,
    fontFamily: secondaryFont,
    fontWeight: '400',
    marginLeft: 10,
  },
});

export default styles;
