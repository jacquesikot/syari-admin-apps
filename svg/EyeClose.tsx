import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function EyeClose({ color, ...props }: SvgProps) {
  return (
    <Svg width={24} height={16} viewBox="0 0 24 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11.823a3.007 3.007 0 01-2.6-1.49.977.977 0 01-.03-1.012c.18-.317.52-.51.888-.506.367.005.702.208.872.53.224.39.685.582 1.123.468a.99.99 0 00.617-1.446.977.977 0 01-.03-1.01c.18-.318.52-.512.887-.507.368.005.703.208.873.53a2.93 2.93 0 010 2.963 3.007 3.007 0 01-2.6 1.48zm11.82-2.37c.113-.178.175-.382.18-.592a.98.98 0 00-.18-.563 16.537 16.537 0 00-3.06-3.318 1.01 1.01 0 00-1.41.129.98.98 0 00.13 1.392 14.388 14.388 0 012.3 2.38c-2.252 3.146-5.88 5.054-9.78 5.144a11.408 11.408 0 01-5.85-1.62 2.02 2.02 0 00-2.37.208l-1.59 1.392a.981.981 0 00-.085 1.398c.367.409 1 .446 1.415.083l1.61-1.382A13.408 13.408 0 0012 16c4.797-.108 9.226-2.56 11.82-6.547zM2.65 10.925a.98.98 0 00.11-1.392c-.19-.218-.37-.445-.54-.672C4.472 5.715 8.1 3.807 12 3.716c1.077 0 2.148.152 3.18.455a2.02 2.02 0 001.87-.376l2.58-2.073a.979.979 0 00.107-1.357A1.009 1.009 0 0018.37.19l-2.62 2.084A13.305 13.305 0 0012 1.732C7.207 1.835 2.778 4.28.18 8.259A1.154 1.154 0 000 8.87c0 .201.063.397.18.563.33.471.684.926 1.06 1.362a1.008 1.008 0 001.41.109v.02z"
        fill={color}
      />
    </Svg>
  );
}

export default EyeClose;
