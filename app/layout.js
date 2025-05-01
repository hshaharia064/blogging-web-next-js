// app/layout.js
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Next.js Blog with Tailwind',
  description: 'A simple blog using Next.js App Router and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <nav className="bg-gray-500 shadow mb-6">
          <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between">
            <Link href="/" className="text-lg font-bold hover:text-blue-600">
              Home
            </Link>
            <Link href="/create" className="text-lg font-bold hover:text-blue-600">
              Create Post
            </Link>
          </div>
        </nav>
        <main className="max-w-3xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
