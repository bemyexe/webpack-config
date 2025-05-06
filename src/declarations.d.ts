declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const ENV_PLATFORM: 'mobile' | 'desktop';
