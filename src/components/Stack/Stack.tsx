"use client";
import { ComponentProps, useState } from "react";
import { StackCard } from "@/components/Stack/Card/StackCard";
import { v4 as uuid } from "uuid";
import { ChevronDown } from "@/components/svg/Chevron/ChevronDown";
import { ChevronUp } from "@/components/svg/Chevron/ChevronUp";

export type Card = {
  label: string;
  description?: string;
};

export type Stack = {
  stackName: string;
  cards: Card[];
};
export type StackProps = Stack & ComponentProps<"div">;
export const Stack = ({ stackName, cards }: StackProps) => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row items-center justify-items-center gap-3">
        <h3 className="text-2xl font-semibold mb-1">{stackName}</h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 self-center">
        {cards.map((card) => (
          <StackCard {...card} key={uuid()} />
        ))}
      </div>
    </section>
  );
};
