import { Block } from "@/components/block";
import { Hero } from "@/components/block/block.stories";
import { Footer } from "@/components/footer";
import { Default as FooterStory } from "@/components/footer/footer.stories";
import { List } from "@/components/list";
import { Default } from "@/components/list/list.stories";

export default function Home() {
  return (
    <>
      <Block {...Hero.args} />
      <List {...Default.args} />
      <Footer {...FooterStory.args} />
    </>
  );
}
