import PostCard from "../../components/postCard/PostCard";
import "./Content.css";

const Content = ({ value, inputValue }) => {
  const postData = Object.values(value);

  return (
    <>
      <div className="content">
        {postData
          .filter((post) => post.title.includes(inputValue))
          .map((post) => (
            <PostCard value={post} />
          ))}
      </div>
    </>
  );
};

export default Content;
