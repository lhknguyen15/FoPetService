export type BookingField =
  | "customerName"
  | "phone"
  | "petName"
  | "petType"
  | "service"
  | "preferredDate";

export type BookingErrors = Partial<Record<BookingField, string>>;

export const bookingFieldIds: Record<BookingField, string> = {
  customerName: "customer-name",
  phone: "customer-phone",
  petName: "pet-name",
  petType: "pet-type",
  service: "service",
  preferredDate: "preferred-date",
};

// Dùng ngày tại trình duyệt để không bị lệch ngày khi chuyển sang UTC.
export function getLocalDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function normalizePhone(value: string) {
  return value.replace(/[\s().-]/g, "").replace(/^\+84/, "0");
}

export function isValidPhone(value: string) {
  return /^0[35789]\d{8}$/.test(normalizePhone(value));
}

export function isValidBookingDate(value: string, today = getLocalDate()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && getLocalDate(date) === value && value >= today;
}
