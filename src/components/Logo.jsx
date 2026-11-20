const Logo = ({ white = false }) => {
  const fill = white ? '#FFFFFF' : '#C92071';
  const textFill = white ? '#FFFFFF' : '#1F1F1F';

  return (
    <svg
      width="253"
      height="44"
      viewBox="0 0 253 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Digital Store"
    >
      <rect x="0" y="6" width="32" height="32" rx="8" fill={fill} />
      <path
        d="M10 16H17L22 22L17 28H10V16Z"
        fill={white ? '#1F1F1F' : '#FFFFFF'}
      />
      <text
        x="42"
        y="30"
        fill={textFill}
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="700"
      >
        Digital Store
      </text>
    </svg>
  );
};

export default Logo;