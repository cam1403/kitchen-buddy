import { swiss } from '@theme-ui/presets';

const theme = {
  ...swiss,
  containers: {
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
      textAlign: 'center',
      heading: {
        textDecoration: 'underline',
      },
    },
  },
  styles: {
    ...swiss.styles,
  },
};

export default theme;
