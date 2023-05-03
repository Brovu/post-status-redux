import "./App.css";
import Header from "./components/Header/Header";
import NewPosts from "./components/Post/NewPosts";
import Edit from "./components/Edit/Edit";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./components/Post/CreatePost.css";
function App() {
  const [isEdit, setEdit] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  return (
    <>
      <>
        {error ? (
          <h1 style={{ color: "red" }}>Bị lỗi khi fetch data rồi má ơi!!</h1>
        ) : loading ? (
          <h1>Chờ xíu...</h1>
        ) : isEdit ? (
          <Edit setEdit={setEdit} />
        ) : (
          <p>
            <Header setEdit={setEdit} />
            <div className="post-container">
              <NewPosts />
            </div>
          </p>
        )}
      </>
    </>
  );
}

export default App;
