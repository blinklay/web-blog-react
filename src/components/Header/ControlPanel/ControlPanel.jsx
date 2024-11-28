import styled from "styled-components";
import Icon from "../../Icon/Icon";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ gap }) => gap};
`;

const Button = styled.button`
  font-size: 18px;
  width: 100px;
  background-color: #ccc;
  padding: 5px;
`;

const ControlPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <Row gap="8px">
        <Button>Войти</Button>
      </Row>
      <Row gap="10px">
        <button>
          <Icon size="25px" id="fa-backward" />
        </button>
        <button>
          <Icon size="38px" id="fa-file-text-o" />
        </button>
        <button>
          <Icon size="34px" id="fa-users" />
        </button>
      </Row>
    </div>
  );
};
const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default ControlPanel;
