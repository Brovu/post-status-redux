import { useState } from "react";
import Input from "../InputFields/Input";
import "./CreatePost.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";

const CreatePost = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setOpenPost } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Add a title");
  const [descript, setDescipt] = useState("Add a desciption");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: descript,
      tags: selectedIndex,
    };
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        inputType="textarea"
        data={title}
        className="makepost-title"
        setData={setTitle}
        label="Title"
      />
      <Input
        inputType="textarea"
        data={descript}
        className="makepost-desc"
        setData={setDescipt}
        label="Desciptions"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              className={`${
                selectedIndex === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CreatePost;
