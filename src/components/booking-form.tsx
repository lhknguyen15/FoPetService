"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking-provider";
import { isServiceId, servicePackages } from "@/lib/services";
import {
  bookingFieldIds,
  getLocalDate,
  isValidBookingDate,
  isValidPhone,
  type BookingErrors,
  type BookingField,
} from "@/lib/booking-validation";

const fieldClassName =
  "h-12 w-full rounded-2xl border border-border bg-card px-4 text-base text-foreground outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-muted-foreground aria-invalid:border-destructive";

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-secondary-foreground">
      {children}
    </label>
  );
}

export function BookingForm() {
  const { serviceId, selectService, demoSubmitted, setDemoSubmitted } = useBooking();
  const [errors, setErrors] = useState<BookingErrors>({});
  const [minimumDate, setMinimumDate] = useState("");
  const selectedService = servicePackages.find((service) => service.id === serviceId);
  const visibleErrors = { ...errors, service: serviceId ? undefined : errors.service };

  function fieldAccessibility(field: BookingField) {
    return {
      "aria-invalid": Boolean(visibleErrors[field]),
      "aria-describedby": visibleErrors[field] ? `${bookingFieldIds[field]}-error` : undefined,
    };
  }

  function fieldError(field: BookingField) {
    return visibleErrors[field] ? (
      <p id={`${bookingFieldIds[field]}-error`} className="mt-2 text-xs leading-5 text-destructive">
        {visibleErrors[field]}
      </p>
    ) : null;
  }

  function handleChange(event: FormEvent<HTMLFormElement>) {
    setDemoSubmitted(false);
    const { name } = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (Object.hasOwn(bookingFieldIds, name)) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDemoSubmitted(false);
    const formData = new FormData(event.currentTarget);
    const value = (field: BookingField) => String(formData.get(field) ?? "").trim();
    const nextErrors: BookingErrors = {};

    if (!value("customerName")) nextErrors.customerName = "Bạn cho FoPet biết tên để tiện xưng hô nhé.";
    if (!isValidPhone(value("phone"))) nextErrors.phone = "Nhập số di động Việt Nam gồm 10 số, hoặc bắt đầu bằng +84.";
    if (!value("petName")) nextErrors.petName = "Bạn điền tên của bé nhé.";
    if (!["dog", "cat", "other"].includes(value("petType"))) nextErrors.petType = "Bạn chọn loại thú cưng nhé.";
    if (!isServiceId(value("service"))) nextErrors.service = "Bạn chọn một combo để FoPet tư vấn nhé.";
    if (!isValidBookingDate(value("preferredDate"))) nextErrors.preferredDate = "Chọn ngày hợp lệ từ hôm nay trở đi.";

    setMinimumDate(getLocalDate());
    setErrors(nextErrors);
    const firstError = (Object.keys(nextErrors) as BookingField[])[0];
    if (firstError) {
      requestAnimationFrame(() => document.getElementById(bookingFieldIds[firstError])?.focus());
      return;
    }

    setDemoSubmitted(true);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
      aria-labelledby="booking-form-title"
      aria-describedby="booking-demo-note"
      className="min-w-0 rounded-[1.75rem] border border-border bg-card p-5 sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
          <PawPrint aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h3 id="booking-form-title" tabIndex={-1} className="rounded-sm font-heading text-xl font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Thông tin đặt lịch</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Các mục có dấu * là bắt buộc.</p>
        </div>
      </div>

      <p id="booking-demo-note" className="mb-5 rounded-2xl bg-secondary px-4 py-3 text-sm leading-6 text-secondary-foreground">
        <strong>Bản dùng thử:</strong> form giúp bạn trải nghiệm đặt lịch. Thông tin chưa được gửi hoặc lưu và chưa tạo lịch hẹn.
      </p>

      <div aria-live="polite" aria-atomic="true" className="mb-6">
        {selectedService ? (
          <div className="rounded-2xl border border-primary/20 bg-background p-4">
            <p className="text-xs font-semibold text-muted-foreground">Combo bạn đang chọn</p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold text-foreground">{selectedService.name}</p>
              <p className="text-sm font-bold text-primary">Từ {selectedService.price}</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{selectedService.detail}. Giá mẫu, sẽ được tư vấn trước khi xác nhận.</p>
          </div>
        ) : (
          <p className="text-sm leading-6 text-muted-foreground">Chọn combo bên dưới hoặc từ danh sách dịch vụ. Bạn có thể đổi lựa chọn trước khi gửi.</p>
        )}
      </div>

      {Object.values(visibleErrors).some(Boolean) && (
        <p role="alert" className="mb-5 text-sm leading-6 text-destructive">Bạn kiểm tra lại các mục được đánh dấu bên dưới nhé.</p>
      )}

      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="customer-name">Tên của bạn *</FieldLabel>
          <input id="customer-name" name="customerName" autoComplete="name" className={fieldClassName} placeholder="Ví dụ: Minh Anh" {...fieldAccessibility("customerName")} required />
          {fieldError("customerName")}
        </div>
        <div>
          <FieldLabel htmlFor="customer-phone">Số điện thoại *</FieldLabel>
          <input id="customer-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={fieldClassName} placeholder="Ví dụ: 0912 345 678" {...fieldAccessibility("phone")} required />
          {fieldError("phone")}
        </div>
        <div>
          <FieldLabel htmlFor="pet-name">Tên bé *</FieldLabel>
          <input id="pet-name" name="petName" className={fieldClassName} placeholder="Ví dụ: Bông" {...fieldAccessibility("petName")} required />
          {fieldError("petName")}
        </div>
        <div>
          <FieldLabel htmlFor="pet-type">Bé là *</FieldLabel>
          <select id="pet-type" name="petType" defaultValue="" className={fieldClassName} {...fieldAccessibility("petType")} required>
            <option value="" disabled>Chọn loại thú cưng</option>
            <option value="dog">Chó</option>
            <option value="cat">Mèo</option>
            <option value="other">Khác</option>
          </select>
          {fieldError("petType")}
        </div>
        <div>
          <FieldLabel htmlFor="service">Combo quan tâm *</FieldLabel>
          <select
            id="service"
            name="service"
            value={serviceId}
            onChange={(event) => {
              const value = event.target.value;
              selectService(isServiceId(value) ? value : "");
            }}
            className={fieldClassName}
            {...fieldAccessibility("service")}
            required
          >
            <option value="" disabled>Chọn combo dịch vụ</option>
            {servicePackages.map((service) => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
          {fieldError("service")}
        </div>
        <div>
          <FieldLabel htmlFor="preferred-date">Ngày mong muốn *</FieldLabel>
          <input
            id="preferred-date"
            name="preferredDate"
            type="date"
            min={minimumDate}
            onFocus={() => setMinimumDate(getLocalDate())}
            className={fieldClassName}
            {...fieldAccessibility("preferredDate")}
            required
          />
          {fieldError("preferredDate")}
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
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Thử gửi yêu cầu <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
        <p className="text-xs leading-5 text-muted-foreground">Lịch hẹn thực tế cần FoPet xác nhận.</p>
      </div>

      {demoSubmitted && (
        <p role="status" aria-live="polite" className="mt-5 flex items-start gap-2 rounded-2xl bg-secondary p-4 text-sm leading-6 text-secondary-foreground">
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0" />
          Thông tin cho {selectedService?.name} đã hợp lệ trên trình duyệt. Đây là bản dùng thử: chưa gửi yêu cầu, lưu thông tin hoặc tạo lịch hẹn.
        </p>
      )}
    </form>
  );
}
