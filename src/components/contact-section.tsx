import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingLink } from "@/components/booking-link";
import { getContactActions, shopContact } from "@/lib/site-config";

export function ContactSection() {
  const { phoneHref, zaloHref, mapsHref } = getContactActions(shopContact);

  return (
    <section id="lien-he" aria-labelledby="contact-title" className="section-space">
      <div className="page-container">
        <div className="grid gap-8 rounded-[2rem] bg-secondary/70 p-5 sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:p-10">
          <div>
            <p className="section-eyebrow">GHÉ CHƠI CÙNG <span className="brand-name">FoPet</span></p>
            <h2 id="contact-title" className="section-title">Một góc nhỏ, <span className="text-primary">thật nhiều yêu thương.</span></h2>
            <p className="mt-4 leading-7 text-muted-foreground">Bạn có thể tìm thông tin cửa hàng và cách kết nối với FoPet tại đây.</p>
            {shopContact.isDemo && <p className="mt-4 text-sm leading-6 text-muted-foreground">Địa chỉ, giờ mở cửa và số liên hệ là dữ liệu minh họa cho dự án cá nhân. Các nút gọi và Zalo đang ở chế độ demo.</p>}
            <BookingLink className="mt-6">Trải nghiệm đặt lịch <ArrowUpRight aria-hidden="true" className="size-4" /></BookingLink>
          </div>
          <div className="min-w-0 rounded-3xl border border-border bg-background p-5 sm:p-7">
            {shopContact.isDemo && <span className="mb-6 inline-flex rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">THÔNG TIN MINH HỌA</span>}
            <dl className="space-y-6">
              {[
                { icon: MapPin, label: "Địa chỉ", value: shopContact.address },
                { icon: Clock3, label: "Giờ mở cửa", value: shopContact.hours },
                { icon: Phone, label: "Điện thoại / Zalo", value: shopContact.phone },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-3 text-sm text-muted-foreground"><Icon aria-hidden="true" className="size-5 shrink-0 text-primary" />{label}</dt>
                  <dd className="mt-1 break-words pl-8 font-semibold text-foreground">{value || "Đang cập nhật"}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button nativeButton={!phoneHref} render={phoneHref ? <a href={phoneHref} /> : undefined} disabled={!phoneHref} variant="secondary" size="lg">
                <Phone aria-hidden="true" className="size-4" /> Gọi điện{shopContact.isDemo && " (demo)"}
              </Button>
              <Button nativeButton={!zaloHref} render={zaloHref ? <a href={zaloHref} target="_blank" rel="noopener noreferrer" /> : undefined} disabled={!zaloHref} variant="secondary" size="lg">
                <MessageCircle aria-hidden="true" className="size-4" /> Zalo{shopContact.isDemo && " (demo)"}
              </Button>
            </div>
            {mapsHref && <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">{shopContact.isDemo ? "Xem khu vực minh họa" : "Xem đường đi"}<ArrowUpRight aria-hidden="true" className="size-4" /></a>}
          </div>
        </div>
      </div>
    </section>
  );
}
