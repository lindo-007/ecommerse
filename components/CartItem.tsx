import { Product } from "../types/products.type";
import Image from "next/image";
import AddToCart from "./AddToCart";
import data from "../data";
import Link from "next/link";

type CartItemProps = {
  product: Product;
};

export default function CartItem({ product }: CartItemProps) {
  return (
    <div className="flex  my-5 justify-between  ">
      <div className="cursor-pointer  flex items-center justify-center ">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product?.image}
            width={50}
            height={50}
            alt={`picture of ${product?.title}`}
          />
        </Link>
      </div>

      <div className="flex-1 ml-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="cursor-pointer text-xl text-blue-300">
            {product?.title}
          </h3>
        </Link>
        <p>
          {product.cartQuantity} {product?.cartQuantity! > 1 ? "Items" : "Item"}
        </p>
        <p>
          {data.currency}
          {product?.price}
        </p>
      </div>

      <div className="">
        <AddToCart type="TOGGLE" product={product} />
      </div>
    </div>
  );
}
