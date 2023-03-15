import * as yup from "yup";
const nameRegexp = /^([a-zA-Zа-яА-ЯёЁёЁЇїІіҐґЄє\s]+)$/;
const emailRegexp =
  /^([a-zA-Z0-9_.]+){1}([a-zA-Z0-9_\-.]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;
export const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegexp, "John")
    .min(2, "Name must be longer")
    .max(30, "Name should be shorter")
    .required("Name required"),
  email: yup
    .string()
    .matches(emailRegexp, "john@email.com")
    .min(6, "Email must be longer")
    .max(63, "Email should be shorter")
    .required("Email required"),
  message: yup
    .string()
    .min(8, "Message must be longer")
    .max(120, "Message should be shorter")
    .required("Message required"),
});
