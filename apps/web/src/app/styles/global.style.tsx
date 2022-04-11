import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
	--dark: #374151;
	--darker: #1F2937;
	--darkest: #111827;
	--grey: #6B7280;
	--pink: #EC4899;
	--purple: #8B5CF6;
	--light: #EEE;
}
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Fira sans", sans-serif;
  }
  body {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	color: #FFF;
	background-color: var(--dark);
}
input:not([type=checkbox]), button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.hidden {
	display: none;
}
`;
