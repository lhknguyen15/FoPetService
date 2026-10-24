import { HeartHandshake, ListChecks, MessageCircle, PawPrint, CalendarCheck, ArrowRight } from "lucide-react";

const benefits = [
  { icon: ListChecks, title: "Dễ chọn đúng nhu cầu", description: "Nội dung combo, thời lượng và giá tham khảo được trình bày cùng nhau để bạn dễ cân nhắc." },
  { icon: HeartHandshake, title: "Lắng nghe điều bé cần", description: "Bạn có thể chia sẻ thói quen và lưu ý riêng của bé ngay trong yêu cầu đặt lịch." },
  { icon: MessageCircle, title: "Rõ ràng trước buổi hẹn", description: "Quy trình dự kiến có bước tư vấn và xác nhận trước khi bắt đầu chăm sóc." },
];

const steps = [
  { icon: PawPrint, title: "Chọn dịch vụ", description: "Tìm combo phù hợp và để lại thông tin của bạn cùng bé." },
  { icon: MessageCircle, title: "Tư vấn & xác nhận", description: "FoPet trao đổi nhu cầu, mức giá và thời gian phù hợp trước buổi hẹn." },
  { icon: CalendarCheck, title: "Đưa bé đến FoPet", description: "Mang bé đến theo lịch đã xác nhận và trao đổi thêm các lưu ý cần thiết." },
];

export function CareJourney() {
  return (
    <section id="quy-trinh" aria-labelledby="care-title" className="section-space">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow">VÌ SAO CHỌN FoPet</p>
          <h2 id="care-title" className="section-title">An tâm từ những <span className="text-primary">điều nhỏ.</span></h2>
          <p className="mt-4 leading-7 text-muted-foreground">Một trải nghiệm dễ hiểu cho sen, với những lưu ý riêng dành cho từng bé.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary"><Icon aria-hidden="true" className="size-6" /></span>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-secondary/60 p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-heading text-xl text-foreground sm:text-2xl">Một buổi hẹn, ba bước nhẹ nhàng.</h3>
            <span className="rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-secondary-foreground">Quy trình dự kiến · Demo</span>
          </div>
          <ol className="mt-7 grid gap-7 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="relative min-w-0">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-background text-sm font-bold text-primary">0{index + 1}</span>
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  {index < 2 && <ArrowRight aria-hidden="true" className="ml-auto hidden size-5 text-primary/60 md:block" />}
                </div>
                <h4 className="mt-4 font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
