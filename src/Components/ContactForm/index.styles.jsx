import styled from "styled-components";
import { Button } from "../Products/ProductDetails/index.styles";

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  background-color: var(--color-secondary);

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ddd;

  font-size: 16px;
`;

export const Textarea = styled.textarea`
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  max-height: 200px;
  resize: vertical;
`;

export const ErrorMessage = styled.p`
  background-color: var(--color-white);
  color: var(--color-danger);
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`;
