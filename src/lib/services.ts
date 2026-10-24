// Nội dung và giá mẫu dùng chung cho card dịch vụ và form đặt lịch.
export const servicePackages = [
  {
    id: "bath",
    name: "Combo Tắm Thơm",
    description: "Tắm gội, sấy lông và vệ sinh cơ bản cho bé sạch sẽ, thơm tho.",
    includes: ["Tắm gội làm sạch", "Sấy và chải lông", "Vệ sinh cơ bản"],
    price: "180.000đ",
    detail: "Thời lượng khoảng 60 phút",
  },
  {
    id: "spa",
    name: "Combo Spa Xinh",
    description: "Tắm gội, chải gỡ và tỉa lông gọn gàng theo dáng bé.",
    includes: ["Tắm gội và sấy lông", "Chải gỡ lông", "Cắt tỉa theo dáng bé"],
    price: "320.000đ",
    detail: "Thời lượng khoảng 90 phút",
  },
  {
    id: "day-care",
    name: "Combo Vui Cả Ngày",
    description: "Không gian nghỉ ngơi, vui chơi và chăm sóc ban ngày cho bé.",
    includes: ["Không gian nghỉ ngơi", "Vui chơi trong ngày", "Theo dõi và chăm sóc"],
    price: "250.000đ",
    detail: "Tối đa 8 giờ trong ngày",
  },
] as const;

export type ServiceId = (typeof servicePackages)[number]["id"];

export function isServiceId(value: string): value is ServiceId {
  return servicePackages.some((service) => service.id === value);
}
