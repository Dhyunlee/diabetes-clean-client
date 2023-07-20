import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useAPIByIdQuery = <TYPE = unknown>(
  queryParam: string,
  apiKey: string,
  apiFunc: (context: string | null) => Promise<any>
) => {
  return useQuery<TYPE | undefined, AxiosError>({
    queryKey: [apiKey, queryParam],
    queryFn: () => apiFunc(queryParam),
    enabled: !!queryParam
  });
};

export default useAPIByIdQuery;
