import logoDarkText from '../../imports/vrn_logo_new_transparent.png';
import logoWhiteText from '../../imports/vrn_logo_new_white.png';

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark-text' | 'white-text';
  className?: string;
}

export default function LogoMark({
  size = 'sm',
  variant = 'dark-text',
  className = '',
}: LogoMarkProps) {
  // Default to dark-text so both the white navbar and light slate-50 footer show crisp black & orange
  const logoSrc = variant === 'white-text' ? logoWhiteText : logoDarkText;

  return (
    <img
      src={logoSrc}
      alt="VRN Technologies - Welcome to the world of opportunities"
      className={`w-auto object-contain transition-opacity duration-200 ${
        size === 'lg'
          ? 'h-14 sm:h-16'
          : size === 'md'
          ? 'h-11 sm:h-12'
          : 'h-9 sm:h-10'
      } ${className}`}
    />
  );
}
