import "./PostCard.css";

const PostCard = ({ value }) => {
  return (
    <>
      <div className="postCard">
        <img src={value.img} alt="img" />

        <div>
          <p className="tags">{value.tags}</p>
        </div>
        <div>
          <p className="title">{value.title}</p>
        </div>
        <div>
          <p className="autor">
            {value.autor}{" "}
            <span className="dateViews">
              {value.date} {value.views} Views
            </span>
          </p>
        </div>
        <div>
          <p className="text">{value.text}</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
