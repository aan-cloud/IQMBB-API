import { css, Style } from 'hono/css'

export default function Home () {
    const bgBlack = css`
    background: black;
    `     
    const contentCenter = css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const fontStyle = css`
    font-family: sans-serif;
    color: white;
    `
    const linkStyle = css`
    color: blue;

    `
    return (
        <html>
      <head>
        <Style />
      </head>
      <body class={bgBlack}>
        <div class={contentCenter}>
            <h1 class={fontStyle}>Welcome to IQMBB API</h1>
            <p class={fontStyle}>You must be read the documentation before using this app</p>
            <a class={linkStyle} href="https://github.com/aan-cloud/IQMBB-API">Check out to the github repo ↗</a>
        </div>
      </body>
    </html>
    )
}