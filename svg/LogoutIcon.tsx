import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function LogoutIcon({ color }: SvgProps): JSX.Element {
  return (
    <Svg width={18} height={20} viewBox="0 0 18 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.253 14.659a1 1 0 01-1.506-1.318L14.797 11H5a1 1 0 110-2h9.796l-2.049-2.341a1 1 0 011.506-1.317l3.5 4a1 1 0 010 1.316l-3.5 4zM5 2a1 1 0 100-2H2a2 2 0 00-2 2v16a2 2 0 002 2h3a1 1 0 100-2H2V2h3z"
        fill={color}
      />
    </Svg>
  );
}

export default LogoutIcon;
