import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function PlayIcon(props: SvgProps) {
  return (
    <Svg width="35px" height="35px" viewBox="-3 0 28 28" {...props}>
      <Path
        d="M440.415 583.554l-18.997-12.243c-1.127-.607-2.418-.544-2.418 1.635v24.108c0 1.992 1.385 2.306 2.418 1.635l18.997-12.243a2.076 2.076 0 000-2.892"
        transform="translate(-419 -571)"
        fill="white"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}
