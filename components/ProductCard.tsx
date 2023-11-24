import { Product } from "../types/products.type";
import Image from "next/image";
import Link from "next/link";
import data from "../data";
import AddToCart from "./AddToCart";
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className=" font-mont p-2 m-3 md:m-12 flex-auto flex flex-col items-center justify-center ">
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer w-36 ">
          <Image
            src={product.image}
            width={226}
            height={300}
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
