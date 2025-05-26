import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3a86ff;
    --secondary-color: #a3aed0;
    --background-color: #f6f9fe;
    --white: #ffffff;
    --success-color: #05CD99;
    --warning-color: #FFB547;
    --danger-color: #EE5D50;
    --text-primary: #2B3674;
    --text-secondary: #A3AED0;
    --border-color: #e0e5f2;
    --shadow: 0 8px 32px 0 rgba(60, 120, 255, 0.08);
    --shadow-md: 0 4px 16px 0 rgba(60, 120, 255, 0.12);
    --shadow-sm: 0 2px 8px 0 rgba(60, 120, 255, 0.06);
    --transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    --border-radius: 24px;
    --sidebar-width: 260px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles; 