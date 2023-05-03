import "./Edit.css";
import nganImg from "../../assets/ngan.jpg";
import roy2Img from "../../assets/roy2.jpg";
import thieuNangImg from "../../assets/thieunang.jpg";
import tinNgoImg from "../../assets/tinngo.png";
import { useState } from "react";
import Input from "../InputFields/Input";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/apiRequest";
const Edit = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setEdit } = props;
  const imgUrl = [nganImg, roy2Img, tinNgoImg, thieuNangImg];
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState();
  const [theme, setTheme] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avt: img,
      theme: theme,
    };
    updateUser(updatedUser, dispatch);
  };
  const handleBack = () => {
    setEdit(false);
  };
  return (
    <>
      <form>
        <div className="edit-container">
          <div className="edit-btn">
            <button className="back" onClick={handleBack}>
              Back
            </button>
            <button className="save" onClick={handleSave}>
              Save
            </button>
          </div>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="User name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />

            <Input
              label="About"
              data={user.about}
              setData={setAbout}
              inputType="textarea"
              className="input-about"
            />
            <label>Profile Picture</label>
            <div className="input-image-container">
              {imgUrl.map((url) => {
                return (
                  <>
                    <img
                      onClick={(e) => setImg(e.target.src)}
                      src={url}
                      alt=""
                      className="input-image"
                    />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme </label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Edit;
