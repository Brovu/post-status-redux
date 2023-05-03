import { updateLoading, updateSuccess, updateError } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateLoading());
  try {
    const res = await axios.post("http://localhost:8000/v/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    console.error(err);
    dispatch(updateError());
  }
};
