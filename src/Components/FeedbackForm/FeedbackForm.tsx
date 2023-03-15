import { useContext } from "react";
import { ToggleContext } from "../Context/Context";
import { Formik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import {
  WrapperFeedback,
  FormStyled,
  Input,
  Error,
  Textarea,
  ErrorText,
} from "./FeedbackForm.styled";
import { FeedbackSchema } from "./validation";

interface MyFormValues {
  name: string;
  email: string;
  message: string;
}
export const FeedbackForm: React.FC<{}> = () => {
  const { isModalOpen, toggleModalMode } = useContext(ToggleContext);

  const TOKEN = process.env.REACT_APP_TOKEN;

  const CHAT_ID = process.env.REACT_APP_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values: MyFormValues, actions: any) => {
    const { name, email, message } = values;
    const messageTg = `<b>New message resume</b>\n<b>Name: ${name}</b>\n<b>Email: ${email}</b>\n<pre>Message: ${message}</pre>`;

    try {
      await axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageTg,
      });
      actions.resetForm();
      toast.success(`${name}, your message has been delivered!`, {
        position: "top-center",
      });
      toggleModalMode(!isModalOpen);
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  return (
    <WrapperFeedback>
      <h2>Feedback</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {(Formik) => {
          return (
            <FormStyled>
              <label htmlFor="">
                <Input type="text" name="name" placeholder="Your name" />{" "}
                <Error name="name" component="p"></Error>
              </label>
              <label htmlFor="">
                <Input type="email" name="email" placeholder="Your email" />
                <Error name="email" component="p"></Error>
              </label>
              <label htmlFor="">
                <Textarea
                  type="email"
                  name="message"
                  placeholder="Please write your question here"
                  cols={30}
                  rows={30}
                  component="textarea"
                />
                <ErrorText name="message" component="p"></ErrorText>
              </label>

              <button type="submit">Submit</button>
            </FormStyled>
          );
        }}
      </Formik>
    </WrapperFeedback>
  );
};
