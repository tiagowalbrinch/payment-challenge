import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessageContainer = styled.div`
  color: red;
  margin-bottom: 10px;
`;

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
      <FormContainer>
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
      </FormContainer>
    </Container>
  );
};
