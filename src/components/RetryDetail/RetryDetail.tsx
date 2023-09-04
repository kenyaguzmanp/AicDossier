import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import RetryIcon from '../RetryIcon/RetryIcon';
import i18n from '../../i18n/locales';
import { noop } from 'lodash';

const RetryDetail = ({ onRetry = noop }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity 
        style={{ 
          flexDirection: "row",
          alignItems: "center" 
        }} 
        onPress={onRetry}
      >
      <Text variant="headlineMedium">{i18n.t("RETRY_TEXT")}</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <RetryIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RetryDetail;