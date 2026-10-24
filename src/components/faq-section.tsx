import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  { id: "pricing", question: "Giá combo được tính như thế nào?", answer: "Giá trên trang là mức tham khảo minh họa. Khi vận hành, giá dự kiến phụ thuộc vào loài, kích thước, tình trạng lông và nhu cầu của bé; FoPet sẽ tư vấn mức cuối cùng trước khi bạn đồng ý sử dụng dịch vụ." },
  { id: "prepare", question: "Mình nên chuẩn bị gì trước buổi spa đầu tiên?", answer: "Bạn có thể ghi lại thói quen, điều bé không thích và các lưu ý chăm sóc trong form. Yêu cầu cụ thể trước buổi hẹn cần được trao đổi với cửa hàng khi xác nhận lịch." },
  { id: "confirmation", question: "Gửi form có nghĩa là lịch đã được xác nhận chưa?", answer: "Chưa. Trong bản dùng thử này, form chỉ kiểm tra thông tin trên trình duyệt và chưa gửi hoặc lưu dữ liệu. Quy trình dự kiến khi vận hành sẽ cần nhân viên liên hệ, kiểm tra lịch trống và xác nhận với bạn." },
  { id: "reschedule", question: "Mình có thể đổi hoặc hủy lịch không?", answer: "Bản demo chưa tạo lịch hẹn thực tế. Khi triển khai thật, bạn cần liên hệ cửa hàng để trao đổi việc đổi hoặc hủy lịch; thời hạn và điều kiện sẽ được công bố sau khi chốt chính sách." },
];

export function FaqSection() {
  return (
    <section id="cau-hoi" aria-labelledby="faq-title" className="section-space bg-secondary/40">
      <div className="page-container grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="section-eyebrow">GỠ RỐI CHO SEN</p>
          <h2 id="faq-title" className="section-title">Một vài điều <span className="text-primary">bạn muốn biết.</span></h2>
          <p className="mt-4 leading-7 text-muted-foreground">Tìm hiểu trước một chút để buổi hẹn của bé nhẹ nhàng hơn.</p>
        </div>
        <Accordion role="group" aria-label="Câu hỏi thường gặp" className="min-w-0 rounded-3xl border border-border bg-background px-5 sm:px-7">
          {questions.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
