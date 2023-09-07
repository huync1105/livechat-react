import "./ShowAppMessageWidget.scss";
import {
  SearchOutlined,
  PhoneFilled,
  LayoutOutlined,
  MoreOutlined,
  FileAddOutlined,
  SmileOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";

export default function ShowAppMessageWidget(props: any) {

  return (
    <>
      <nav className="appMessage__nav">
        <div className="appMessage__nav--userInfo">
          <h3>My name</h3>
          <p>Last seen recently</p>
        </div>
        <div className="appMessage__nav--btnContainer">
          <Button
            shape="circle"
            icon={<SearchOutlined style={{ fontSize: "1.25em" }} />}
          />
          <Button
            shape="circle"
            icon={<PhoneFilled style={{ fontSize: "1.25em" }} />}
          />
          <Button
            shape="circle"
            icon={<LayoutOutlined style={{ fontSize: "1.25em" }} />}
            onClick={props.openLayout}
          />
          <Button
            shape="circle"
            icon={<MoreOutlined style={{ fontSize: "1.25em" }} />}
          />
        </div>
      </nav>

      <main className="appMessage__content">
        <div className="appMessage__content--messages"></div>
        <div className="appMessage__content--chatBox">
          <Space.Compact style={{ width: "100%" }}>
            <Button
              icon={<FileAddOutlined style={{ fontSize: "1.5em" }} />}
            ></Button>
            <Input placeholder="Chat here..." />
            <Button
              icon={<SmileOutlined style={{ fontSize: "1.5em" }} />}
            ></Button>
            <Button
              icon={<SendOutlined style={{ fontSize: "1.5em" }} />}
            ></Button>
          </Space.Compact>
        </div>
      </main>
    </>
  );
}
