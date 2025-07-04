// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '職務経歴書 - 田口龍馬',
  description: 'フロントエンド開発者の職務経歴書',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <style>{`
          @media print {
            @page {
              margin: 0;
              size: A3 landscape;
            }
            
            #__next-build-watcher,
            [data-nextjs-scroll-focus-boundary] {
              display: none !important;
            }
            
            html, body {
              margin: 0 !important;
              padding: 0 !important;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}