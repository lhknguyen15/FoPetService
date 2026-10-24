"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClassName =
  "h-12 w-full rounded-2xl border border-[#e9dec8] bg-white px-4 text-sm text-[#5a3c20] outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-[#a99a7b]";

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-[#705a35]">
      {children}
    </label>
  );
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-[#e9dec8] bg-[#fbf7ed] p-5 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
          <PawPrint aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h3 className="font-heading text-xl font-bold text-[#5a3c20]">Thông tin đặt lịch</h3>
          <p className="mt-0.5 text-xs text-[#827052]">Các mục có dấu * là bắt buộc.</p>
        </div>
      </div>

      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="customer-name">Tên của bạn *</FieldLabel>
          <input id="customer-name" name="customerName" autoComplete="name" className={fieldClassName} placeholder="Ví dụ: Minh Anh" required />
        </div>
        <div>
          <FieldLabel htmlFor="customer-phone">Số điện thoại *</FieldLabel>
          <input id="customer-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={fieldClassName} placeholder="09xx xxx xxx" required />
        </div>
        <div>
          <FieldLabel htmlFor="pet-name">Tên bé *</FieldLabel>
          <input id="pet-name" name="petName" className={fieldClassName} placeholder="Ví dụ: Bông" required />
        </div>
        <div>
          <FieldLabel htmlFor="pet-type">Bé là *</FieldLabel>
          <select id="pet-type" name="petType" defaultValue="" className={fieldClassName} required>
            <option value="" disabled>Chọn loại thú cưng</option>
            <option value="dog">Chó</option>
            <option value="cat">Mèo</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="service">Combo quan tâm *</FieldLabel>
          <select id="service" name="service" defaultValue="" className={fieldClassName} required>
            <option value="" disabled>Chọn combo dịch vụ</option>
            <option value="bath">Combo Tắm Thơm</option>
            <option value="spa">Combo Spa Xinh</option>
            <option value="day-care">Combo Vui Cả Ngày</option>
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="preferred-date">Ngày mong muốn *</FieldLabel>
          <input id="preferred-date" name="preferredDate" type="date" className={fieldClassName} required />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="notes">Lưu ý cho FoPet</FieldLabel>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className={`${fieldClassName} h-auto min-h-24 resize-y py-3`}
            placeholder="Thói quen, cân nặng hoặc điều FoPet nên biết về bé..."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="h-12 w-full rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-none hover:bg-[#92702f] sm:w-auto">
          Gửi yêu cầu <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
        <p className="text-xs leading-5 text-[#827153]">FoPet sẽ liên hệ để xác nhận lịch.</p>
      </div>

      {submitted && (
        <p role="status" aria-live="polite" className="mt-5 flex items-start gap-2 rounded-2xl bg-secondary p-4 text-sm leading-6 text-[#70552c]">
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0" />
          Đây là form demo: thông tin đã được kiểm tra trên trình duyệt nhưng chưa gửi hay lưu lên hệ thống FoPet.
        </p>
      )}
    </form>
  );
}
