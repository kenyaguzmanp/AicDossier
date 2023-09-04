import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}
const ChevronDown: FC<Props> = ({ color = "black", width = 14, height = 8 }) => (
  <View style={{ width: width, height: height }}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.586 5.76a.837.837 0 0 1-1.172 0L.993 1.397a.81.81 0 0 1 0-1.157.837.837 0 0 1 1.172 0L6 4.025 9.835.24a.837.837 0 0 1 1.172 0 .81.81 0 0 1 0 1.157L6.587 5.76z"
        fill={color}
      />
    </Svg>
  </View>
);

export default ChevronDown;
