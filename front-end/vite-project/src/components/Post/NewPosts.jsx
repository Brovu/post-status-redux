import { useSelector } from "react-redux";
import "./CreatePost.css";

const NewPosts = () => {
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const posts = useSelector((state) => state.post.posts);
  return (
    <>
      <section className="post-container">
        {posts.slice(1).map((post, index) => {
          return (
            <div className="posts" key={index}>
              <p className="posts-title">{post.title}</p>
              <p className={`posts-tags-${tags[post.tags]} posts-tags`}>
                {tags[post.tags]}
              </p>
              <p className="posts-description">{post.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default NewPosts;
