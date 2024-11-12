import { useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import { createStyles } from "antd-style";
import { HeartTwoTone } from "@ant-design/icons";
import "./App.css";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;
      font-size: 36px;
      padding: 30px 40px;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: radial-gradient(
          circle,
          rgba(238, 174, 202, 1) 0%,
          rgba(148, 187, 233, 1) 100%
        );
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { styles } = useStyle();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ConfigProvider
        button={{
          className: styles.linearGradientButton,
        }}
      >
        <Button
          type="primary"
          size="large"
          icon={<HeartTwoTone />}
          onClick={showModal}
        >
          click me babe
        </Button>
      </ConfigProvider>

      <Modal
        title="Watch this video"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <video width="100%" controls autoPlay>
          <source
            src="public/kevin.mp4" /* {`${process.env.PUBLIC_URL}/sample-video.mp4`} */
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
}

export default App;
