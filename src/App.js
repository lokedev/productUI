import React, { useState } from "react";
import ImageGalleryDialog from "./components/ImageGalleryDialog/ImageGalleryDialog";
import ProductList from "./components/ProductList/ProductList";
import useProductList from "./hooks/useProductList";

function App() {
  const products = useProductList();

  // For Dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelect = (product) => {
    setDialogOpen(true);
    setSelectedProduct(product);
  };

  return (
    <main className="mx-auto container px-2 mt-8">
      <h1 className="text-3xl mb-4 font-bold self-start px-2">Products</h1>
      <ImageGalleryDialog
        open={dialogOpen}
        product={selectedProduct}
        onClose={() => setDialogOpen(false)}
      />
      <ProductList onSelect={handleSelect} products={products} />
    </main>
  );
}

export default App;
