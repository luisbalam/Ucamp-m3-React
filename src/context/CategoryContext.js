import React, { useState } from 'react';

const CategoryContext = React.createContext();
const { Provider, Consumer } = CategoryContext;

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const saveCategories = (categories) => setCategories(categories);

  return (
    <Provider value={{ categories, saveCategories }}>
      {children}
    </Provider>
  )
}

export { CategoryProvider, Consumer as CategoryConsumer, CategoryContext }
