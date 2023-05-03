import Footer from "../Footer/Footer";
import "./Header.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import CreatePost from "../Post/CreatePost";
const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setEdit } = props;
  const [isOpenPost, setOpenPost] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };
  const user = useSelector((state) => state.user);

  return (
    <>
      <header
        style={{
          backgroundColor: `${user.theme}`,
          backgroundImage: `linear-gradient(180deg, ${user.theme} 2%, ${user.theme}, 65%, #3F8812 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img src={user.avt} alt="" className="info-ava" />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
      {isOpenPost && <CreatePost setOpenPost={setOpenPost} />}
      <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
    </>
  );
};

export default Header;
