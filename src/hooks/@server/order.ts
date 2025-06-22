import { useSuspenseInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMyOrders, cancelOrder } from "../../apis/order";

export const useMyOrders = (params?: Parameters<typeof getMyOrders>[0]) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["myOrders", params],
    queryFn: ({ pageParam }) => getMyOrders({ ...params, cursorId: pageParam || undefined, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.responses.length === 0) return undefined;
      return lastPage.responses[lastPage.responses.length - 1].id;
    },
  });
};

export const useCancelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myOrders"] });
    },
  });
};
