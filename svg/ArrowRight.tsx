import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent({ color }: SvgProps): JSX.Element {
  return (
    <Svg width={25} height={16} viewBox="0 0 25 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 8.999H1a1 1 0 110-1.998h20.17l-6-5.245A1.001 1.001 0 1116.49.248l7 6.114a1.498 1.498 0 01-1 2.627l.01.01zm-6.01 6.753l4-3.496a1.001 1.001 0 10-1.32-1.509l-4 3.497a1.001 1.001 0 101.32 1.508z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
