# Quy tắc UI FoPet

## Design system

FoPet sử dụng Astryx của Meta làm design system React nền tảng. Theme Astryx được cấu hình tập trung trong `src/app/providers.tsx`; các màn hình mới nên ưu tiên component và token của Astryx trước khi tạo component riêng.

Tailwind CSS và các component shadcn hiện có vẫn được dùng cho phần giao diện đã xây dựng. Khi bổ sung UI, cần giữ bảng màu kem và vàng nâu của FoPet, bo tròn đồng bộ và không thêm shadow trang trí không cần thiết.

## Icon

- Không dùng icon do AI tạo, emoji, SVG vẽ tay hoặc trộn nhiều bộ icon.
- Nếu cần icon, chỉ dùng `lucide-react` trong phạm vi dự án hiện tại.
- Icon trang trí phải có `aria-hidden="true"`; icon gắn với thao tác phải có tên accessible thông qua nhãn nút hoặc `aria-label`.
