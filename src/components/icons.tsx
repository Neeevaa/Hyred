export const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.62-4.55 1.62-3.87 0-7-3.13-7-7s3.13-7 7-7c2.25 0 3.67.92 4.48 1.69l2.52-2.52C18.05 3.53 15.58 2 12.48 2c-5.45 0-9.98 4.45-9.98 9.98s4.53 9.98 9.98 9.98c5.25 0 9.5-3.53 9.5-9.5-.08-.79-.16-1.58-.24-2.38z"
    />
  </svg>
);

export const HyredLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 293 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g className="logo-h" fill="hsl(var(--primary))">
      <path d="M0 0H27V38H0V0Z" />
      <path d="M54 0H81V83H54V0Z" />
      <path d="M0 45H81V83H0V45Z" />
    </g>
    <path
      className="logo-arrow"
      d="M27 45L40.5 31.5L54 45L60.75 38.25L40.5 18L20.25 38.25L27 45Z"
      fill="hsl(var(--accent))"
    />
    <g className="logo-text" fill="hsl(var(--primary))">
      <path d="M126.541 82.26V27.42H102.091V21.48H158.851V27.42H134.401V82.26H126.541Z" />
      <path d="M176.623 82.26V21.48H184.483V82.26H176.623Z" />
      <path d="M222.064 21.48V82.26H214.204V64.08H196.264V82.26H188.404V21.48H214.204V39.24H196.264V33.3H214.204V58.14H196.264V45.18H222.064V21.48Z" />
      <path d="M260.672 21.48L242.012 55.08L223.532 21.48H234.332L242.012 37.8L249.752 21.48H260.672Z" />
      <path d="M292.905 21.48V82.26H285.045V64.08H267.105V82.26H259.245V21.48H285.045V39.24H267.105V33.3H285.045V58.14H267.105V45.18H292.905V21.48Z" />
    </g>
  </svg>
);
