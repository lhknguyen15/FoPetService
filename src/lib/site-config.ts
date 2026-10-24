export const navigationLinks = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#lien-he", label: "Liên hệ" },
  { href: "#tin-tuc", label: "Tin tức" },
] as const;

// Dữ liệu ảo cho dự án cá nhân. Đổi isDemo sau khi cập nhật thông tin thật.
export const shopContact = {
  isDemo: true,
  address: "123 Đường Mầm Nắng, TP. Hồ Chí Minh",
  hours: "Thứ 2 – Chủ nhật · 08:00–20:00",
  phone: "0900 000 000",
  zaloUrl: "https://zalo.me/0900000000",
  // Bản đồ chỉ hiển thị khu vực thành phố, không đánh dấu một cửa hàng thật.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ho+Chi+Minh+City",
};

export function getContactActions(contact: typeof shopContact) {
  return {
    phoneHref: !contact.isDemo && contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : null,
    zaloHref: !contact.isDemo && contact.zaloUrl ? contact.zaloUrl : null,
    mapsHref: contact.mapsUrl || null,
  };
}
