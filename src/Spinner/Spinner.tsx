import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Spinner = ({ animating = true, size = "small" }) => (
  <ActivityIndicator size={size} animating={animating} color={MD2Colors.red800} />
);

export default Spinner;