import usePosts from "../hooks/usePosts";

const PostList = () => {
  const { posts, loading, lastPostRef } = usePosts();

  return (
    <div>
      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return (
            <div ref={lastPostRef} key={post.id}>
              {post.title}
            </div>
          );
        }

        return <div key={post.id}>{post.title}</div>;
      })}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PostList;