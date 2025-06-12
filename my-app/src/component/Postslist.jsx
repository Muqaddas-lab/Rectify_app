// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts } from '../redux/slices/postsSlice';

// function PostsList() {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.posts);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchPosts());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Posts</h2>
//       {items.map((post) => (
//         <div key={post.id}>
//           <h4>{post.title}</h4>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostsList;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';

function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-blue-500">Loading...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">📚 Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h4>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsList;
