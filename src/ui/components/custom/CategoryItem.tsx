"use client";

import Link from "next/link";
import { cn } from "~/lib/cn";
import { Card } from "~/ui/primitives/card";
import { Skeleton } from "~/ui/primitives/skeleton";
import { type LucideIcon } from "lucide-react";

interface CategoryItemProps {
  name: string;
  icon?: LucideIcon;
  isActive?: boolean;
  isPending?: boolean;
}

export function CategoryItem({
  name,
  icon: Icon,
  isActive,
  isPending,
}: CategoryItemProps) {
  if (isPending) {
    return <Skeleton className="h-12 w-full rounded-xl" />;
  }

  return (
    <Link href={`/products?category=${name}`} className="block">
      <Card
        className={cn(
          "group flex items-center gap-3 rounded-xl border bg-background/50 p-4 shadow-sm transition-all hover:shadow-md hover:bg-accent/30",
          "dark:hover:bg-accent/20",
          isActive
            ? "border-primary bg-primary/5 text-primary"
            : "border-muted-foreground/20 text-muted-foreground hover:text-foreground"
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              "h-5 w-5 flex-shrink-0 transition-colors group-hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          />
        )}
        <span
          className={cn(
            "font-medium tracking-tight transition-colors",
            "group-hover:text-primary",
            isActive && "text-primary"
          )}
        >
          {name}
        </span>
      </Card>
    </Link>
  );
}
