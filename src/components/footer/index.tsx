import { Logo } from "../logo";

interface FooterProps {
  menus: {
    title: string;
    items: {
      name: string;
      url: string;
    }[];
  }[];
  social: {
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

export function Footer({ menus, social }: FooterProps) {
  return (
    <footer className="bg-manual-sage-light text-manual-teal">
      <div className="container px-4 mx-auto">
        <div className="py-9 md:py-[72px] flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <Logo width={75} />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-col md:flex-row gap-4">
              {menus?.map((menu) => (
                <div key={menu.title} className="min-w-[215px]">
                  <h3 className="font-bold text-[10px] leading-[15px] uppercase mb-[20px]">
                    {menu.title}
                  </h3>
                  <ul className="flex flex-col gap-[20px]">
                    {menu.items?.map((item) => (
                      <li key={item.name} className="text-base leading-[30px]">
                        <a
                          href={item.url}
                          className="text-base leading-[30px] block hover:text-manual-teal/80 transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="min-w-[175px]">
              <h3 className="font-bold text-[10px] leading-[15px] uppercase mb-[20px]">
                Follow us
              </h3>
              <ul className="flex gap-4 items-center">
                {social?.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      className="text-base leading-[30px] flex items-center gap-2 text-manual-red hover:text-manual-red/80 transition-colors"
                    >
                      {item.icon}
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-t-manual-teal-lighter">
          <p className="text-center text-manual-teal-light text-base leading-[30px] px-4 py-6 ">
            &copy; 2021 Manual. All rights reserverd
          </p>
        </div>
      </div>
    </footer>
  );
}
