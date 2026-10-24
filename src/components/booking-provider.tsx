"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ServiceId } from "@/lib/services";

type BookingContextValue = {
  serviceId: ServiceId | "";
  selectService: (serviceId: ServiceId | "") => void;
  demoSubmitted: boolean;
  setDemoSubmitted: (submitted: boolean) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [serviceId, setServiceId] = useState<ServiceId | "">("");
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  function selectService(nextServiceId: ServiceId | "") {
    setServiceId(nextServiceId);
    setDemoSubmitted(false);
  }

  return (
    <BookingContext.Provider value={{ serviceId, selectService, demoSubmitted, setDemoSubmitted }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking phải được dùng trong BookingProvider.");
  return context;
}
