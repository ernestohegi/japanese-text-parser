export const setGlobalStyles = (theme) => {
  return `
    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Noto Sans Japanese';
      font-style: normal;
      font-weight: 400;
      padding: 20px;
      margin: 0;
      background-color: #333333;
      color: #FFF;
    }

    body, html, #__next {
      min-height: 100%;
    }

    a,
    a:hover,
    a:focus,
    a:visited {
      color: ${theme.mainColor.hex};
      text-decoration: none;
      display: inline-block;
      min-width: 50px;
    }

    a:hover {
      text-decoration: underline;
    }

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
    }

    button {
      border: 0;
      background: ${theme.mainColor.hex};
      color: #FFF;
    }

    .highlight {
      font-weight: 500;
      color: #5D5D5D;
    }
  `
}
