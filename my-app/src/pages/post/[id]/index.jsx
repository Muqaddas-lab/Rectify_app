// import { useParams } from "next/navigation";

// const params=useParams()
// console.log(params)
// // // {id}=params



// import React from 'react'

// function PostDetail() {
//   return (
//     <div>
//       tesry
//     </div>
//   )
// }

// export default PostDetail

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
