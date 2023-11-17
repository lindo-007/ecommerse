import { Product } from "../types/products.type";
import Image from "next/image";
import AddToCart from "./AddToCart";
import data from "../data";

type CartItemProps = {
  product: Product;
};

export default function CartItem({ product }: CartItemProps) {
  return (
    <div className="flex  my-5 justify-between  ">
      <div className="flex items-center justify-center ">
        <Image
          src={product?.image}
          width={50}
          height={50}
          alt={`picture of ${product?.title}`}
        />
      </div>
      <div className="flex-1 ml-5">
        <h3 className="text-xl text-blue-300">{product?.title}</h3>
        <p>{product.cartQuantity} {product.cartQuantity > 1 ? 'Items' : 'Item'}</p>
        <p>{data.currency}{product?.price}</p>
      </div>

      <div className="">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
