interface ListProps {
  title: React.ReactNode;
  items: {
    title: string;
    description: string;
    topic: string;
    image: React.ReactNode;
  }[];
}

export function List({ items, title }: ListProps) {
  return (
    <section className="text-manual-teal">
      <div className="container mx-auto">
        <h2 className="text-normal text-[40px] leading-[60px] text-pretty text-center my-[70px]">
          {title}
        </h2>

        {items.map((item, index) => (
          <article
            key={item.title}
            data-direction={index % 2 === 0 ? "normal" : "reverse"}
            className="group relative flex flex-col gap-4 mx-auto max-w-4xl md:flex-row md:data-[direction=reverse]:flex-row-reverse py-[45px] md:py-[90px]"
          >
            <p className="hidden absolute w-[450px] h-[450px] m-auto left-0 right-0 top-0 bottom-0 -z-10 md:flex items-center justify-center">
              <span className="sr-only">Item</span>
              <span className="text-[450px] text-manual-gray-100 group-data-[direction=reverse]:mr-[50%] group-data-[direction=normal]:ml-[50%]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </p>
            <div className="w-full">
              <div className="relative aspect-[370/445] md:max-h-[445px] mx-auto md:group-data-[direction=reverse]:mr-0 md:group-data-[direction=normal]:ml-0">
                {item.image}
              </div>
            </div>
            <div className="flex flex-col justify-center w-full max-w-[360px] mx-auto">
              <p className="uppercase text-[10px] leading-[15px] text-manual-teal-light mb-[10px]">
                {item.topic}
              </p>
              <h3 className="text-[28px] leading-[40px] mb-[22px]">
                {item.title}
              </h3>
              <p className="text-[18px] leading-[30px]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
