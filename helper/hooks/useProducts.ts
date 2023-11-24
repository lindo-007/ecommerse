import useSWR from "swr";
import fetcher from "../API";

export default function useProducts(endpoint: string) {
  const rootURL = process.env.NEXT_PUBLIC_STORE_URL;
  
  const { data, error, isLoading } = useSWR(`${rootURL}${endpoint}`, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
