import Image from "next/image";
import { Product } from "../../types/products.type";
import AddToCart from "../../components/AddToCart";
import fetcher from "../../helper/API";
import data from "../../data";

type ParamType = {
  params: {
    id: string;
  };
};

type ProductProps = {
  product: Product;
};

function ProductPage({ product }: ProductProps) {
  return (
    <section className="w-11/12 flex flex-col justify-around md:flex-row md:items-center">
      <figure className="flex items-center justify-center my-5 md:flex-1">
        <Image
          src={product.image}
          width={200}
          height={285}
          alt={`Product image of ${product.title}`}
        />
      </figure>
      <figcaption className="md:flex-1 my-5 ">
        <h2 className="font-mont text-3xl text-blue-300 mb-3">
          {product.title}
        </h2>
        <p className="font-Agbalumo text-xl mb-3">{product.category}</p>
        <p className="font-mont text-justify mb-2">{product.description}</p>
        <p className="mb-2">
          {data.currency}
          {product.price}
        </p>
        <p className="mb-2 font-noto">
          {product.rating.rate} stars | {product.rating.count} reviews
        </p>
        <AddToCart type="TOGGLE" product={product}></AddToCart>
      </figcaption>
    </section>
  );
}

export default ProductPage;

export const getStaticPaths = async () => {
  const paths: ParamType[] = [];

  for (let i = 1; i <= data.numberOfProducts; i++) {
    paths.push({
      params: { id: `${i}` },
    });
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: ParamType) => {
  const { id } = params;

  const productURL = `${data.url.rooturl}${data.url.products}/${id}`;

  const product: Product = await fetcher(productURL);
  return { props: { product } };
};
