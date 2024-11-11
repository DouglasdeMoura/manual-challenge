import { getFormById } from "@/api/form";
import { Block } from "@/components/block";
import { Hero } from "@/components/block/block.stories";
import { Footer } from "@/components/footer";
import { Default as FooterStory } from "@/components/footer/footer.stories";
import { Form } from "@/components/form";
import { Default as FormStory } from "@/components/form/form.stories";
import { Header } from "@/components/header";
import { List } from "@/components/list";
import { Default } from "@/components/list/list.stories";
import { Suspense } from "react";

export default async function Home() {
  const questions = await getFormById("972423");

  return (
    <>
      <Header />
      <Block {...Hero.args} />
      <List {...Default.args} />
      <Footer {...FooterStory.args} />
      <Suspense>
        <Form
          questions={questions}
          rejectedMessage={FormStory.args.rejectedMessage}
          successMessage={FormStory.args.successMessage}
        />
      </Suspense>
    </>
  );
}
