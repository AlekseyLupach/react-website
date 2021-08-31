import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SinginElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">cubbl</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Войдите в ваш аккаунт</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" />
            <FormButton type="submit">Продолжить</FormButton>
            <Text>Забыли пароль</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
