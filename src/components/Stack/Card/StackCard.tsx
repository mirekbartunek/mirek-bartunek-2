import { Card } from "@/components/Stack/Stack";

type StackCardProps = Card;
export const StackCard = ({ label, description }: StackCardProps) => {
  return (
    <div className="flex flex-col items-center bg-zinc-300 dark:bg-zinc-900 font-mono rounded-lg p-3 sm:h-52 sm:w-52">
      <div className="m-auto">
        <h4 className="text-xl text-center">{label}</h4>
        {description ? <p className="text-sm">{description}</p> : null}
      </div>
    </div>
  );
};
