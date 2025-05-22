export const setJapaneseStyles = (theme) => {
  return `
    :root {
      --primary-color: ${theme.mainColor.hex};
      --secondary-color: #1a1a1a;
      --background-color: #f7f3e9;
      --accent-color: #4d7298;
      --text-color: #333333;
      --border-radius: 2px;
      --spacing-unit: 1.5rem;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      overflow-x: hidden;
      width: 100%;
    }

    body {
      font-family: 'Noto Sans JP', sans-serif;
      background-color: var(--background-color);
      color: var(--text-color);
      line-height: 1.6;
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
      position: relative;
    }

    body, html, #__next {
      min-height: 100%;
      min-height: calc(var(--vh, 1vh) * 100);
      max-width: 100%;
    }

    /* Layout */
    .container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-unit);
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: var(--spacing-unit);
      overflow-x: hidden;
    }

    /* Typography */
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Zen Maru Gothic', sans-serif;
      font-weight: 500;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2.5rem;
      border-bottom: 3px solid var(--primary-color);
      display: inline-block;
      padding-bottom: 0.5rem;
    }

    /* Navigation */
    nav {
      background-color: white;
      padding: 1rem 0;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      width: 100%;
      overflow-x: hidden;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 0 var(--spacing-unit);
    }

    .nav-logo {
      font-family: 'Zen Maru Gothic', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-logo:hover::after {
      content: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: var(--text-color);
      position: relative;
      font-weight: 500;
      padding: 0.5rem 0;
      font-family: 'Zen Maru Gothic', sans-serif;
      text-decoration: none;
    }

    .nav-link::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-link.active {
      color: var(--primary-color);
    }

    .nav-link.active::after {
      width: 100%;
    }
    
    /* Mobile navigation */
    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem var(--spacing-unit);
      }
      
      .nav-links {
        width: 100%;
        justify-content: space-between;
      }
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    p {
      margin: 0 0 1rem 0;
      padding: 0;
    }

    /* Links */
    a,
    a:hover,
    a:focus,
    a:visited {
      color: var(--primary-color);
      text-decoration: none;
      display: inline-block;
      position: relative;
      padding: 0.25rem 0;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #b83838;
    }

    /* Only apply underline animation to content links, not navigation */
    a:not(.nav-link):not(.nav-logo):hover::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
    }

    /* Form elements */
    input, textarea, button, select {
      font-family: 'Noto Sans JP', sans-serif;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: var(--border-radius);
      margin-bottom: 1rem;
    }

    input[type="text"] {
      width: 100%;
      font-size: 1.5rem;
      padding: 1rem;
      background-color: white;
      border: 1px solid #ddd;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-weight: 500;
      letter-spacing: 1px;
      padding: 0.75rem 1.5rem;
    }

    button:hover {
      background-color: #b83838;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    /* Cards and content containers */
    article {
      background-color: white;
      border-radius: var(--border-radius);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      padding: var(--spacing-unit);
      margin-bottom: var(--spacing-unit);
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 100%;
      word-wrap: break-word;
    }

    article::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: var(--primary-color);
    }

    /* Specific styling for Japanese text parser */
    .japanese-text {
      font-size: 1.2rem;
      line-height: 2;
    }

    .parsed-result {
      border-left: 3px solid var(--accent-color);
      padding-left: 1rem;
      margin-top: 1.5rem;
    }

    .highlight {
      font-weight: 500;
      color: var(--primary-color);
    }

    /* Footer styling */
    footer {
      margin-top: 3rem;
      padding: var(--spacing-unit) 0;
      text-align: center;
      font-size: 0.9rem;
      border-top: 1px solid #ddd;
      color: var(--text-color);
      width: 100%;
    }

    /* Cookie consent styling */
    .CookieConsent {
      background-color: rgba(255, 255, 255, 0.95) !important;
      color: var(--text-color) !important;
      box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
      max-width: 100% !important;
      overflow: hidden !important;
    }
    
    #rcc-confirm-button {
      background-color: var(--primary-color) !important;
      color: white !important;
      border: none !important;
    }
    
    #rcc-decline-button {
      background-color: var(--secondary-color) !important;
      color: white !important;
      border: none !important;
    }

    /* Playful elements */
    .kanji-decoration {
      position: fixed;
      opacity: 0.03;
      font-size: 15rem;
      z-index: -1;
      color: var(--primary-color);
      pointer-events: none;
      overflow: hidden;
    }

    .top-right {
      top: 0;
      right: 0;
    }

    .bottom-left {
      bottom: 0;
      left: 0;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
      
      .container {
        padding: calc(var(--spacing-unit) / 2);
      }
      
      input[type="text"] {
        font-size: 1.2rem;
      }
      
      .nav-container {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem var(--spacing-unit);
      }
      
      .nav-links {
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }
      
      article {
        padding: 1rem;
      }
    }

    /* Animation for feedback and interactivity */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .fade-in {
      animation: fadeIn 0.5s ease-in;
    }
    
    /* Floating Buttons for Mobile */
    @media (max-width: 768px) {
      .floating-buttons-container {
        bottom: 1.5rem !important;
        right: 1.5rem !important;
      }
      
      .floating-button {
        width: 50px !important;
        height: 50px !important;
      }
      
      .floating-button-label {
        font-size: 0.8rem !important;
        padding: 0.4rem 0.8rem !important;
      }
      
      /* Handle Safari bottom bar */
      @supports (-webkit-touch-callout: none) {
        .floating-buttons-container {
          bottom: calc(1.5rem + env(safe-area-inset-bottom)) !important;
        }
      }
    }
    
    /* General text content */
    p, ul, ol, li {
      max-width: 100%;
      overflow-wrap: break-word;
      word-break: break-word;
    }
    
    /* Images if any */
    img {
      max-width: 100%;
      height: auto;
    }
    
    /* Tables if any */
    table {
      width: 100%;
      border-collapse: collapse;
      overflow-x: auto;
      display: block;
    }
    
    @media (min-width: 768px) {
      table {
        display: table;
      }
    }
  `
}
