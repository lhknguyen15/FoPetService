"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ListOrdered, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { title: "Chọn dịch vụ", description: "Tìm combo phù hợp và để lại thông tin của bạn cùng bé." },
  { title: "Tư vấn & xác nhận", description: "FoPet trao đổi nhu cầu, mức giá và thời gian phù hợp trước buổi hẹn." },
  { title: "Đưa bé đến FoPet", description: "Mang bé đến theo lịch đã xác nhận và trao đổi thêm các lưu ý cần thiết." },
];

export function CareJourneyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="secondary" size="lg" className="mt-5" />}>
        <ListOrdered aria-hidden="true" className="size-4" /> Xem quy trình
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-foreground/35 backdrop-blur-sm" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-border bg-background p-5 outline-none sm:p-8">
          <div className="pr-12">
            <p className="section-eyebrow">QUY TRÌNH MINH HỌA</p>
            <Dialog.Title className="font-sans text-2xl font-bold leading-snug text-foreground">Một buổi hẹn, ba bước nhẹ nhàng.</Dialog.Title>
            <Dialog.Description className="mt-3 text-sm leading-6 text-muted-foreground">Tìm hiểu các bước dự kiến trước khi đặt lịch cho bé.</Dialog.Description>
          </div>
          <Dialog.Close render={<Button variant="ghost" size="icon-lg" className="absolute right-3 top-3 sm:right-5 sm:top-5" />} aria-label="Đóng quy trình">
            <X aria-hidden="true" className="size-5" />
          </Dialog.Close>
          <ol className="my-7 space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-primary">0{index + 1}</span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-6 text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Dialog.Close render={<Button size="lg" className="w-full sm:w-auto" />}>Đã hiểu</Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
