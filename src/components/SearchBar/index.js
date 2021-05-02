import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchBar as Search, Card} from 'react-native-elements';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({onSearch}) => {
  const [value, setValue] = useState('');

  const onChangeText = (val) => {
    setValue(val);
    onSearch(val);
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Search
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Search"
          onChangeText={onChangeText}
          value={value}
        />
      </Card>
    </View>
  );
};

SearchBar.proptypes = {
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearch: _noop,
};

export default SearchBar;
