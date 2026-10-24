# Cập nhật lề, modal quy trình và chữ FoPet

Ngày: 25/10/2026.

- Hero chuyển từ khung tối đa 1440px sang `page-container` 1280px để lề trái/phải khớp các section.
- Bỏ phần “Vì sao chọn FoPet” và khung quy trình trên trang. Nút **Xem quy trình** cạnh form mở modal ba bước.
- Tên thương hiệu FoPet dùng Nunito Sans, độ đậm 800, giữ đúng hoa/thường và khoảng cách chữ bình thường. Áp dụng ở các nhãn, tiêu đề đặt lịch và footer.

## Kiểm tra

- `npm run lint` và `npm run build`: đạt.
- Chrome ở 360, 390, 768, 1280, 1440px: lề hero và dịch vụ lệch dưới 1px; không tràn ngang.
- Modal trên cả năm kích thước: mở bằng Enter, có đủ ba bước, Tab/Shift+Tab giữ focus trong modal, Escape đóng và trả focus về nút mở.
- Kiểm tra nút đóng, nút “Đã hiểu”, nhấn ngoài modal và giữ nguyên dữ liệu form khi mở/đóng.
- Quét axe-core trong nội dung modal: không có violation hoặc mục cần rà soát thêm. Focus ở lớp nền đã được kiểm tra bằng bàn phím; đây không phải báo cáo accessibility đầy đủ cho toàn bộ trang.
- Không ghi nhận lỗi runtime hoặc console error. Kiểm tra trình duyệt lần này chạy trên dev server; build production được kiểm tra riêng.

Kết quả gồm **12 nhóm kiểm tra**, lưu tại [results.json](./results.json).

| Giao diện | Desktop 1440px | Điện thoại 390px |
| --- | --- | --- |
| Hero | [Xem ảnh](./hero-1440.png) | [Xem ảnh](./hero-390.png) |
| Modal quy trình | [Xem ảnh](./modal-1440.png) | [Xem ảnh](./modal-390.png) |
