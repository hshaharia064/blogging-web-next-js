// app/create/page.js
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreatePostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      alert('Title and content are required.')
      return
    }
    // Create new post object
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
    }
    // Get existing posts from localStorage or empty array
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || []
    // Add new post and save
    const updated = [newPost, ...savedPosts]
    localStorage.setItem('posts', JSON.stringify(updated))
    // Redirect to the new post page
    router.push(`/blog/${newPost.id}`)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="bg-gray-600 p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full  bg-gray-500 outline-0 p-2 rounded"
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Content:</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full border border-gray-300 outline-0 p-2 rounded h-40"
            placeholder="Enter post content"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
    </div>
  )
}
