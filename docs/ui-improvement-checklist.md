# FoPet — Checklist cải tiến UI

Ngày lập: 25/10/2026. Nhánh làm việc: `KhoaNguyen`.

Mục tiêu: hoàn thiện landing page theo từng bước nhỏ, đồng thời thực hành Next.js, Tailwind CSS và shadcn/ui. Đánh dấu `[x]` khi đã thực hiện và đáp ứng tiêu chí hoàn thành của từng đợt.

## Nguyên tắc thiết kế

- Giữ vàng theo logo làm màu chủ đạo, kem làm màu bổ trợ; dùng nâu đậm cho chữ.
- Button bo tròn, không thêm shadow trang trí; trạng thái focus cần nhìn thấy rõ.
- Dịch vụ và sản phẩm tiếp tục dùng icon minh họa theo lựa chọn hiện tại.
- Ưu tiên thao tác xem dịch vụ → chọn combo → gửi yêu cầu đặt lịch.
- Form gửi yêu cầu chưa đồng nghĩa với giữ chỗ hoặc xác nhận lịch.
- Giá, thông tin cửa hàng và đánh giá chưa được xác thực phải được ghi rõ là nội dung mẫu.

## Đợt 1 — Card gọn hơn và hành động chính rõ hơn

Thực hiện trước. Các tệp chính: `src/app/page.tsx`, `src/app/globals.css`.

- [x] **UI-01:** Thu gọn vùng icon của card dịch vụ, bỏ vùng vuông `aspect-square`; thử chiều cao khoảng 80–112px hoặc icon cạnh tiêu đề.
- [x] **UI-02:** Giảm vùng icon sản phẩm xuống khoảng 120–160px; giữ cách căn chỉnh đồng nhất giữa các card.
- [x] **UI-03:** Sắp xếp card dịch vụ theo thứ tự: icon, tên, mô tả ngắn, nội dung bao gồm, giá từ, thời lượng, nút chọn.
- [x] **UI-04:** Bổ sung danh sách những việc bao gồm trong từng combo; ghi rõ nội dung mẫu khi chưa chốt dịch vụ thực tế.
- [x] **UI-05:** Đưa “Đặt lịch cho bé” thành button chính ở hero; “Khám phá dịch vụ” dùng kiểu phụ.
- [x] **UI-06:** Đồng bộ chiều cao, khoảng đệm, icon và trạng thái hover/focus của button; bảo đảm ảnh hero vẫn nổi bật so với chữ.

**Hoàn thành khi:** card không còn vùng trống lớn quanh icon; khách đọc được giá và điểm khác nhau giữa ba combo; hành động đặt lịch nổi bật ở màn hình đầu tiên.

**Bài học:** Tailwind về kích thước, khoảng cách, grid và biến thể component shadcn/ui.

## Đợt 2 — Chọn combo và chuyển thông tin sang form

Phụ thuộc đợt 1. Các tệp chính: `src/app/page.tsx`, `src/components/booking-form.tsx`; thêm component hoặc tệp dữ liệu khi cần.

- [x] **UI-07:** Dùng ID ổn định cho từng combo và một nguồn dữ liệu chung giữa card và danh sách chọn trong form.
- [x] **UI-08:** Bấm “Chọn combo” sẽ chuyển đến form và điền sẵn đúng dịch vụ.
- [x] **UI-09:** Cho phép khách đổi combo trong form; lựa chọn hiển thị phải khớp với dữ liệu chuẩn bị gửi.
- [x] **UI-10:** Hiển thị tóm tắt combo đang chọn và giá tham khảo ngay trong vùng đặt lịch.
- [x] **UI-11:** Khi khách bấm “Đặt lịch” chung, form vẫn cho phép bắt đầu mà chưa chọn dịch vụ.
- [x] **UI-12:** Làm rõ form đang ở chế độ demo trước khi gửi; giữ thông báo rằng yêu cầu cần FoPet xác nhận.
- [x] **UI-13:** Rà soát trường bắt buộc, thông báo lỗi dễ hiểu và việc chọn ngày đã qua.

**Hoàn thành khi:** chọn lần lượt từng combo đều điền đúng form; khách đổi được lựa chọn; thao tác bằng bàn phím không bị mất vị trí; chế độ demo không tạo cảm giác lịch đã được gửi thật.

**Bài học:** state, props và ranh giới Server/Client Component. Đọc tài liệu Next.js đang cài trước khi chọn cách truyền dữ liệu; giữ phần tương tác trong phạm vi component cần thiết.

## Đợt 3 — Nội dung giúp khách an tâm và liên hệ được

Có thể chuẩn bị nội dung song song với đợt 2; thông tin thực tế cần chủ dự án cung cấp.

- [ ] **UI-14:** Thêm khối “Vì sao chọn FoPet” với các cam kết cụ thể đã được xác nhận.
- [ ] **UI-15:** Thêm quy trình ba bước: chọn dịch vụ → tư vấn, xác nhận → đưa bé đến chăm sóc.
- [ ] **UI-16:** Chuẩn bị dữ liệu địa chỉ, giờ mở cửa, điện thoại, Zalo và bản đồ; ghi rõ phần còn thiếu.
- [ ] **UI-17:** Tạo khối liên hệ riêng để mục “Liên hệ” dẫn đúng thông tin cửa hàng.
- [ ] **UI-18:** Bổ sung liên kết gọi điện, Zalo và bản đồ khi đã có đích đến thật.
- [ ] **UI-19:** Bổ sung FAQ ngắn về cách tính giá, chuẩn bị trước buổi spa và đổi lịch; câu trả lời cần khớp quy trình thực tế.
- [ ] **UI-20:** Hoàn thiện footer với điều hướng và thông tin cửa hàng đã xác nhận.

**Hoàn thành khi:** khách tìm được cách liên hệ và hiểu quy trình xác nhận lịch; nội dung mẫu được nhận diện rõ. Chỉ bổ sung đánh giá, chứng nhận hoặc số liệu phục vụ khi có bằng chứng thật.

**Bài học:** component nội dung dùng lại, dữ liệu có cấu trúc và Accordion của shadcn/ui.

## Đợt 4 — Thứ tự nội dung, chữ và trải nghiệm điện thoại

Phụ thuộc nội dung từ đợt 3.

- [ ] **UI-21:** Sắp xếp trang theo thứ tự: header → hero → combo → lý do chọn/quy trình → đặt lịch → sản phẩm → tin tức → liên hệ/footer.
- [ ] **UI-22:** Chuẩn hóa cấp chữ: nội dung chính khoảng 16px, thông tin phụ 12–14px; điều chỉnh tiêu đề theo màn hình và cân đối với ảnh.
- [ ] **UI-23:** Gom màu đang viết trực tiếp trong JSX về token có ý nghĩa; kiểm tra tương phản của chữ và button.
- [ ] **UI-24:** Cải thiện nav điện thoại để dễ đọc, dễ chạm; dùng menu thu gọn nếu bốn mục quá chật.
- [ ] **UI-25:** Căn khoảng cuộn tới các section để sticky header không che tiêu đề hoặc đầu form.
- [ ] **UI-26:** Bổ sung nút dừng/chạy và trước/sau cho tin tức; hỗ trợ vuốt trên điện thoại và giữ chế độ giảm chuyển động.
- [ ] **UI-27:** Làm rõ trạng thái “sắp ra mắt” của danh mục sản phẩm; khách cần hiểu vì sao nút xem thêm chưa hoạt động.

**Hoàn thành khi:** trang đọc và thao tác được trên điện thoại; thứ tự nội dung dẫn khách đến form sớm hơn; tin tức có thể được dừng bằng điều khiển trực tiếp.

**Bài học:** responsive, design tokens, điều hướng và quản lý tương tác của carousel.

## Đợt 5 — Kiểm tra và ghi nhận kết quả

Thực hiện sau mỗi đợt với phạm vi vừa thay đổi; rà soát toàn trang khi hoàn tất.

- [ ] **UI-28:** Kiểm tra ở chiều rộng 360px, 390px, 768px, 1280px và 1440px: không tràn ngang, không cắt nội dung.
- [ ] **UI-29:** Kiểm tra nav, nút chọn từng combo, thay đổi dịch vụ trong form và gửi form demo.
- [ ] **UI-30:** Kiểm tra bằng bàn phím: thứ tự Tab, focus, select, carousel và menu điện thoại nếu có.
- [ ] **UI-31:** Kiểm tra lỗi form, ngày không hợp lệ và nội dung thông báo kết quả.
- [ ] **UI-32:** Kiểm tra trang khi bật giảm chuyển động và phóng to trình duyệt 200%.
- [ ] **UI-33:** Chạy `npm run lint` và `npm run build`; xử lý lỗi phát sinh trong phạm vi thay đổi.
- [ ] **UI-34:** Chụp giao diện trước/sau ở cùng kích thước màn hình để so sánh.
- [ ] **UI-35:** Ghi lại thay đổi và tạo commit theo từng đợt trên `KhoaNguyen`.

**Hoàn thành khi:** các luồng chính hoạt động đúng, kiểm tra giao diện đạt yêu cầu và không còn lỗi lint/build liên quan đến thay đổi.

## Phát triển chức năng sau khi UI ổn định

Các mục này thuộc giai đoạn tiếp theo, không phải điều kiện hoàn thành đợt cải tiến landing page.

- [ ] Xây trang danh sách và chi tiết dịch vụ.
- [ ] Xây danh mục sản phẩm có phân nhóm; bổ sung ảnh thật khi quyết định chuyển khỏi icon minh họa.
- [ ] Xây trang danh sách và chi tiết bài viết để card tin tức có nội dung đích.
- [ ] Kết nối form với server, kiểm tra dữ liệu và lưu yêu cầu ở trạng thái chờ xác nhận.
- [ ] Xây trang nhân viên tiếp nhận, xác nhận và cập nhật yêu cầu theo tài liệu nghiệp vụ.

## Ghi nhận triển khai đợt 1–2

- Card dịch vụ dùng vùng icon 80px, card sản phẩm dùng vùng icon cao 144px; button lớn dùng chung chiều cao 48px.
- Dữ liệu combo nằm trong `src/lib/services.ts`; `BookingProvider` chia sẻ lựa chọn giữa `BookingLink` và `BookingForm`. Trang chủ tiếp tục là Server Component.
- Đã kiểm tra các hàm ngày/số điện thoại và 13 tình huống tương tác trong môi trường DOM, gồm chọn cả ba combo, đổi lựa chọn, giữ thông tin đã nhập, lỗi form và trạng thái demo. Đây là kiểm tra component, chưa thay cho quan sát bố cục hoặc thao tác bàn phím trong trình duyệt thật.
- Lint và build production đã thành công. Việc kiểm tra trực quan ở nhiều kích thước màn hình vẫn thuộc đợt 5.

## Nguồn tham khảo

Khảo sát nội dung và cách tổ chức thông tin ngày 25/10/2026. Việc xem trực quan qua Computer Use bị dừng do công cụ không xác định được URL Chrome; cần bổ sung quan sát desktop/mobile khi công cụ hoạt động trở lại. Chưa có dữ liệu đo tỷ lệ chuyển đổi để khẳng định hiệu quả của các đề xuất.

- [Pet Mart](https://www.petmart.vn/): phân nhóm sản phẩm, dịch vụ và thông tin cửa hàng.
- [Groomit](https://www.groomit.me/): đặt lịch theo nhu cầu thú cưng và thông tin phục vụ lựa chọn.
- [Small Door Veterinary](https://www.smalldoorvet.com/): lời kêu gọi đặt lịch, lợi ích và nội dung tạo niềm tin.
- [Nghiệp vụ FoPet](./business-requirements.md).
- [Lộ trình học Next.js](./nextjs-learning-roadmap.md).
