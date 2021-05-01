import {StyleSheet} from 'react-native';
import {primaryColor, darkCharcoal, lightGrey} from '../../themes/colors';
import {primaryBoldFont, primaryFont, secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';
const styles = StyleSheet.create({
  cardContainer: {borderRadius: 16},
  userInfocontainer: {
    flexDirection: 'row',
    height: scale(44),
    marginVertical: scale(10),
    alignItems: 'center',
  },
  spaceContainer: {
    justifyContent: 'space-between',
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
    fontFamily: primaryBoldFont,
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
  wavesColor: {
    tintColor: primaryColor,
  },
  wavesCount: {
    color: primaryColor,
    fontFamily: secondaryFont,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  savedColor: {
    color: primaryColor,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
