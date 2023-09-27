import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PostItem from "./PostItem";
import { IContentsResponse } from "models/db";
import { ErrprPostItemWrap, PostCardWrap } from "./styles";
import { QueryKey, useInfiniteQuery } from "@tanstack/react-query";
import { CONTENTS_KEY } from "constants/query_key";
import axios from "axios";

interface IProps {
  params: string;
  queryKey?: string;
  fetcher: (page: string, context: string) => Promise<IContentsResponse>;
}
const PostContext = ({ params, queryKey, fetcher }: IProps) => {
  const listSize = 10; //한 페이지에 보여질 게시글 수
  const { ref, inView } = useInView();

  const {
    data,
    error,
    isSuccess,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<IContentsResponse>({
    queryKey: [queryKey || CONTENTS_KEY],
    queryFn: ({ pageParam = 1 }) => fetcher(pageParam, params),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.contents.length === listSize
        ? allPages.length + 1
        : undefined;
    }
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);
  const renderContext = () => {
    if (isSuccess) {
      return data.pages.map((page) =>
        page.contents.map((post, idx) => {
          return page.contents?.length === idx + 1 ? (
            <PostCardWrap key={post._id} ref={ref}>
              <PostItem {...post} />
            </PostCardWrap>
          ) : (
            <PostCardWrap key={post._id}>
              <PostItem {...post} />
            </PostCardWrap>
          );
        })
      );
    } else {
      if (axios.isAxiosError(error)) {
        let errorMessage = "";
        if (error.response?.status === 403) {
          errorMessage = "좋아요한 게시글이 아직 없습니다.";
        }
        if (error.response?.status === 500) {
          errorMessage = "서버 에러, 잠시후 다시 시작해주세요";
        }
        return (
          <PostCardWrap>
            <ErrprPostItemWrap>{errorMessage}</ErrprPostItemWrap>
          </PostCardWrap>
        );
      }
    }
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {renderContext()}
      {isFetchingNextPage && (
        <h3 style={{ position: "fixed", top: 10, left: 10 }}>Loading...</h3>
      )}
    </>
  );
};

export default PostContext;
