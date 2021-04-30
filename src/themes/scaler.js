import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

const scale = (size) => (width / guidelineBaseWidth) * size;

export {scale};
