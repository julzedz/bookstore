import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategoryStatus } from '../redux/categories/categories';

function Categories() {
  const Category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkCategoryStatus());
  };
  return (
    <div>
      <input type="button" value="Check Status" onClick={handleCheckStatus} />
      <p>{Category.categories}</p>
    </div>
  );
}

export default Categories;
