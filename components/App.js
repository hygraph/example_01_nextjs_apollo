import Head from 'next/head'

const App = ({ children }) => (
  <div>
    <Head>
      <title>Vinylbase</title>
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />
    </Head>
    {children}
    <footer>
      a <a href='https://graphcms.com'>GraphCMS</a> example
    </footer>
    <style jsx global>{`
      * {
        font-family: 'Source Sans Pro', sans-serif;
      }
      body {
        margin: 0;
        color: white;
        background-color: rgb(28, 32, 53);
      }
      a {
        color: #00bcd4;
        text-decoration: none;
      }
      footer {
        font-size: 1em;
        padding: 100px 0 30px;
        text-align: center;
        width: 100%;
        color: white;
      }
      section {
        width: 960px;
        margin: 0 auto;
        position: relative;
        padding-top: 100px;
      }
      article {
        font-size: 1.1em;
        text-align: justify;
      }
    `}</style>
  </div>
)

export default App
