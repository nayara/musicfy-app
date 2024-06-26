import { useQuery } from "react-query";
import { apiInstance } from "../../client";

export type TContentItem = {
  id: string;
  name: string;
  description: string;
  images: { url: string }[][];
};

type TContent = {
  totalCount: number;
  items: TContentItem[];
};

export type TSectionItem = {
  title: string;
  contents: TContent;
};

type TSection = {
  totalCount: number;
  items: TSectionItem[];
};

type TGetHome = {
  sections: TSection;
};

const getHome = async (): Promise<TGetHome> => {
  const path = `home`;

  return apiInstance.get(path).then(({ data }) => ({
    sections: data.sections,
  }));
};

const QUERY_NAME = "home";

export function useGetHome() {
  return useQuery({
    queryKey: [QUERY_NAME],
    queryFn: () => getHome(),
    onError: (error: { message: string }) =>
      console.error(`Something whent wrong: ${error.message}`),
    cacheTime: Infinity,
  });
}
