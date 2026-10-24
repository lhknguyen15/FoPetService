# FoPet Service — nghiệp vụ và phạm vi ban đầu

## 1. Tóm tắt ý tưởng

FoPet Service là cửa hàng cung cấp dịch vụ chăm sóc thú cưng. Website giúp khách hiểu dịch vụ, xem giá tham khảo, gửi yêu cầu đặt lịch và giúp nhân viên tiếp nhận, xác nhận, theo dõi lịch hẹn.

**Giả định dùng cho bản học tập:** một cửa hàng, hoạt động tại một địa điểm; khách chủ yếu liên hệ và đặt trước; nhân viên xác nhận lịch thủ công. Tên dịch vụ, giá, địa chỉ, giờ hoạt động và chính sách dưới đây là nội dung mẫu cần được chủ dự án xác nhận trước khi vận hành thật.

## 2. Nhóm người dùng

| Người dùng | Nhu cầu |
| --- | --- |
| Khách chưa đăng nhập | Tìm dịch vụ, mức giá, địa chỉ, giờ mở cửa và cách liên hệ. |
| Khách hàng | Gửi yêu cầu, cung cấp thông tin thú cưng, biết lịch đã được xác nhận hay chưa. |
| Nhân viên | Xem yêu cầu mới, gọi xác nhận, sắp xếp lịch và cập nhật tiến độ phục vụ. |
| Quản lý cửa hàng | Quản lý dịch vụ, giá, khung giờ, nhân viên và xem tình hình vận hành. |

## 3. Dịch vụ giả định để thiết kế dữ liệu

- Tắm và vệ sinh.
- Spa, chải lông và cắt tỉa.
- Lưu trú/chăm sóc ban ngày.
- Giai đoạn sau có thể khảo sát thêm: đưa đón, bán sản phẩm, chăm sóc tại nhà.

Giá phụ thuộc loài, giống, cân nặng, tình trạng lông, thời lượng hoặc yêu cầu riêng. Website nên ghi **giá từ** và yêu cầu nhân viên báo giá cuối cùng khi cần, tránh hiểu giá mẫu là cam kết.

## 4. Quy trình nghiệp vụ cốt lõi

1. Khách xem dịch vụ và điều kiện phục vụ.
2. Khách gửi yêu cầu gồm tên/số điện thoại, dịch vụ, ngày giờ mong muốn, thông tin bé và ghi chú.
3. Hệ thống ghi nhận yêu cầu ở trạng thái **Chờ xác nhận**; gửi mã yêu cầu hoặc thông báo đã tiếp nhận.
4. Nhân viên kiểm tra thời lượng dịch vụ, sức chứa/nhân sự và liên hệ khách.
5. Nhân viên xác nhận, đề xuất giờ khác hoặc từ chối; khách nhận thông báo kết quả.
6. Khi khách mang bé đến, nhân viên cập nhật trạng thái: **Đã đến → Đang phục vụ → Hoàn tất**.
7. Nếu khách hoặc cửa hàng hủy, lưu trạng thái, thời gian và lý do; áp dụng chính sách hủy đã công bố.

**Nguyên tắc lịch:** yêu cầu gửi từ web chưa đồng nghĩa với lịch đã được giữ chỗ. Chỉ hiển thị là xác nhận sau khi nhân viên kiểm tra khả năng phục vụ.

## 5. Phạm vi MVP đề xuất

### Có trong MVP

- Landing page: giới thiệu, nhóm dịch vụ, quy trình, thông tin liên hệ và lời kêu gọi đặt lịch.
- Danh sách/chi tiết dịch vụ với mô tả, giá tham khảo, thời lượng và điều kiện.
- Form gửi yêu cầu đặt lịch; xác thực trường bắt buộc và hiển thị kết quả.
- Kênh tiếp nhận yêu cầu cho nhân viên (bản học có thể bắt đầu bằng lưu dữ liệu và trang quản trị đơn giản).
- Quản lý dịch vụ, giá tham khảo và giờ mở cửa ở mức cơ bản.
- Giao diện ưu tiên điện thoại, nội dung tiếng Việt, thông tin liên hệ rõ ràng.

### Chưa cần ở bản đầu

- Thanh toán online, ví điện tử, mã giảm giá.
- Đặt lịch tức thì có đồng bộ nhiều chi nhánh/nhân sự.
- Ứng dụng di động riêng, chat trực tiếp, tích điểm.
- Hồ sơ thú cưng nâng cao, lịch sử y tế hoặc chẩn đoán.
- Tự động hóa marketing.

## 6. Quy tắc nghiệp vụ cần giữ

- Lưu số điện thoại theo định dạng thống nhất và xác nhận khách đồng ý được liên hệ về yêu cầu.
- Không nhận lịch vượt giờ mở cửa, dịch vụ đang tạm ngừng hoặc quá sức chứa.
- Hỗ trợ nhân viên đề xuất khung giờ thay thế khi slot mong muốn không còn.
- Thông tin dị ứng, hành vi hoặc lưu ý sức khỏe là ghi chú phục vụ; chỉ nhân viên liên quan được xem.
- Lưu dấu thời gian và người thay đổi trạng thái lịch để dễ tra soát.
- Giá và thời lượng có thể thay đổi sau khi xem tình trạng thực tế; cần thông báo rõ trước khi khách đồng ý.

## 7. Dữ liệu chính dự kiến

- **Service:** tên, slug, mô tả, nhóm, giá từ, thời lượng, điều kiện, trạng thái hiển thị.
- **Customer:** tên, số điện thoại, email tùy chọn, đồng ý liên hệ.
- **Pet:** tên, loài, giống tùy chọn, cân nặng/nhóm cân nặng, tuổi tùy chọn, lưu ý chăm sóc.
- **AppointmentRequest:** mã, khách, thú cưng, dịch vụ, thời gian mong muốn, trạng thái, ghi chú, thời điểm tạo.
- **AppointmentStatusHistory:** lịch hẹn, trạng thái cũ/mới, người cập nhật, thời điểm, lý do.
- **Staff/User:** tài khoản, vai trò, trạng thái hoạt động.

## 8. Tiêu chí chấp nhận landing page

- Khách hiểu FoPet làm dịch vụ gì và biết cách liên hệ/đặt lịch.
- Các nút điều hướng đưa tới đúng phần trên trang; hotline và địa chỉ không còn là dữ liệu giả khi dùng thật.
- Bố cục đọc được trên màn hình điện thoại và máy tính.
- Có tiêu đề/trích dẫn trang phù hợp khi chia sẻ; nội dung dùng tiếng Việt nhất quán.
- Không trình bày giá, lời chứng thực hoặc con số khách hàng giả định như dữ liệu đã kiểm chứng.

## 9. Câu hỏi khám phá để chốt trước nghiệp vụ đặt lịch

1. Cửa hàng ở đâu, có bao nhiêu chi nhánh và giờ mở cửa thế nào?
2. Dịch vụ thực tế, bảng giá, thời lượng và điều kiện nhận thú cưng là gì?
3. Khách đặt lịch theo slot cố định hay gửi yêu cầu để nhân viên gọi xác nhận?
4. Có nhận chó/mèo ở mọi giống, cân nặng, độ tuổi không? Yêu cầu tiêm phòng/giấy tờ nào?
5. Chính sách trễ giờ, đổi/hủy lịch, đặt cọc và hoàn tiền ra sao?
6. Khách muốn nhận xác nhận qua điện thoại, email hay Zalo?
7. Ai quản lý lịch và nội dung dịch vụ? Có cần nhiều vai trò nhân viên?
8. Có thu thập thông tin nhạy cảm về sức khỏe thú cưng không, và cần lưu trong bao lâu?
