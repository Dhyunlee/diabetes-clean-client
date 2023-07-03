import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { DIABETES_KEY } from "constants/query_key";
import { IDiabetesResponse } from "models/db";
import { getDiabetes, getDiabetesFindById } from "utils/apis/diabetesApis";

export const useDiabetesQuery = (userId: string) => {
  return useQuery<IDiabetesResponse | undefined, AxiosError>({
    queryKey: [DIABETES_KEY, userId],
    queryFn: () => getDiabetes(userId),
    enabled: !!userId
  });
};

export const useDiabetesDetail = (id: string) => {
  return useQuery({
    queryKey: [`${DIABETES_KEY}/${id}`, id],
    queryFn: () => getDiabetesFindById(id),
    enabled: !!id
  });
};
