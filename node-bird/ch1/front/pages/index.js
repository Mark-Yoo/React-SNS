import React from "react";
import { Form, Input, Button, Card, Icon, Avatar } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPost: [
    {
      User: {
        id: 1,
        nickname: "Mark",
      },
      content: "처음 만드는 SNS",
    },
  ],
};
const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form encType="multipart/form-data">
          <Input.TextArea
            maxLength={140}
            placeholder="어떤 생각을 하고 계신가요?"
          />
          <div>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              트윗
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => {
              return (
                <div key={v} style={{ display: "inline-block" }}>
                  <img
                    src={"http://localhost:3065/" + v}
                    style={{ width: "200px" }}
                    alt={v}
                  />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
      {dummy.mainPost.map((c) => {
        return (
          <Card
            key={+c.createAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            ></Card.Meta>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
