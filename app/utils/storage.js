'use client';

export function getPosts() {
  const stored = localStorage.getItem('posts');
  return stored ? JSON.parse(stored) : [];
}

export function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}
