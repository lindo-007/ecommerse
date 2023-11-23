import { FaShoppingCart } from "react-icons/fa";

export default function CartIcon({ numberOfItems }: { numberOfItems: number }) {
  return (
    <figure className="p-5 ">
      <div className="relative">
        {numberOfItems > 0 ? (
          <div className="flex justify-center items-center bg-red-600 rounded-full w-8 h-8  text-white p-3 text-2xl absolute bottom-7 left-7">
            {numberOfItems}
          </div>
        ) : (
          <div></div>
        )}
        <FaShoppingCart size={"2rem"} color="#0f172a" />
      </div>
    </figure>
  );
}
