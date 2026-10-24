"use client";

import type { MouseEvent, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking-provider";
import type { ServiceId } from "@/lib/services";

type BookingLinkProps = {
  serviceId?: ServiceId;
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary";
  "aria-label"?: string;
};

export function BookingLink({
  serviceId,
  children,
  className,
  variant = "default",
  "aria-label": ariaLabel,
}: BookingLinkProps) {
  const { selectService } = useBooking();

  function handleClick(event: MouseEvent<HTMLElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    selectService(serviceId ?? "");
    // Đợi anchor hoàn tất điều hướng rồi chuyển focus, tránh trình duyệt lấy lại focus.
    requestAnimationFrame(() => document.getElementById("booking-form-title")?.focus({ preventScroll: true }));
  }

  return (
    <Button
      nativeButton={false}
      role="link"
      render={<a href="#dat-lich" />}
      onClick={handleClick}
      variant={variant}
      size="lg"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
}
