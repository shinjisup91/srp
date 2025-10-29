import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithVideo from "@/components/CardWithVideo";

export default function BRTRPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_25fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-full mb-6">
                BR-TR Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                차세대 서빙 로봇
                <br />
                <span className="text-[var(--accent)]">BR-TR</span>
                <br />
                시스템
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Beverage Rail Transport Robot
                <br />
                음료 전문 레일 운송 로봇으로 더욱 스마트한 서비스를 제공합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/arss"
                  className="px-8 py-4 bg-[var(--accent)] text-white text-center rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
                >
                  ARSS 전체 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/20 transition-colors text-lg font-medium border border-white/30"
                >
                  도입 문의
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url(https://picsum.photos/600/700?random=71)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview - 3 Cards */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              BR-TR 특장점
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              음료 서빙에 최적화된 전문 솔루션
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithVideo
              videoUrl="https://videos.pexels.com/video-files/2611250/2611250-sd-960x506-25fps.mp4"
              title="안정적 운반"
              description="진동 방지 시스템으로 음료를 흘리지 않고 안전하게 운반합니다"
            />
            <CardWithVideo
              videoUrl="https://videos.pexels.com/video-files/3141211/3141211-sd-960x506-25fps.mp4"
              title="대용량 적재"
              description="한 번에 여러 테이블의 주문을 동시에 서빙할 수 있습니다"
            />
            <CardWithVideo
              videoUrl="https://videos.pexels.com/video-files/3129840/3129840-sd-960x506-25fps.mp4"
              title="자동 회수"
              description="빈 잔과 그릇을 자동으로 회수하여 테이블을 깨끗하게 유지합니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              BR-TR 성능
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              검증된 성능 지표
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                20잔
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                동시 운반
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                최대 수용량
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                0%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                유출률
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                진동 방지 기술
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                2분
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                평균 서빙
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                주방에서 테이블까지
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                98%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                가동률
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                높은 안정성
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=75)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              BR-TR로 매장 운영을 혁신하세요
            </h2>
            <p className="text-lg text-white/90 mb-8">
              실제 데모를 통해 BR-TR의 성능을 직접 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--accent)] text-white text-center rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/arss/system"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/20 transition-colors text-lg font-medium border border-white/30"
              >
                시스템 전체 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

