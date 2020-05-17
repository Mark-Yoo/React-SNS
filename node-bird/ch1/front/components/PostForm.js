import React from "react";
import { Form, Input, Button } from "antd";

function PostForm({ info }) {
  return (
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
        {info.imagePaths.map((v, i) => {
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
  );
}

export default PostForm;
