import {StyleSheet} from 'react-native';
import {darkCharcoal, lightGrey, primaryColor} from '../../themes/colors';
import {primaryBoldFont, secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: scale(16),
    padding: scale(16),
    borderRadius: scale(14),
  },
  postButton: {
    paddingHorizontal: scale(16),
  },
  postText: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: scale(18),
  },
  titleText: {
    fontSize: scale(18),
    color: darkCharcoal,
    fontFamily: primaryBoldFont,
    marginBottom: scale(10),
  },
  subTitleText: {
    fontSize: scale(18),
    color: darkCharcoal,
    fontFamily: primaryBoldFont,
    marginVertical: scale(10),
  },
  inputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(12),
    borderRadius: scale(14),
    borderColor: lightGrey,
    borderWidth: 1,
    color: primaryColor,
    fontFamily: primaryBoldFont,
    fontSize: scale(18),
  },
  subInputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(12),
    borderRadius: scale(12),
    borderColor: lightGrey,
    borderWidth: 1,
    color: darkCharcoal,
    fontFamily: secondaryFont,
    fontSize: scale(16),
    fontWeight: '400',
  },
});

export default styles;
