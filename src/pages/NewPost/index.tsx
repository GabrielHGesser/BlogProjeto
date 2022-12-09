import { Button, ContentContainer, Form, TitleContainer } from "./styles";
import { NewPostContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../axios/config";

const searchFormSchema = z.object({
  title: z.string(),
  body: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    const { title, body } = data;

    try {
      const response = await api.post("/posts", {
        title,
        body,
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <NewPostContainer>
      <h1>Create new post</h1>

      <Form onSubmit={handleSubmit(handleSearchTransactions)}>
        <TitleContainer>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...register("title")} />
        </TitleContainer>
        <ContentContainer>
          <label htmlFor="Content">Content</label>
          <textarea id="Content" {...register("body")}></textarea>
        </ContentContainer>
        <Button disabled={isSubmitting}> CREATE POST</Button>
      </Form>
    </NewPostContainer>
  );
}
