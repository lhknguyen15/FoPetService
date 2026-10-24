import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  Bone,
  Brush,
  Heart,
  House,
  PawPrint,
  Scissors,
  Sparkles,
  Tag,
  ToyBrick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/booking-form";

const packages = [
  {
    icon: Bath,
    name: "Combo Tắm Thơm",
    description: "Tắm gội, sấy lông và vệ sinh cơ bản cho bé sạch sẽ, thơm tho.",
    price: "180.000đ",
    detail: "Thời lượng khoảng 60 phút",
  },
  {
    icon: Scissors,
    name: "Combo Spa Xinh",
    description: "Tắm gội, chải gỡ và tỉa lông gọn gàng theo dáng bé.",
    price: "320.000đ",
    detail: "Thời lượng khoảng 90 phút",
  },
  {
    icon: House,
    name: "Combo Vui Cả Ngày",
    description: "Không gian nghỉ ngơi, vui chơi và chăm sóc ban ngày cho bé.",
    price: "250.000đ",
    detail: "Tối đa 8 giờ trong ngày",
  },
];

const products = [
  {
    icon: Bone,
    category: "Dinh dưỡng",
    name: "Hạt dinh dưỡng mỗi ngày",
    description: "Công thức cân bằng cho chó trưởng thành.",
    price: "320.000đ",
    unit: "/ túi 1,5 kg",
  },
  {
    icon: ToyBrick,
    category: "Đồ chơi",
    name: "Bộ đồ chơi khám phá",
    description: "Giúp bé vận động và vui chơi tại nhà.",
    price: "89.000đ",
    unit: "/ bộ",
  },
  {
    icon: Brush,
    category: "Chăm sóc",
    name: "Bộ chăm lông mềm mượt",
    description: "Dầu tắm dịu nhẹ kèm khăn và lược chải.",
    price: "210.000đ",
    unit: "/ bộ",
  },
  {
    icon: Tag,
    category: "Phụ kiện",
    name: "Vòng cổ và dây dắt",
    description: "Phụ kiện chắc chắn cho những buổi dạo chơi.",
    price: "180.000đ",
    unit: "/ bộ",
  },
];

const newsItems = [
  {
    category: "Chăm sóc",
    title: "Chuẩn bị gì trước buổi spa đầu tiên của bé?",
    description: "Một vài bước nhỏ giúp bé làm quen với việc tắm và chăm sóc lông.",
    icon: Bath,
  },
  {
    category: "Góc của mèo",
    title: "Chọn đồ chơi giúp mèo vận động mỗi ngày",
    description: "Gợi ý hoạt động vui chơi phù hợp với tính cách của từng bé mèo.",
    icon: Sparkles,
  },
  {
    category: "Mẹo hay",
    title: "Chải lông đúng cách để bộ lông luôn khỏe",
    description: "Chọn lược và tần suất chải phù hợp với độ dài lông của thú cưng.",
    icon: Scissors,
  },
  {
    category: "Sức khỏe",
    title: "Đưa bé đi khám định kỳ nhẹ nhàng hơn",
    description: "Những món đồ quen thuộc có thể giúp bé an tâm khi ra ngoài.",
    icon: Heart,
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Bỏ qua điều hướng
      </a>

      <div className="flex items-center justify-center gap-2 bg-secondary px-4 py-2 text-center text-xs font-semibold tracking-wide text-[#765b31]">
        <PawPrint aria-hidden="true" className="size-3.5" />
        Chăm bé bằng cả sự dịu dàng
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e9dec8] bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 px-5 py-3 sm:px-8 md:flex-nowrap md:py-4">
          <Link href="#top" className="flex shrink-0 items-center" aria-label="FoPet Service, trang chủ">
            <Image
              src="/images/fopet-logo-transparent.png"
              alt="FoPet — dịch vụ thú cưng, chăm sóc, spa và shop đồ thú cưng"
              width={1024}
              height={1024}
              priority
              className="size-16 object-cover"
            />
          </Link>

          <nav aria-label="Điều hướng chính" className="order-3 flex w-full items-center justify-center gap-4 border-t border-[#e9dec8] pt-3 text-[11px] font-semibold text-[#715a3d] sm:gap-6 sm:text-xs md:order-none md:w-auto md:gap-7 md:border-0 md:pt-0 md:text-sm">
            <Link className="transition-colors hover:text-primary focus-visible:text-primary" href="#dich-vu">Dịch vụ</Link>
            <Link className="transition-colors hover:text-primary focus-visible:text-primary" href="#san-pham">Sản phẩm</Link>
            <Link className="transition-colors hover:text-primary focus-visible:text-primary" href="#lien-he">Liên hệ</Link>
            <Link className="transition-colors hover:text-primary focus-visible:text-primary" href="#tin-tuc">Tin tức</Link>
          </nav>

          <Button
            nativeButton={false}
            render={<Link href="#dat-lich" />}
            size="lg"
            className="h-11 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-none hover:bg-[#92702f]"
          >
            Đặt lịch <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </header>

      <section id="main-content" className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:py-16">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#89692e]">
            <Sparkles aria-hidden="true" className="size-3.5" />
            XIN CHÀO, FoPet ĐÂY!
          </p>
          <h1 className="max-w-[590px] font-heading text-[clamp(2.5rem,4.5vw,4.1rem)] font-normal leading-[1.08] tracking-[-0.05em] text-[#51371d]">
            Chăm bé khỏe vui,<br />
            <span className="text-primary">sen thêm an tâm.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#75654e]">
            FoPet Service là góc chăm sóc dành cho những người bạn bốn chân. Từ tắm gội, spa đến vui chơi ban ngày — chúng mình luôn lắng nghe tính cách và nhu cầu riêng của từng bé.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="#dich-vu" />}
              size="lg"
              className="h-12 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-none hover:bg-[#92702f]"
            >
              Xem combo dịch vụ <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="#dat-lich" />}
              variant="secondary"
              size="lg"
              className="h-12 rounded-full bg-secondary px-6 text-sm font-bold text-[#70552c] shadow-none hover:bg-[#eee3ce]"
            >
              Đặt lịch cho bé
            </Button>
          </div>
          <p className="mt-5 text-xs leading-6 text-[#837153]">
            Giá và thời lượng được tư vấn theo kích thước, giống và tình trạng lông của bé.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[780px] lg:justify-self-end">
          <div className="relative aspect-[1.83/1] overflow-hidden rounded-[2rem] bg-secondary sm:rounded-[2.5rem]">
            <Image
              src="/images/fopet-illustration.png"
              alt="Minh họa FoPet với dịch vụ chăm sóc, spa, huấn luyện thú cưng và cửa hàng đồ dùng"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="dich-vu" className="bg-secondary/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[11px] font-extrabold tracking-[0.15em] text-primary">COMBO CHĂM SÓC</p>
              <h2 className="font-heading text-2xl leading-tight tracking-tight text-[#54381c] sm:text-3xl lg:text-4xl">Chọn niềm vui <span className="text-primary">cho bé.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#75654e] sm:text-right">Các combo được thiết kế gọn gàng để sen dễ chọn. Giá cuối cùng tùy theo cân nặng và tình trạng thực tế của bé.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.name} className="group overflow-hidden rounded-[1.6rem] border border-[#e9dec8] bg-background py-0 shadow-none transition-colors hover:border-primary/40">
                  <CardContent className="p-0">
                    <div aria-hidden="true" className="flex aspect-square items-center justify-center bg-[#f1e6cc]">
                      <span className="grid size-24 place-items-center rounded-full bg-background text-primary">
                        <Icon className="size-12" strokeWidth={1.7} />
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-[#5a3c20]">{service.name}</h3>
                      <p className="mt-2 min-h-[3rem] text-sm leading-6 text-[#74644d]">{service.description}</p>
                      <p className="mt-5 text-xs font-semibold text-[#887451]">Giá tham khảo từ</p>
                      <p className="mt-1 text-2xl font-extrabold tracking-tight text-primary">{service.price}</p>
                      <p className="mt-1 text-xs text-[#887451]">{service.detail}</p>
                      <Button
                        nativeButton={false}
                        render={<Link href="#dat-lich" />}
                        variant="secondary"
                        size="lg"
                        className="mt-6 h-11 w-full rounded-full bg-secondary text-sm font-bold text-[#70552c] shadow-none hover:bg-[#eee3ce]"
                      >
                        Chọn combo <ArrowRight aria-hidden="true" className="size-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-5 text-center text-xs text-[#827052]">Giá trên trang là giá tham khảo cho mục đích demo; FoPet sẽ xác nhận trước khi phục vụ.</p>
        </div>
      </section>

      <section id="san-pham" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[11px] font-extrabold tracking-[0.15em] text-primary">GÓC ĐỒ DÙNG FoPet</p>
              <h2 className="font-heading text-2xl leading-tight tracking-tight text-[#54381c] sm:text-3xl lg:text-4xl">Chọn món quà <span className="text-primary">cho bé.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#75654e] sm:text-right">Một vài sản phẩm gợi ý cho bữa ăn, giờ chơi và chăm sóc hằng ngày.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.name} className="overflow-hidden rounded-[1.5rem] border border-[#e9dec8] bg-background py-0 shadow-none">
                  <CardContent className="p-0">
                    <div aria-hidden="true" className="flex aspect-square items-center justify-center bg-[#f1e6cc]">
                      <span className="grid size-24 place-items-center rounded-full bg-background text-primary">
                        <Icon className="size-12" strokeWidth={1.7} />
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">{product.category}</p>
                      <h3 className="mt-2 font-heading text-lg font-bold text-[#5a3c20]">{product.name}</h3>
                      <p className="mt-2 min-h-12 text-sm leading-6 text-[#74644d]">{product.description}</p>
                      <div className="mt-4 flex items-baseline gap-1.5">
                        <p className="text-xl font-extrabold tracking-tight text-primary">{product.price}</p>
                        <p className="text-xs text-[#887451]">{product.unit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button disabled size="lg" className="h-11 rounded-full bg-secondary px-6 text-sm font-bold text-[#70552c] shadow-none">
              Xem nhiều sản phẩm <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <p className="text-xs text-[#827052]">Danh mục sản phẩm sẽ được cập nhật trong các bước phát triển tiếp theo.</p>
          </div>
        </div>
      </section>

      <section id="tin-tuc" className="overflow-hidden bg-secondary/70 py-16 sm:py-20">
        <div className="mx-auto mb-9 flex max-w-7xl flex-col justify-between gap-4 px-5 sm:mb-12 sm:flex-row sm:items-end sm:px-8">
          <div>
            <p className="mb-3 text-[11px] font-extrabold tracking-[0.15em] text-primary">CÂU CHUYỆN FoPet</p>
            <h2 className="font-heading text-2xl leading-tight tracking-tight text-[#54381c] sm:text-3xl lg:text-4xl">Tin vui và mẹo <span className="text-primary">chăm bé.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#75654e] sm:text-right">Một vài bài viết minh họa để bạn khám phá thêm về thế giới thú cưng.</p>
        </div>

        <div className="news-marquee overflow-hidden" role="group" aria-roledescription="carousel" aria-label="Tin tức và mẹo chăm sóc thú cưng" tabIndex={0}>
          <div className="news-track flex w-max">
            {[false, true].map((isDuplicate) => (
              <div key={String(isDuplicate)} aria-hidden={isDuplicate} className="flex shrink-0 gap-5 pr-5">
                {newsItems.map((article) => {
                  const Icon = article.icon;
                  return (
                    <article key={article.title} className="w-[82vw] max-w-[340px] shrink-0 overflow-hidden rounded-[1.5rem] border border-[#e9dec8] bg-background">
                      <div className="flex h-36 items-center justify-center bg-[#eadcb5] text-primary">
                        <span className="grid size-16 place-items-center rounded-full bg-background/80">
                          <Icon aria-hidden="true" className="size-8" strokeWidth={1.7} />
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">{article.category}</p>
                        <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-[#5a3c20]">{article.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#74644d]">{article.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dat-lich" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div id="lien-he" className="max-w-lg scroll-mt-28">
            <p className="mb-3 text-[11px] font-extrabold tracking-[0.15em] text-primary">ĐẶT LỊCH CHO BÉ</p>
            <h2 className="font-heading text-2xl leading-tight tracking-tight text-[#54381c] sm:text-3xl lg:text-4xl">Hẹn FoPet <span className="text-primary">một ngày vui.</span></h2>
            <p className="mt-4 text-sm leading-7 text-[#75654e]">Để lại thông tin và combo bạn quan tâm. Nhân viên sẽ liên hệ để tư vấn, kiểm tra lịch trống và xác nhận thời gian phù hợp.</p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-secondary p-4 text-sm leading-6 text-[#70552f]">
              <PawPrint aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <p>Gửi yêu cầu chưa đồng nghĩa với việc lịch đã được giữ chỗ. Lịch chỉ được xác nhận sau khi FoPet liên hệ với bạn.</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-[#e9dec8] bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-center sm:px-8 md:flex-row md:text-left">
          <Link href="#top" className="flex items-center" aria-label="FoPet Service, lên đầu trang">
            <Image
              src="/images/fopet-logo-transparent.png"
              alt="Logo FoPet Service"
              width={1024}
              height={1024}
              className="size-14 object-cover"
            />
          </Link>
          <p className="text-xs text-[#74644d]">Chăm bé bằng cả sự dịu dàng. © 2026 FoPet Service</p>
          <Link href="#top" className="text-xs font-bold text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Lên đầu trang ↑</Link>
        </div>
      </footer>
    </main>
  );
}
