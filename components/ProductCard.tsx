import { Product } from "../types/products.type";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ADD_TO_CART } from "../store/cart";
import data from "../data";
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch: Dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
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
      <button className="bg-blue-300 px-14 py-2 my-3" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}
