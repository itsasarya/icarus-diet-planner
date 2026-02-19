import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Buffs } from "@/data/buffs";
import * as React from "react";

type Props = {
  tag: string;
  className?: string;
};

export default function TagBadge({ tag, className }: Props) {
  const names = React.useMemo(() => {
    try {
      return (
        Object.values(Buffs)
          .filter((b) => b.tag === tag)
          .map((b) => b.name)
          .join(", ") || tag
      );
    } catch (e) {
      return tag;
    }
  }, [tag]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={className}>
            <Badge variant="outline">{tag}</Badge>
          </span>
        </TooltipTrigger>
        <TooltipContent side="bottom">{names}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
