import { Button, Drawer, Form, Switch } from 'antd';
import { useState } from 'react';
import { DrawerStyled, CookiesText, FormStyled } from './CookiePopup.styled';
export const CookiePopup = () => {
  const [open, setOpen] = useState(true);

  const onClose = () => {};
  return (
    <DrawerStyled
      title="About cookies on this site"
      placement="bottom"
      height={250}
      onClose={onClose}
      open={open}
      closable={false}
    >
      <CookiesText>
        <p>
          Cookies help us deliver the best experience on our website. By using
          our website, you agree to the use of cookies
        </p>
        <FormStyled name="cookies">
          <Form.Item
            name="switchEssential"
            label="Essential cookies"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="switchAnalytics"
            label="Analytics cookies"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </FormStyled>
      </CookiesText>
    </DrawerStyled>
  );
};
