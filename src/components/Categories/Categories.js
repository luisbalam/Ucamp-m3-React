import React, { useEffect, useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { getCategories } from "../../services/categories";

const Categories = () => {
  const { categories, saveCategories } = useContext(CategoryContext);
  const peticion = async () => {
    const resp = await getCategories();
    saveCategories(resp.detail);
  };
  useEffect(() => {
    peticion();
  }, []);

  return (
    <div>
      {categories.map((el, index) => (
        <React.Fragment key={index}>
          <br />
          <div>{JSON.stringify(el)}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Categories;
