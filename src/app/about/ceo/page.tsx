import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import CardWithImage from "@/components/CardWithImage";

export default function CEOPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3196548/3196548-uhd_2560_1440_25fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-full mb-6">
                CEO Message
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                미래를 향한
                <br />
                도전과 혁신
                <br />
                <span className="text-[var(--accent)]">대표이사 인사말</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                안녕하십니까, S.R&P 대표이사 신지섭 입니다.
                <br />
                고객의 소리를 듣고 편히 쉬어 갈 수 있는 정거장이 되겠습니다. 감사합니다.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative" style={{ height: "400px" }}>
                <Image
                  src="/대표사진 신지섭.jpg"
                  alt="대표이사 신지섭"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview - 3 Cards */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              경영 철학
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              S.R&P를 이끄는 핵심 경영 원칙
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              title="고객 최우선"
              description="고객의 성공이 곧 우리의 성공입니다. 고객 가치 창출에 모든 역량을 집중합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
              title="지속적 혁신"
              description="현재에 안주하지 않고 끊임없이 혁신하며 미래를 준비합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
              title="사회적 책임"
              description="기업의 사회적 책임을 다하며 지속 가능한 성장을 추구합니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              리더십 키워드
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              대표이사가 추구하는 4가지 가치
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                Vision
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                편의성성
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                명확한 방향 제시
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                Passion
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                열정
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                도전하는 자세
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                Integrity
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                정직
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                투명한 경영
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                Teamwork
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                협력
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                함께하는 성장
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://picsum.photos/1920/600?random=45)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              함께 성장할 파트너를 찾습니다
            </h2>
            <p className="text-lg text-white/90 mb-8">
              S.R&P와 함께 외식업의 미래를 만들어가실 분을 기다립니다
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--accent)] text-white text-center rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

