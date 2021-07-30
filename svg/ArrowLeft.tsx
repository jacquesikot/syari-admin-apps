import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ArrowLeft({ color }: SvgProps): JSX.Element {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.174 16a1 1 0 01-.66-.25l-7-6.117a1.499 1.499 0 011-2.629h21.49a1 1 0 110 2H2.834l6 5.247A1 1 0 018.174 16zM4.834 5.255l4-3.498a1.002 1.002 0 10-1.32-1.51l-4 3.499a1.002 1.002 0 101.32 1.51z"
        fill={color}
      />
    </Svg>
  );
}

export default ArrowLeft;
