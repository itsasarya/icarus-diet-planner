import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Check, Copy, Download, Share } from "lucide-react";
import { toast } from "sonner";
import type { Food } from "@/types/food";
import type { SavedDiet } from "@/types/diet";
import { Buffs } from "@/data/buffs";
import type { BuffId } from "@/types/buff";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type Props = {
    diet: SavedDiet;
    catalogById: Map<string, Food>;
};

function displayFood(food: Food, catalogById: Map<string, Food>): Food {
    return catalogById.get(food.id) ?? food;
}

export default function DietShareSnapshot({ diet, catalogById }: Props) {
    const snapshotRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [generating, setGenerating] = useState(false);
    const [copied, setCopied] = useState(false);

    const selectedFoods = diet.foods.map((food) => displayFood(food, catalogById));
    const buffTotals = new Map<BuffId, number>();
    for (const food of selectedFoods) {
        for (const buff of food.buffs ?? []) {
            buffTotals.set(buff.id, (buffTotals.get(buff.id) ?? 0) + buff.value);
        }
    }
    const summary = [...buffTotals.entries()]
        .filter(([, value]) => value !== 0)
        .sort(([left], [right]) => Buffs[left].name.localeCompare(Buffs[right].name));

    async function openSnapshot() {
        setImageUrl(null);
        setOpen(true);
        setGenerating(true);
        try {
            await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
            await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
            if (!snapshotRef.current) throw new Error("Snapshot is not ready");
            await Promise.all(
                Array.from(snapshotRef.current.querySelectorAll("img")).map((image) =>
                    image.decode().catch(() => undefined),
                ),
            );
            const url = await toPng(snapshotRef.current, {
                pixelRatio: 2,
                cacheBust: true,
            });
            setImageUrl(url);
        } catch {
            toast.error("Could not create diet image");
        } finally {
            setGenerating(false);
        }
    }

    function downloadSnapshot() {
        if (!imageUrl) return;
        const link = document.createElement("a");
        link.download = `${diet.name.trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "icarus-diet"}.png`;
        link.href = imageUrl;
        link.click();
    }

    async function copySnapshot() {
        if (!imageUrl) return;
        try {
            if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
                throw new Error("Image clipboard is not supported in this browser");
            }
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
            ]);
            setCopied(true);
            toast.success("Image copied");
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            toast.error("Could not copy image. Use Download PNG.");
        }
    }

    return (
        <>
            <Button
                size="icon"
                variant="secondary"
                aria-label={`Share ${diet.name} as an image`}
                title="Share diet snapshot image"
                disabled={generating}
                onClick={() => void openSnapshot()}
            >
                {generating ? <span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : <Share />}
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Share diet snapshot</DialogTitle>
                        <DialogDescription>
                            Preview the image before sharing or downloading it.
                        </DialogDescription>
                    </DialogHeader>
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={`Snapshot of ${diet.name}`}
                            className="mx-auto max-h-[58svh] max-w-full rounded-md border object-contain"
                        />
                    ) : (
                        <div
                            ref={snapshotRef}
                            className="mx-auto w-full max-w-190 bg-background p-6 text-foreground sm:p-10"
                        >
                            <div className="border border-border bg-card p-7 text-card-foreground">
                                <div className="text-sm font-bold uppercase text-primary">
                                    Icarus Food Planner
                                </div>
                                <h1 className="mb-1 mt-3 text-3xl font-semibold leading-tight">{diet.name}</h1>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    {selectedFoods.length} foods · {diet.tags?.join(" · ") || "Diet snapshot"}
                                </p>
                                <div className="grid gap-3">
                                    {selectedFoods.map((food) => (
                                        <div key={food.id} className="flex items-center gap-3 border-t border-border pt-3">
                                            {food.image && <img src={food.image} alt="" width={56} height={56} className="size-14 shrink-0 bg-muted object-contain" />}
                                            <div>
                                                <div className="font-semibold">{food.name}</div>
                                                <div className="mt-1 text-xs text-muted-foreground">
                                                    {(food.buffs ?? []).map((buff) => {
                                                        const definition = Buffs[buff.id];
                                                        return `${buff.value > 0 ? "+" : ""}${buff.value}${definition?.buffUnit === "percent" ? "%" : ""} ${definition?.name ?? buff.id}`;
                                                    }).join("  ·  ") || "Food effect"}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {summary.length > 0 && (
                                    <div className="mt-6 border-t-2 border-border pt-4">
                                        <div className="mb-2 text-xs font-bold uppercase text-primary">Combined buffs</div>
                                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                                            {summary.map(([id, value]) => {
                                                const definition = Buffs[id];
                                                return (
                                                    <div key={id} className="flex justify-between gap-2 text-sm">
                                                        <span>{definition.name}</span>
                                                        <strong>{value > 0 ? "+" : ""}{value}{definition.buffUnit === "percent" ? "%" : ""}</strong>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                <div className="mt-6 text-xs text-muted-foreground">icarus.wiki.gg · Community food planner</div>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button variant="outline" onClick={downloadSnapshot} disabled={!imageUrl}>
                            <Download /> Download PNG
                        </Button>
                        <Button onClick={() => void copySnapshot()} disabled={!imageUrl}>
                            {copied ? <Check /> : <Copy />}
                            {copied ? "Copied" : "Copy"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    );
}