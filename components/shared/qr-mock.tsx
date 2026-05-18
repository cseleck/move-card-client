import { cn } from "@/lib/utils";

interface QRMockProps {
  className?: string;
  size?: number;
}

export function QRMock({ className, size = 200 }: QRMockProps) {
  const cells = 21;
  const data: boolean[][] = Array.from({ length: cells }, (_, r) =>
    Array.from({ length: cells }, (_, c) => {
      const seed = (r * 31 + c * 7 + r * c) % 7;
      return seed > 3;
    })
  );

  const isFinder = (r: number, c: number) => {
    const inBox = (rr: number, cc: number) =>
      rr >= 0 && rr <= 6 && cc >= 0 && cc <= 6;
    const inCenter = (rr: number, cc: number) =>
      rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4;
    const inRing = (rr: number, cc: number) =>
      inBox(rr, cc) && !inCenter(rr, cc) && (rr === 0 || rr === 6 || cc === 0 || cc === 6);

    return {
      tl: inBox(r, c),
      tlRing: inRing(r, c),
      tlCenter: inCenter(r, c),
      tr: inBox(r, c - (cells - 7)),
      trRing: inRing(r, c - (cells - 7)),
      trCenter: inCenter(r, c - (cells - 7)),
      bl: inBox(r - (cells - 7), c),
      blRing: inRing(r - (cells - 7), c),
      blCenter: inCenter(r - (cells - 7), c),
    };
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white p-4 shadow-inner border",
        className
      )}
      style={{ width: size, height: size }}
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cells}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${cells}, minmax(0, 1fr))`,
          gap: 1,
        }}
      >
        {data.map((row, r) =>
          row.map((on, c) => {
            const f = isFinder(r, c);
            const isAnyRing = f.tlRing || f.trRing || f.blRing;
            const isAnyCenter = f.tlCenter || f.trCenter || f.blCenter;
            const isAnyFinder = f.tl || f.tr || f.bl;
            const filled =
              isAnyRing || isAnyCenter || (!isAnyFinder && on);
            return (
              <div
                key={`${r}-${c}`}
                className={cn(
                  "transition-colors",
                  filled ? "bg-neutral-900" : "bg-transparent"
                )}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
