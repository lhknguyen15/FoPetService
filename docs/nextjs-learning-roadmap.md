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
src/
  app/
    layout.tsx     # khung chung, html/body, font và metadata
    page.tsx       # route trang chủ `/`, ghép các section
    globals.css    # Tailwind v4, màu và CSS dùng toàn ứng dụng
  components/
    ui/            # Button, Card, Accordion thuộc source project
    booking-*.tsx  # chia sẻ lựa chọn, nút chọn và form đặt lịch
    care-journey-dialog.tsx
    faq-section.tsx
    contact-section.tsx
    mobile-navigation.tsx
    news-carousel.tsx
  lib/
    utils.ts       # hàm cn() ghép class Tailwind
    services.ts    # dữ liệu combo dùng chung
    site-config.ts # menu và thông tin cửa hàng minh họa
    booking-validation.ts
docs/
  business-requirements.md
  nextjs-learning-roadmap.md
  ui-improvement-checklist.md
  ui-review/       # báo cáo kiểm tra và ảnh trước/sau
```

Tên thư mục trong `app` tạo URL: `app/dich-vu/page.tsx` tương ứng `/dich-vu`; `app/dich-vu/[slug]/page.tsx` tương ứng trang dịch vụ động.

## Thứ tự học và bài tập

Để thực hành trên landing page hiện tại, làm lần lượt theo [Checklist cải tiến UI](./ui-improvement-checklist.md). Mỗi đợt có công việc, tiêu chí hoàn thành và kiến thức cần học.

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

Sau đợt cải tiến UI 1–2, bạn có thể đọc mã theo thứ tự này để hiểu luồng chọn combo:

1. `src/lib/services.ts`: dữ liệu và ID dùng chung cho card và form.
2. `src/components/booking-provider.tsx`: `useState` lưu combo đang chọn; Context chia sẻ lựa chọn giữa các component.
3. `src/components/booking-link.tsx`: khi bấm chọn, cập nhật combo và chuyển đến form; nút đặt lịch chung bắt đầu với lựa chọn trống.
4. `src/components/booking-form.tsx`: `select` nhận `value` từ Context; tóm tắt giá và thời lượng cập nhật theo lựa chọn. Dữ liệu người dùng đã nhập vẫn được giữ khi đổi combo.
5. `src/lib/booking-validation.ts`: kiểm tra số di động Việt Nam, chuẩn hóa số bắt đầu bằng `+84` và kiểm tra ngày hợp lệ từ hôm nay theo ngày tại trình duyệt.

`page.tsx` vẫn là Server Component. `BookingProvider` nhận nội dung trang qua `children`, nên phần nội dung tĩnh không cần chuyển thành Client Component. Form thông báo rõ chế độ demo trước khi gửi; sửa dữ liệu sẽ xóa kết quả kiểm tra cũ.

### Bài 6 — Cơ sở dữ liệu và đăng nhập quản trị

Chuyển mô hình dữ liệu trong tài liệu nghiệp vụ thành bảng. Thêm xác thực, phân quyền và kiểm tra quyền ở phía server trước mọi thao tác quản trị. Không đưa khóa bí mật vào component chạy ở trình duyệt.

### Bài 7 — Hoàn thiện sản phẩm

Thêm trang lỗi/không tìm thấy, trạng thái đang tải, metadata theo trang, tối ưu ảnh, chống gửi lặp form, chính sách lưu dữ liệu và triển khai. Chọn công cụ dữ liệu/hosting sau khi đã xác định yêu cầu thật và bài học tương ứng.

## Nguyên tắc ghi nhớ

- Route là một thư mục; `page.tsx` làm route hiển thị và `layout.tsx` chia sẻ bố cục.
- Server Component là mặc định; `'use client'` tạo ranh giới chạy phía trình duyệt.
- Giữ nghiệp vụ, kiểm tra quyền, bí mật và thao tác dữ liệu ở server.
- Bắt đầu bằng một thay đổi nhỏ, giải thích được nó, rồi mới thêm thư viện hoặc lớp kiến trúc.

## Thực hành tiếp sau đợt UI 3–5

1. Đọc `contact-section.tsx` và `faq-section.tsx` để thấy cách chia landing page thành các section dễ quản lý. `care-journey-dialog.tsx` là Client Component mở quy trình trong modal từ phần đặt lịch; nội dung trang được ghép trong `page.tsx`.
2. Đổi một thông tin minh họa trong `src/lib/site-config.ts` và quan sát cả phần liên hệ lẫn footer cập nhật từ cùng dữ liệu. Khi dùng dữ liệu thật, đổi cả `isDemo` và các URL.
3. Đọc `mobile-navigation.tsx`: state mở/đóng, `aria-expanded`, điều hướng bằng bàn phím và dọn event listener trong `useEffect`.
4. Đọc `news-carousel.tsx`: ref truy cập vùng cuộn, effect quản lý timer, `useSyncExternalStore` theo dõi cài đặt giảm chuyển động, và CSS scroll snap hỗ trợ vuốt ngang.
5. Xem token màu và các lớp section trong `globals.css`; thay token để hiểu cách đồng bộ giao diện thay vì sửa màu ở từng card.
6. Làm theo [báo cáo kiểm tra UI](./ui-review/README.md) để thử lại các luồng bằng trình duyệt và bàn phím.

## Nguồn chính thức

- [Cài đặt Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [App Router](https://nextjs.org/docs/app)
- [Server và Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Lấy dữ liệu](https://nextjs.org/docs/app/getting-started/fetching-data)
