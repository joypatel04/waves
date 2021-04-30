import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('70%'),
  },
});

export default styles;
