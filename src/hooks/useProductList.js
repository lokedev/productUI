import { useEffect, useState } from "react";

const PRODUCTS_API_URL = "https://api.mocki.io/v1/00be23ab";

const useProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    let componentUnmounted = false;

    const cancelFetch = () => {
      componentUnmounted = true;
    };

    const fetchProducts = async () => {
      const response = await fetch(PRODUCTS_API_URL);
      const jsonData = await response.json();
      !componentUnmounted && setProductList(jsonData.groups);
    };
    fetchProducts();
    return cancelFetch;
  }, []);
  return productList;
};

export default useProductList;
