import { Product } from "../types/products.type";
import Image from "next/image";
import Link from "next/link";
import data from "../data";
// import useCart from "../store/hooks/useCart";
// import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  // const { isInCart, items, cartIsfull } = useCart();
  // const [addButtonDisabled, setAddButtonDisabled] = useState(true);

  // useEffect(() => {
  //   setAddButtonDisabled(isInCart(product) || cartIsfull);
  // }, [product, isInCart, items, cartIsfull]);

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

      <AddToCart type={"ADD"} product={product} />
    </div>
  );
}
