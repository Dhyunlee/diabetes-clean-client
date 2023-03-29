import {
  PostCardContainer,
  PostCardWrap,
  PostContents,
  PostContentsBlock,
  PostHeader,
  PostHeaderBlock,
  ReviewBlock,
} from "./styles";
import Review from "components/Review";
import { Contour } from "../Feed/styles";
import ContentsInfo from "components/Base/ContentsInfo";
import PostContent from "../PostContent";
const PostCards = () => {
  const fakePostData = [
    {
      id: 1,
      writer: {
        userName: "sugarclean1",
        imgUrl: "https://avatars.githubusercontent.com/u/58792751?s=40&v=4",
      },
      imgUrl: "/images/fishing-boat-6273132_960_720.jpg",
      imgName: "fishing-boat",
      content: "바닷가에 휴식을 취해봐용 다들 !!",
    },
    {
      id: 2,
      writer: {
        userName: "John mabee",
        imgUrl: "https://mui.com/static/images/avatar/1.jpg",
      },
      imgUrl:
        "https://health.chosun.com/site/data/img_dir/2019/08/30/2019083000046_0.jpg",
      imgName: "fishing-boat",
      content:
        "당뇨 수치를 관리하는게 요즘은 잘 되지않네 😂 그렇지만 최선을 다해서 관리에 임해야겠다.",
    },
  ];

  const fakeCommentData = [
    {
      ContentsId: 1,
      writer: {
        userName: "Nike129",
        imgUrl: "https://avatars.githubusercontent.com/u/58792751?s=40&v=4",
      },
      content: "당수치 잘 관리하셔야돼요! 응원합니다.",
    },
    {
      ContentsId: 2,
      writer: {
        userName: "Nike128",
        imgUrl: "https://mui.com/static/images/avatar/1.jpg",
      },
      content: "당수치 잘 관리하셔야돼요! 응원합니다.",
    },
  ];

  return (
    <PostCardContainer className="post">
      {fakePostData.length > 0 ? (
        fakePostData.map(({ id, writer, content, imgName, imgUrl }) => (
          <PostCardWrap key={id}>
            <PostHeader>
              <PostHeaderBlock>
                <ContentsInfo
                  userName={writer.userName}
                  imgUrl={writer.imgUrl}
                  link={"/mypage"}
                />
              </PostHeaderBlock>
            </PostHeader>
            <PostContents>
              <PostContentsBlock>
                <PostContent
                  content={content}
                  imgName={imgName}
                  imgUrl={imgUrl}
                />
              </PostContentsBlock>
              <Contour />
              <ReviewBlock>
                <Review />
              </ReviewBlock>
            </PostContents>
          </PostCardWrap>
        ))
      ) : (
        <div>업로드한 포스팅이 없습니다.</div>
      )}
    </PostCardContainer>
  );
};

export default PostCards;
