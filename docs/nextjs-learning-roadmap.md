# Học Next.js qua FoPet Service

## Next.js là gì?

Next.js là framework xây ứng dụng web dựa trên React. React cung cấp cách mô tả giao diện bằng component; Next.js bổ sung quy ước định tuyến theo thư mục, render phía server, lấy dữ liệu, tối ưu tải trang và các cơ chế phía server. App Router là hướng xây ứng dụng hiện được tài liệu Next.js khuyến nghị cho dự án mới.

## Khởi động dự án

1. Cài Node.js phiên bản 20.9 trở lên.
2. Trong thư mục dự án, chạy `npm install`.
3. Chạy `npm run dev`, mở `http://localhost:3000`.
4. Mở `src/app/page.tsx`, sửa một tiêu đề và lưu; dev server cập nhật trang.
5. Trước mỗi thay đổi lớn, tạo commit Git để có thể quay lại.

Nếu tạo project mới từ đầu, lệnh hiện được tài liệu chính thức hướng dẫn là:

```bash
npx create-next-app@latest fopet-service --yes
```

Lệnh này tạo thiết lập mặc định gồm TypeScript, ESLint, Tailwind CSS, App Router, Turbopack và alias `@/*`. Repo FoPet dùng Next.js App Router, Tailwind CSS v4, shadcn/ui và Lucide.

## Bản đồ tệp hiện tại

```text
src/app/
  layout.tsx       # khung chung bắt buộc, html/body, metadata
  page.tsx         # route trang chủ `/`, JSX và dữ liệu landing page
  globals.css      # Tailwind v4, design tokens và CSS dùng toàn ứng dụng
  components/ui/   # Button, Card: component shadcn/ui thuộc source project
  lib/utils.ts     # hàm cn() ghép class Tailwind
docs/
  business-requirements.md
  nextjs-learning-roadmap.md
```

Tên thư mục trong `app` tạo URL: `app/dich-vu/page.tsx` tương ứng `/dich-vu`; `app/dich-vu/[slug]/page.tsx` tương ứng trang dịch vụ động.

## Thứ tự học và bài tập

### Bài 1 — JSX và component trang

Trong `page.tsx`, nhận diện `Home`, các phần tử HTML, biểu thức `{...}`, mảng `services` và `.map()`. Đổi tên một dịch vụ và quan sát phần hiển thị. JSX trông giống HTML nhưng là cú pháp JavaScript/TypeScript để mô tả cây giao diện.

### Bài 2 — Tailwind, design tokens và accessibility

Thử đổi màu trong `:root` ở `globals.css` để thấy token ảnh hưởng toàn trang. Trong `page.tsx`, quan sát các utility như `grid`, `gap-5`, `md:grid-cols-3`, `rounded-2xl`, `text-sm`. Đổi breakpoint hoặc màu trên một component và xem trang co giãn. `components/ui/button.tsx` và `card.tsx` là mã shadcn/ui trong repo, có thể chỉnh trực tiếp. Mỗi hình có ý nghĩa cần mô tả thay thế; vùng điều hướng có nhãn; nút cần trạng thái focus rõ.

### Bài 3 — Layout, routing và Link

`layout.tsx` bọc mọi trang bên dưới. Tạo trang dịch vụ trong `src/app/dich-vu/page.tsx`; đổi liên kết điều hướng sang component `Link` của `next/link` khi xây điều hướng giữa các route. Giữ liên kết `#section` cho nhảy tới phần trong cùng trang.

### Bài 4 — Server Component và Client Component

Trong App Router, page/layout là Server Component theo mặc định. Dùng mặc định này cho nội dung, SEO và lấy dữ liệu. Chỉ thêm `'use client'` cho vùng thực sự cần state, xử lý click/input, lifecycle hoặc API trình duyệt. Ví dụ form chọn ngày có tương tác sẽ là Client Component; phần mô tả dịch vụ vẫn có thể là Server Component.

### Bài 5 — Form yêu cầu đặt lịch

Giao diện form hiện nằm trong `src/components/booking-form.tsx` và là Client Component vì cần xử lý submit/trạng thái. Form có tên, điện thoại, thú cưng, combo, ngày mong muốn và lưu ý; các trường bắt buộc được kiểm tra trên trình duyệt. Trạng thái hiện tại chỉ báo rằng dữ liệu đã được kiểm tra — form chưa gửi/lưu dữ liệu. Bài tiếp theo là chọn Server Action hoặc Route Handler, kiểm tra dữ liệu ở server và lưu yêu cầu vào cơ sở dữ liệu.

### Bài 6 — Cơ sở dữ liệu và đăng nhập quản trị

Chuyển mô hình dữ liệu trong tài liệu nghiệp vụ thành bảng. Thêm xác thực, phân quyền và kiểm tra quyền ở phía server trước mọi thao tác quản trị. Không đưa khóa bí mật vào component chạy ở trình duyệt.

### Bài 7 — Hoàn thiện sản phẩm

Thêm trang lỗi/không tìm thấy, trạng thái đang tải, metadata theo trang, tối ưu ảnh, chống gửi lặp form, chính sách lưu dữ liệu và triển khai. Chọn công cụ dữ liệu/hosting sau khi đã xác định yêu cầu thật và bài học tương ứng.

## Nguyên tắc ghi nhớ

- Route là một thư mục; `page.tsx` làm route hiển thị và `layout.tsx` chia sẻ bố cục.
- Server Component là mặc định; `'use client'` tạo ranh giới chạy phía trình duyệt.
- Giữ nghiệp vụ, kiểm tra quyền, bí mật và thao tác dữ liệu ở server.
- Bắt đầu bằng một thay đổi nhỏ, giải thích được nó, rồi mới thêm thư viện hoặc lớp kiến trúc.

## Nguồn chính thức

- [Cài đặt Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [App Router](https://nextjs.org/docs/app)
- [Server và Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Lấy dữ liệu](https://nextjs.org/docs/app/getting-started/fetching-data)
