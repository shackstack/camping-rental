import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getProducts, getProductDetail } from "../../apis/product";

export const useProducts = (params?: Parameters<typeof getProducts>[0]) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["products", params],
    queryFn: ({ pageParam }) => getProducts({ ...params, cursorIndex: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) return undefined;
      return lastPage[lastPage.length - 1].cursorIndex;
    },
  });
};

export const useProductDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetail(id),
  });
};
