import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PostItem from "./PostItem";
import { IContentsResponse } from "models/db";
import { PostCardWrap } from "./styles";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CONTENTS_KEY } from "constants/query_key";

interface IProps {
  params: string;
  fetcher: (page: string, context: string) => Promise<IContentsResponse>;
}
const PostContext = ({ params, fetcher }: IProps) => {
  const listSize = 10; //한 페이지에 보여질 게시글 수
  const { ref, inView } = useInView();

  const {
    data,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<IContentsResponse>({
    queryKey: [CONTENTS_KEY],
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

  console.log(data);
  const context =
    isSuccess &&
    data.pages.map((page) =>
      page.contents.map((post, idx) => {
        if (page.contents.length > 0) {
          if (page.contents?.length === idx + 1) {
            return (
              <PostCardWrap key={post._id} ref={ref}>
                <PostItem {...post} />
              </PostCardWrap>
            );
          }
          return (
            // 마지막 post
            <PostCardWrap key={post._id}>
              <PostItem {...post} />
            </PostCardWrap>
          );
        } else {
          <PostCardWrap key={post._id} ref={ref}>
            컨텐츠가 없습니다.
          </PostCardWrap>;
        }
      })
    );

  if (isError) {
    return <div>포스팅을 불러오는데 실패했습니다.</div>;
  }
  return (
    <>
      {context}
      {isFetchingNextPage && (
        <h3 style={{ position: "fixed", top: 10, left: 10 }}>Loading...</h3>
      )}
    </>
  );
};

export default PostContext;
