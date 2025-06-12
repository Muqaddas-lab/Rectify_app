import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 6))) //  6 posts
      .catch((err) => console.error('API Error:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>All Blog Posts</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogs.map((b) => (
          <li key={b.id} style={{ marginBottom: 10 }}>
            <button
              onClick={() => router.push(`/blog/${b.id}`)}
              style={{
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: 5,
                cursor: 'pointer',
              }}
            >
              View: {b.title.slice(0, 15)}...
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
