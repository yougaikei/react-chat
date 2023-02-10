import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from './../src/theme.jsx'

/**
 * old method has the risk of not working with Storybook 6.0
 */
// addDecorator( storyFn => (
//     <ThemeProvider theme={theme}>
//       { storyFn() }
//     </ThemeProvider>
//   )
// )

/**
 *  new in Storybook 6.0
 */
export const decorators = [ Story => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
) ]


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showRoots: true,
  }
}