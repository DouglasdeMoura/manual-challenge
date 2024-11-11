interface BlockProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  callToAction?: React.ReactNode;
  image?: React.ReactNode;
}

export function Block({ title, description, callToAction, image }: BlockProps) {
  return (
    <section className="bg-manual-sage text-manual-teal">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row aspect-[1440/750]">
        <div className="w-full flex justify-center flex-col p-4">
          <header className="flex flex-col gap-5">
            {title ? (
              <h1 className="font-normal text-pretty text-6xl md:text-[90px] leading-none">
                {title}
              </h1>
            ) : null}
            {description ? (
              <p className="font-normal text-pretty text-lg leading-[30px]">
                {description}
              </p>
            ) : null}
          </header>
          {callToAction ? <div className="mt-4">{callToAction}</div> : null}
        </div>
        <div className="w-full relative">{image}</div>
      </div>
    </section>
  );
}
