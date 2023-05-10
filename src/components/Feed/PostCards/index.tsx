import PostItem from "../PostItem";
import {
  PostCardContainer,
} from "./styles";
const fakePostData = [
  {
    id: '1',
    writer: {
      _id: '634ed1b8fb68dffc1428248f', 
      userName: "이동현",
      imgUrl: "https://avatars.githubusercontent.com/u/58792751?s=40&v=4",
    },
    imgUrl: "https://src.hidoc.co.kr/image/lib/2022/7/20/1658306424525_0.jpg",
    imgName: "fishing-boat",
    content: "바닷가에 휴식을 취해봐용 다들 !!",
  },
  {
    id: '2',
    writer: {
      _id: '634ed31e08f1cc2c6f34e8fa',
      userName: "mikes",
      imgUrl: "https://mui.com/static/images/avatar/1.jpg",
    },
    imgUrl:
      "https://health.chosun.com/site/data/img_dir/2019/08/30/2019083000046_0.jpg",
    imgName: "fishing-boat",
    content:
      "당뇨 수치를 관리하는게 요즘은 잘 되지않네 😂 그렇지만 최선을 다해서 관리에 임해야겠다.",
  },
  {
    id: '3',
    writer: {
      _id: '634ed31e08f1cc2c6f34e8fa',
      userName: "mikes",
      imgUrl: "https://mui.com/static/images/avatar/1.jpg",
    },
    imgUrl:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjZfNjAg%2FMDAxNjc3NDAwNTAxMjAw.m7omvmdH_5t-TrAklK6AB35ECSlNKuSMQ17zM1zoaCEg.E2e-yRJwYYKYsJOD4DQDOSFkCsQ3v_lnYIRIHpEZDsgg.JPEG.24cloudnine%2Frandom_4E3BC721-C84B-468E-917C-617ACEBF78BD.jpeg&type=ofullfill340_600_png",
    imgName: "fishing-boat",
    content:
      "여기 진짜 한번 놀려오세요!!",
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
  return (
    <PostCardContainer className="post">
      {fakePostData.length > 0 ? (
        fakePostData.map((postData) => (
          <PostItem key={postData.id} {...postData}/>
        ))
      ) : (
        <div>업로드한 포스팅이 없습니다.</div>
      )}
    </PostCardContainer>
  );
};

export default PostCards;
