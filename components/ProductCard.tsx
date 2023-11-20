import { Product } from "../types/products.type";
import Image from "next/image";
import Link from "next/link";
import data from "../data";
import useCart from "../store/hooks/useCart";
import { useEffect, useState } from "react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);
  const { addToCart, isInCart, items, cartIsfull } = useCart();

  useEffect(() => {
    setAddButtonDisabled(isInCart(product) || cartIsfull);
  }, [product, isInCart, items, cartIsfull]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="font-mont p-2 m-3 md:m-12 flex-auto flex flex-col items-center justify-center ">
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer ">
          <Image
            src={product.image}
            width={200}
            height={285}
            alt={`picture of ${product.title}`}
          />
          <p>{`${product.title.slice(0, 20)}...`}</p>
          <p>
            {data.currency}
            {Number(product.price).toFixed(2)}
          </p>
        </div>
      </Link>
      <button
        disabled={addButtonDisabled}
        className="bg-blue-300 px-14 py-2 my-3 disabled:opacity-25"
        onClick={handleAddToCart}
      >
        {cartIsfull ? "Cart Is Full":"Add To Cart"}
        
      </button>
    </div>
  );
}
