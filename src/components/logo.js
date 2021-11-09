/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'limks.logo',
        display: 'flex',
        cursor: 'pointer',
      }}
      {...rest}
    >
      <Image src={src} alt="logo" />
    </Link>
  );
}
