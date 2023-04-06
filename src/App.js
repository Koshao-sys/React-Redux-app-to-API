import { React, useEffect } from "react";
import ShowUsers from "./components/ShowUsers";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/users/usersSlice";

function App() {
  const { isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <ShowUsers />
  );
}

export default App;
