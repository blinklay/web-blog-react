import styled from "styled-components";
import Icon from "../../Icon/Icon";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ gap }) => gap};
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <Row gap="8px">
        <Button width="100px">
          <Link to="/login">Войти</Link>
        </Button>
      </Row>
      <Row gap="10px">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon size="25px" id="fa-backward" />
        </button>
        <Link to="/post">
          <Icon size="38px" id="fa-file-text-o" />
        </Link>
        <Link to="/users">
          <Icon size="34px" id="fa-users" />
        </Link>
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
