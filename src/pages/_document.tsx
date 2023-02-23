import { Head, Html, Main, NextScript } from 'next/document'

import Nav from '../components/Nav'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-300 dark:text-white dark:bg-coffee-bean-900">
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
