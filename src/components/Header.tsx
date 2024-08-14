import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-12 col-[1/3] row-[1/2] bg-[#FFFDB5]  border-b border-black/10">
      <Logo />
      <Counter />
    </header>
  );
}
