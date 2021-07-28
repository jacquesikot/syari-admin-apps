import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

function HomeIcon({ color, ...props }: SvgProps) {
  const { colors } = useTheme();

  return (
    <Svg width={24} height={21} viewBox="0 0 24 21" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.996 21h-2c-1.104 0-2-.915-2-2.043V11.81h-4v7.149c0 1.128-.895 2.042-2 2.042h-2c-1.656 0-3-1.372-3-3.064v-7.149a1.01 1.01 0 011-1.02c.553 0 1 .457 1 1.02v7.15a1.01 1.01 0 001 1.02h2V11.81c0-1.128.896-2.043 2-2.043h4c1.105 0 2 .915 2 2.043v7.149h2c.553 0 1-.458 1-1.022v-7.149a1.01 1.01 0 011-1.02c.553 0 1 .457 1 1.02v7.15c0 1.691-1.343 3.063-3 3.063zm5.84-12.725c.3-.471.17-1.1-.29-1.41L14.176.658a3.93 3.93 0 00-4.35 0L.456 6.866c-.463.307-.596.94-.295 1.414a.989.989 0 001.385.302l9.37-6.21a1.965 1.965 0 012.18 0l9.37 6.21a.987.987 0 001.38-.297l-.01-.01z"
        fill={color}
      />
    </Svg>
  );
}

export default HomeIcon;
