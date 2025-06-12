import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (dynamic) => {
    router.push(`/post/${dynamic}`);

  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
  <h1 className="text-2xl font-bold mb-4">Posts</h1>
  <ul className="space-y-3">
    {posts.map((post) => (
      <li
        key={post.id}
        className="p-4 bg-gray-100 rounded shadow"
      >
        <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
        <p className="mb-2">{post.body}</p>
        <button
          onClick={() => handleChange(post.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          View Post
        </button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default PostPage;








// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const PostPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch posts:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">All Posts</h1>
//       <ul className="space-y-4">
//         {posts.map((post) => (
//           <li key={post.id} className="p-4 bg-gray-100 shadow rounded">
//             <p className="mb-2 font-semibold">Post #{post.id}</p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={() => router.push(`/post/${post.id}`)}
//             >
//               View Details
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostPage;
