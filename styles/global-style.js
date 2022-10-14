export const setGlobalStyles = theme => {
  return `
    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Noto Sans Japanese';
      font-style: normal;
      font-weight: 100;
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

    h2 {
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
  `;
};
