# Kết quả cải tiến UI FoPet — đợt 3, 4, 5

Ngày kiểm tra: 25/10/2026. Nhánh: `KhoaNguyen`.

Sau đợt này, giao diện đã được chỉnh tiếp theo phản hồi: đồng bộ lề hero, chuyển quy trình sang modal và sửa kiểu chữ FoPet. Xem [bản cập nhật và ảnh mới](./layout-modal-update/README.md). Các kết quả bên dưới ghi nhận phiên bản trước bản cập nhật đó.

## Nội dung đã triển khai

- Thêm lý do chọn FoPet, quy trình ba bước và FAQ dạng Accordion.
- Tạo mục liên hệ riêng và footer dùng chung dữ liệu trong `src/lib/site-config.ts`.
- Theo lựa chọn của chủ dự án, địa chỉ, giờ mở cửa và số điện thoại là dữ liệu ảo có nhãn minh họa. Gọi điện/Zalo ở chế độ demo; bản đồ chỉ mở khu vực TP. Hồ Chí Minh.
- Đưa form lên sau quy trình, trước sản phẩm và tin tức.
- Chuẩn hóa màu bằng token, giảm cỡ tiêu đề hero, tăng cỡ chữ nhập liệu lên 16px và thay nav điện thoại bằng menu thu gọn.
- Thay dải tin tức chạy liên tục bằng carousel tự chuyển mỗi 5 giây, có dừng/chạy, trước/sau, vuốt ngang và phím trái/phải/Home/End.
- Carousel dừng tự chuyển khi hover/focus và khi bật giảm chuyển động. Dữ liệu sản phẩm và bài viết vẫn là minh họa; danh mục sản phẩm có trạng thái sắp ra mắt.

## Kết quả kiểm tra

Đã dùng Chrome ở chế độ headless trên bản production tại localhost. Playwright và axe-core phục vụ kiểm tra được cài trong thư mục tạm, không bổ sung dependency vào ứng dụng.

| Phạm vi | Kết quả |
| --- | --- |
| `npm run lint` | Đạt |
| `npm run build` | Đạt; trang chủ render tĩnh thành công |
| 360, 390, 768, 1280, 1440px | Không tràn ngang; không có phần tử hiển thị vượt khung ngoài vùng cuộn tin tức |
| Thứ tự section | Hero → dịch vụ → lý do/quy trình → đặt lịch → sản phẩm → tin tức → FAQ → liên hệ |
| Điều hướng | Bốn mục desktop tới đúng section và không bị sticky header che; menu điện thoại mở/đóng và tự đóng khi chọn mục |
| Bàn phím | Enter/Space/Tab/Escape cho menu; chọn ba combo; focus form; chọn dịch vụ bằng mũi tên và Tab; FAQ; điều khiển carousel |
| Form | Trường bắt buộc, số điện thoại sai, ngày quá khứ, ngày hợp lệ; đổi combo giữ dữ liệu và xóa thông báo demo cũ |
| Tin tức | Trước/sau, vuốt chạm, Home/End/mũi tên, tự chuyển và quay lại đầu, dừng/chạy, hover/focus, giảm chuyển động |
| Reflow tương đương 200% | Từ màn hình 1440×900 xuống layout viewport 720×450 với DPR 2: không tràn/cắt nội dung |
| Quét accessibility tự động | 30 kiểm tra đạt; không có violation hoặc mục cần rà soát thêm trong trạng thái được quét |
| Console trình duyệt | Không ghi nhận lỗi runtime, hydration hoặc console error |

Tổng cộng **21 nhóm kiểm tra trình duyệt đạt**. Kết quả chi tiết và phiên bản Chrome được lưu trong [results.json](./results.json).

Các hàm kiểm tra ngày/số điện thoại và cấu hình liên hệ được kiểm tra riêng: chấp nhận số di động định dạng nội địa hoặc `+84`, từ chối ngày không tồn tại/ngày quá khứ, xử lý ngày nhuận, và chỉ tạo liên kết gọi/Zalo khi tắt chế độ demo và có dữ liệu.

### Tương phản màu

Mục tiêu cho bảy cặp màu được đo là tối thiểu 4.5:1.

| Cặp màu | Tỷ lệ |
| --- | --- |
| Chữ chính / nền kem | 11.53:1 |
| Chữ phụ / nền kem | 5.53:1 |
| Chữ phụ / nền bổ trợ | 4.81:1 |
| Chữ vàng / nền bổ trợ | 4.85:1 |
| Chữ button / nền button | 5.57:1 |
| Chữ button / nền hover | 7.26:1 |
| Chữ báo lỗi / nền card | 7.15:1 |

Quét tự động được thực hiện ở desktop với trạng thái form và carousel trong bài kiểm tra; kết quả này không thay thế đánh giá accessibility đầy đủ. Kiểm tra 200% dùng viewport/DPR tương đương reflow, không thao tác thanh zoom của trình duyệt. Chưa kiểm tra Safari, Firefox hoặc kết nối backend; form chưa gửi/lưu dữ liệu.

## Ảnh trước và sau

Ảnh trước đợt 3–5 được chụp sau khi đã hoàn thành đợt 1–2. Các cặp ảnh dùng cùng chiều rộng, chiều cao viewport 900px và bật giảm chuyển động để so sánh ổn định.

| Kích thước | Trước | Sau |
| --- | --- | --- |
| Điện thoại 390px | [Toàn trang](./before-mobile.png) | [Toàn trang](./after-mobile.png) · [Màn hình đầu](./after-mobile-top.png) |
| Desktop 1440px | [Toàn trang](./before-desktop.png) | [Toàn trang](./after-desktop.png) · [Màn hình đầu](./after-desktop-top.png) |
| Reflow 200% | — | [Toàn trang, viewport 720px/DPR 2](./after-reflow-200.png) |

Đã xem trực quan ảnh desktop toàn trang và ảnh màn hình đầu trên desktop/điện thoại để rà bố cục, tỷ lệ chữ/ảnh, card và màu.

## Tự kiểm tra khi học

1. Chạy `npm run dev`, mở trang chủ và thử ở các kích thước trong bảng.
2. Dùng bàn phím mở menu điện thoại; Tab qua các mục và Escape để đóng. Chọn “Liên hệ” để kiểm tra điểm cuộn.
3. Bấm chọn lần lượt ba combo, kiểm tra tên/giá trong form; đổi combo và xác nhận thông tin đã nhập vẫn còn.
4. Thử gửi form trống, số điện thoại sai, ngày quá khứ rồi sửa thành dữ liệu hợp lệ.
5. Thử các nút tin tức, vuốt trên chế độ thiết bị di động và dùng phím mũi tên khi focus vùng tin tức.
6. Bật giảm chuyển động trong công cụ trình duyệt để kiểm tra carousel ngừng tự chuyển.
7. Chạy lại `npm run lint` và `npm run build` sau khi thay đổi mã.

Khi chuyển sang thông tin cửa hàng thật, cập nhật `src/lib/site-config.ts`, đặt `isDemo: false`, thay cả URL bản đồ và kiểm tra lại các liên kết trước khi sử dụng.
