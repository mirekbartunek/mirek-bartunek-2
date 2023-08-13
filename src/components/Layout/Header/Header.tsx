import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
  return (
    <header className="w-5/6 flex flex-row justify-between items-center mx-auto my-5">
      <p className="font-semibold">Mirek Bartuněk</p>
      <ThemeSwitcher />
    </header>
  );
};
