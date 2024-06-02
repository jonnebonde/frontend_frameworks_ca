import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ContactContainer,
  Form,
  Input,
  Textarea,
  ErrorMessage,
  SubmitButton,
} from "./index.styles";

const ContactSchema = yup
  .object({
    Fullname: yup
      .string()
      .min(3, "You fullname must be atleast 3 characters.")
      .required("Please enter your fullname."),
    Subject: yup
      .string()
      .min(3, "The subject must be atleast 3 characters.")
      .required("Please enter the subject."),
    Email: yup
      .string()
      .email("The email address must be a valid address")
      .required("Please enter your email address."),
    Body: yup
      .string()
      .min(3, "The body must med atleast 3 characters ")
      .required("Please enter the body."),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("Form submitted successfully and data is logged to console.");
  }

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("Fullname")} placeholder="Fullname" />
        <ErrorMessage>{errors.Fullname?.message}</ErrorMessage>

        <Input {...register("Subject")} placeholder="Subject" />
        <ErrorMessage>{errors.Subject?.message}</ErrorMessage>

        <Input {...register("Email")} placeholder="Email" />
        <ErrorMessage>{errors.Email?.message}</ErrorMessage>

        <Textarea {...register("Body")} placeholder="Body" />
        <ErrorMessage>{errors.Body?.message}</ErrorMessage>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
