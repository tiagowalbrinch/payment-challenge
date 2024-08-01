import { Field, Form } from "formik";
import styled from "styled-components";
import { Flex, FlexColumn } from "../../components";

export const Container = styled(Flex)`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.pink};
`;

export const ContentContainer = styled(FlexColumn)`
  @media ${(props) => props.theme.breakpoints.md} {
    width: 800px;
  }
  width: 360px;
  height: 80vh;
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddings[2]};
  border-radius: ${(props) => props.theme.borderRadius[1]};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.pink};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.indigo};
  }
`;

export const ErrorMessageContainer = styled.div`
  color: red;
  margin-bottom: 10px;
`;
