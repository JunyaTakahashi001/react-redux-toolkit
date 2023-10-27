import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './redux/counterSlice';
import { getUsers } from './redux/usersSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h2>User</h2>
      {loading && <p>Loading</p>}
      {error && <p>データ取得に失敗しました。</p>}
      {users && users.map((user, index) => <div key={index}>{user.name}</div>)}
    </div>
  );
}

export default App;