import { Logo } from "../logo";

export function Header() {
  return (
    <header className="bg-manual-sage">
      <div className="container mx-auto p-4 relative">
        <h1 className="sr-only">Manual</h1>
        <Logo width={40} className="absolute left-4 top-4" />
      </div>
    </header>
  );
}
