# FoPet Service

Website giới thiệu cửa hàng dịch vụ chăm sóc thú cưng. Dự án được xây theo từng chặng để vừa làm sản phẩm vừa học Next.js.

## Chạy ứng dụng

Yêu cầu Node.js 20.9 trở lên. Cài các gói rồi chạy máy chủ phát triển:

```bash
npm install
npm run dev
```

Mở <http://localhost:3000>. Trang đầu nằm trong `src/app/page.tsx`; kiểu dáng nằm trong `src/app/globals.css`.

## Học theo chặng

1. **Landing page (hiện tại):** JSX, Server Components, Tailwind CSS, design tokens, component Button/Card của shadcn/ui, metadata và responsive.
2. **Tách thành phần:** header, footer, service card; đưa nội dung dịch vụ sang dữ liệu có kiểu.
3. **Các trang công khai:** `/dich-vu`, `/dich-vu/[slug]`, `/bang-gia`, `/lien-he`; thực hành routing, `Link`, layout, metadata.
4. **Yêu cầu đặt lịch:** đã có giao diện form ở `src/components/booking-form.tsx`; kết nối kiểm tra dữ liệu phía server và lưu yêu cầu là bước học tiếp theo.
5. **Lưu dữ liệu:** thiết kế cơ sở dữ liệu khách hàng, thú cưng, dịch vụ, lịch hẹn; thêm xác thực và phân quyền quản trị.
6. **Vận hành:** quản lý lịch, cập nhật trạng thái, thông báo; bổ sung bảo mật, xử lý lỗi và triển khai.

Mỗi chặng nên hoàn thành theo vòng lặp: hiểu mục tiêu → thay đổi một phần nhỏ → chạy ứng dụng → quan sát kết quả → giải thích lại code → lưu checkpoint Git.

## Tài liệu dự án

- [Khảo sát nghiệp vụ và phạm vi MVP](docs/business-requirements.md)
- [Lộ trình học Next.js](docs/nextjs-learning-roadmap.md)

## Lựa chọn kỹ thuật ban đầu

- Next.js App Router + React + TypeScript.
- Trang giới thiệu ưu tiên Server Components (mặc định của App Router); chỉ thêm Client Component khi cần state, event handler hoặc API trình duyệt.
- Tailwind CSS v4 cho layout, responsive và style; shadcn/ui cho component có thể chỉnh sửa trong repo; Lucide cho icon SVG.
- Chưa thêm cơ sở dữ liệu, đăng nhập hay thanh toán.
