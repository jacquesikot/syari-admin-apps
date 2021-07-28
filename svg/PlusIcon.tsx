import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function PlusIcon({ color, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.737 21.93a1.001 1.001 0 10-1.12-1.66 10.12 10.12 0 112.85-2.95 1 1 0 101.69 1.07 12 12 0 10-3.42 3.54z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.774 11.604a.981.981 0 01.694-.291h2.942a.981.981 0 010 1.957H7.468a.981.981 0 01-.694-1.68v.014zM11.344 14.431v2.943a.981.981 0 001.957 0V14.43a.981.981 0 10-1.957 0zM13.343 12.364c.002.54.44.977.979.978h2.942a.981.981 0 100-1.957h-2.942a.981.981 0 00-.979.979zM11.344 7.561v2.943a.981.981 0 001.957 0V7.56a.982.982 0 10-1.957 0z"
        fill={color}
      />
    </Svg>
  );
}

export default PlusIcon;
