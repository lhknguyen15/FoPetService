"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, Bath, Heart, Pause, Play, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  { category: "Chăm sóc", title: "Chuẩn bị gì trước buổi spa đầu tiên của bé?", description: "Một vài bước nhỏ giúp bé làm quen với việc tắm và chăm sóc lông.", icon: Bath },
  { category: "Góc của mèo", title: "Chọn đồ chơi giúp mèo vận động mỗi ngày", description: "Gợi ý hoạt động vui chơi phù hợp với tính cách của từng bé mèo.", icon: Sparkles },
  { category: "Mẹo hay", title: "Chải lông đúng cách để bộ lông luôn khỏe", description: "Chọn lược và tần suất chải phù hợp với độ dài lông của thú cưng.", icon: Scissors },
  { category: "Sức khỏe", title: "Đưa bé đi khám định kỳ nhẹ nhàng hơn", description: "Những món đồ quen thuộc có thể giúp bé an tâm khi ra ngoài.", icon: Heart },
];

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export function NewsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
  const autoplay = playing && !reducedMotion && !hovered && !focused;

  const move = useCallback((direction: number) => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.firstElementChild as HTMLElement | null;
    if (!viewport || !firstCard) return;
    const step = firstCard.offsetWidth + 20;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const maxIndex = Math.ceil(maxScroll / step);
    const current = Math.round(viewport.scrollLeft / step);
    const next = (current + direction + maxIndex + 1) % (maxIndex + 1);
    viewport.scrollTo({ left: Math.min(next * step, maxScroll), behavior: reducedMotion ? "auto" : "smooth" });
  }, [reducedMotion]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) move(1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [autoplay, move]);

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    setPlaying(false);
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      move(event.key === "ArrowRight" ? 1 : -1);
    } else {
      const viewport = viewportRef.current;
      viewport?.scrollTo({ left: event.key === "Home" ? 0 : viewport.scrollWidth, behavior: reducedMotion ? "auto" : "smooth" });
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Tin tức và mẹo chăm sóc thú cưng"
      data-autoplay={autoplay ? "running" : "paused"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p id="news-instructions" className="max-w-lg text-sm leading-6 text-muted-foreground">{reducedMotion ? "Tự động chuyển đã tắt theo cài đặt giảm chuyển động." : "Tự chuyển mỗi 5 giây; dừng khi rê chuột hoặc thao tác."} Vuốt ngang hoặc dùng phím mũi tên để xem thêm.</p>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" size="lg" disabled={reducedMotion} aria-label={playing && !reducedMotion ? "Dừng tự động chuyển tin" : "Bật tự động chuyển tin"} aria-controls="news-viewport" onClick={() => setPlaying((value) => !value)} className="h-11 px-4">
            {playing && !reducedMotion ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            {playing && !reducedMotion ? "Dừng" : "Chạy"}
          </Button>
          <Button type="button" variant="secondary" size="icon-lg" aria-label="Tin trước" aria-controls="news-viewport" onClick={() => { setPlaying(false); move(-1); }}><ArrowLeft aria-hidden="true" /></Button>
          <Button type="button" variant="secondary" size="icon-lg" aria-label="Tin tiếp theo" aria-controls="news-viewport" onClick={() => { setPlaying(false); move(1); }}><ArrowRight aria-hidden="true" /></Button>
        </div>
      </div>
      <div
        id="news-viewport"
        ref={viewportRef}
        tabIndex={0}
        role="group"
        aria-label="Danh sách tin tức, dùng phím trái phải để chuyển"
        aria-describedby="news-instructions"
        className="news-viewport relative flex gap-5 overflow-x-auto rounded-3xl pb-3 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        onKeyDown={handleKey}
        onPointerDown={() => setPlaying(false)}
        onScroll={() => {
          const viewport = viewportRef.current;
          const firstCard = viewport?.firstElementChild as HTMLElement | null;
          if (viewport && firstCard) setActiveIndex(Math.round(viewport.scrollLeft / (firstCard.offsetWidth + 20)));
        }}
      >
        {newsItems.map(({ icon: Icon, ...article }, index) => (
          <article key={article.title} role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${newsItems.length}`} className="news-card flex flex-col overflow-hidden rounded-3xl border border-border bg-background">
            <div className="flex h-28 shrink-0 items-center justify-center bg-accent/60 text-primary"><span className="grid size-16 place-items-center rounded-full bg-background"><Icon aria-hidden="true" className="size-8" strokeWidth={1.7} /></span></div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-extrabold uppercase tracking-wide text-primary">{article.category}</p>
              <h3 className="mt-2 font-heading text-lg leading-snug text-foreground">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p>
              <p className="mt-auto pt-4 text-xs text-muted-foreground">Bài viết minh họa</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-right text-xs font-semibold tabular-nums text-muted-foreground" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">Vị trí {activeIndex + 1} / {newsItems.length}</p>
    </div>
  );
}
