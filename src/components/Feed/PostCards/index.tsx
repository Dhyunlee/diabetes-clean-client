import Review from "components/Review";
import ContentsInfo from "components/Base/ContentsInfo";
import PostContent from "../PostContent";
import { FiMoreHorizontal } from "react-icons/fi";
import { Contour } from "../styles";
import { useState, useCallback} from "react";
import SubMenu from "../SubMenu";
import {
  PostCardContainer,
  PostCardWrap,
  PostBody,
  PostBodyBlock,
  PostHeader,
  PostHeaderBlock,
  ReviewBlock,
  Icons,
} from "./styles";

const fakePostData = [
  {
    id: 1,
    writer: {
      userName: "이동현",
      imgUrl: "https://avatars.githubusercontent.com/u/58792751?s=40&v=4",
    },
    imgUrl: "/images/fishing-boat-6273132_960_720.jpg",
    imgName: "fishing-boat",
    content: "바닷가에 휴식을 취해봐용 다들 !!",
  },
  {
    id: 2,
    writer: {
      userName: "JohnMabee",
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

const PostCards = () => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const onCloseMenu = useCallback(() => {
    setShowSubMenu(false);
  }, []);


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
                  link={`/profile/${writer.userName}`}
                />
                <Icons
                  onClick={() => {
                    setShowSubMenu((prev) => !prev);
                  }}
                >
                  <span>
                    <FiMoreHorizontal />
                  </span>
                </Icons>
                <SubMenu
                  setShowSubMenu={setShowSubMenu}
                  showSubMenu={showSubMenu}
                  onCloseMenu={onCloseMenu}
                />
              </PostHeaderBlock>
            </PostHeader>
            <PostBody>
              <PostBodyBlock className="nn">
                <PostContent
                  content={content}
                  imgName={imgName}
                  imgUrl={imgUrl}
                />
              </PostBodyBlock>
              <Contour />
              <ReviewBlock>
                <Review />
              </ReviewBlock>
            </PostBody>
          </PostCardWrap>
        ))
      ) : (
        <div>업로드한 포스팅이 없습니다.</div>
      )}
    </PostCardContainer>
  );
};

export default PostCards;
