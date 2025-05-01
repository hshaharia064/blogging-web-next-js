// app/blog/[id]/page.js
'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function PostPage() {
  const { id } = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Fetch posts from localStorage and find the one with matching id
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || []
    const found = savedPosts.find(p => p.id === id)
    if (found) {
      setPost(found)
    } else {
      // If not found, redirect or show a message
      setPost({ title: 'Post not found', content: '' })
    }
  }, [id])

  const handleDelete = () => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || []
    const updated = savedPosts.filter(p => p.id !== id)
    localStorage.setItem('posts', JSON.stringify(updated))
    router.push('/')
  }

  if (!post) return null  // or a loading state

  return (
    <div className="bg-gray-600 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6 whitespace-pre-wrap">{post.content}</p>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
      >
        Delete Post
      </button>
    </div>
  )
}
