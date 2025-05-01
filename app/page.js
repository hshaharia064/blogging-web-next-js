// app/page.js
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Load posts from localStorage when component mounts
    const saved = JSON.parse(localStorage.getItem('posts')) || []
    setPosts(saved)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet. <Link href="/create" className="text-blue-500">Create the first post!</Link></p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4 p-4 bg-gray-600 rounded shadow">
              <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-50 mt-1">{post.content.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
