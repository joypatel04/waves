import {StyleSheet} from 'react-native';
import {darkCharcoal} from '../../themes/colors';
import {primaryBoldFont, secondaryFont} from '../../themes/fonts';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: scale(16),
    padding: scale(16),
    borderRadius: scale(14),
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '30%',
    borderRadius: scale(40),
    justifyContent: 'center',
  },
  image: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(40),
  },
  profileDetails: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statesContainer: {
    alignItems: 'center',
  },
  infoContainer: {
    paddingTop: scale(16),
    justifyContent: 'flex-start',
  },
  userName: {
    fontSize: scale(14),
    color: darkCharcoal,
    fontFamily: primaryBoldFont,
  },
  bio: {
    fontSize: scale(13),
    color: darkCharcoal,
    fontWeight: '400',
    fontFamily: secondaryFont,
  },
  contactContainer: {
    flexDirection: 'row',
  },
  socialContainer: {
    paddingTop: scale(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
