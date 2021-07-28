import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ProfileIcon({ color, ...props }: SvgProps) {
  return (
    <Svg width={18} height={24} viewBox="0 0 18 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 24H5a1 1 0 110-2h10a1 1 0 001-1v-4.15a1.63 1.63 0 00-.89-1.31 16.32 16.32 0 00-12.22 0A1.63 1.63 0 002 16.85V23a1 1 0 11-2 0v-6.15a3.59 3.59 0 012.14-3.17 18.31 18.31 0 0113.72 0A3.59 3.59 0 0118 16.85V21a3 3 0 01-3 3zM14 5A5 5 0 104 5a5 5 0 0010 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill={color}
      />
    </Svg>
  );
}

export default ProfileIcon;
