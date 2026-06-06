import logo from '../../imports/Untitled_(1).png';

interface LogoMarkProps {
  size?: 'sm' | 'lg';
}

export default function LogoMark({ size = 'sm' }: LogoMarkProps) {
  return (
    <img
      src={logo}
      alt="VRN Technologies"
      className={`w-auto object-contain brightness-[0.6] contrast-[1.2] ${
        size === 'lg' ? 'h-24' : 'h-16'
      }`}
    />
  );
}
