import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

const ChevronRight: FC<Props> = ({ color = "black", height = 10, width = 10 }) => (
  <View style={{ width: width, height: height }}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill={color}
        d="M110.507 451.413l195.413-195.413-195.413-195.84 60.16-60.16 256 256-256 256-60.16-60.587z"
      />
    </Svg>
  </View>
);

export default ChevronRight;
