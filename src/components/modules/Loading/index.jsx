import { Alert, Spin } from "antd";

const Loading = () => (
  <Spin tip="Loading...">
    <Alert message="Loading..." description="Loading..." type="info" />
  </Spin>
);

export default Loading;
