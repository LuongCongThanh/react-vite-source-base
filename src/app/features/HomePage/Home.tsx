import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { decreaseValueHome, increaseValueHome } from '@features/HomePage/middleware/home.action';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);
  const [addBlog, setAddBlog] = useState<number>(1);

  const handleIncrease = () => {
    dispatch(increaseValueHome(addBlog));
  };

  const handleDecrease = () => {
    dispatch(decreaseValueHome(addBlog));
  };

  useEffect(() => {
    setAddBlog(2);
  }, [addBlog]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>value: {value}</p>
    </div>
  );
};

export default Home;
