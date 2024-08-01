import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  ErrorMessageContainer,
  ContentContainer,
  StyledButton,
  StyledField,
  StyledForm,
} from "./styled";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const registerSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), "null"], "Passwords must match")
    .required("Confirm Password is required"),
});

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (values: {
    username: string;
    password: string;
    confirmPassword?: string;
  }) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  return (
    <Container>
      <ContentContainer>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <Formik
          initialValues={{ username: "", password: "", confirmPassword: "" }}
          validationSchema={isLogin ? loginSchema : registerSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <StyledForm>
              <StyledField type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component={ErrorMessageContainer} />
              <StyledField
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component={ErrorMessageContainer} />
              {!isLogin && (
                <>
                  <StyledField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component={ErrorMessageContainer}
                  />
                </>
              )}
              <StyledButton type="submit">
                {isLogin ? "Login" : "Register"}
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  );
};
