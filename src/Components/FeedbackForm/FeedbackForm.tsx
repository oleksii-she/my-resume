import { WrapperFeedback, Form, Input } from "./FeedbackForm.styled";
export const FeedbackForm: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };
  return (
    <WrapperFeedback>
      <h2>Feedback</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your name" />

        <Input type="email" name="email" placeholder="Your email" />

        <textarea
          name="text"
          id=""
          cols={30}
          rows={30}
          placeholder="Please write your question here"
        ></textarea>
        <button>Submit</button>
      </Form>
    </WrapperFeedback>
  );
};
