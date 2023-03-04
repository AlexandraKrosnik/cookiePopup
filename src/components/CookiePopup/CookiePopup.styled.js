import styled from 'styled-components';
import { Button, Drawer, Form } from 'antd';

export const DrawerStyled = styled(Drawer)`
  .ant-drawer-body {
    padding-top: 0;
  }
  .ant-drawer-header {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .ant-drawer-title {
    text-align: center;
    font-size: 20px;
  }
`;

export const CookiesText = styled.div`
  width: 500px;
  font-family: Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.5;
  word-break: normal;
  font-weight: 500;
  margin: 0 auto;

  & p {
    text-align: center;
  }
`;

export const FormStyled = styled(Form)`
  .ant-form {
    width: fit-content;
  }
  .ant-form-item {
    flex-direction: row-reverse;
    margin-bottom: 15px;
    & label::after {
      content: none;
    }
  }
  .ant-form-item-label {
    margin-left: 10px;
    font-size: 16px;
  }
`;
