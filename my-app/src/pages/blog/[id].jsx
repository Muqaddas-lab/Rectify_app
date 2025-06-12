const BlogDetail = ({ post }) => {
  if (!post) return <h2>Blog not found</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error('Failed to fetch');

    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: {
        post: null,
      },
    };
  }
}

export default BlogDetail;
