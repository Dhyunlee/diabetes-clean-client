import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CONTENTS_KEY } from "constants/query_key";
import { IContentsResponse } from "models/db";
import { getUserContents } from "utils/apis/contents";

const useUserContentsQuery = (userId: string) => {
  return useQuery<IContentsResponse | undefined, AxiosError>({
    queryKey: [`${CONTENTS_KEY}/${userId}`],
    queryFn: () => getUserContents(userId),
    enabled: !!userId
  });
};

export default useUserContentsQuery;
