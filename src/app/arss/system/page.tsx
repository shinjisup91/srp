import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithImage from "@/components/CardWithImage";

export default function SystemPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3129840/3129840-uhd_2560_1440_30fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-full mb-6">
                Core Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-[var(--accent)]">Automated Rail</span>
                <br />
                Serving System
                <br />
                핵심 기술
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                레일 기반의 정밀한 자동화 기술로
                <br />
                완벽한 서빙 솔루션을 제공합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/arss/br-tr"
                  className="px-8 py-4 bg-[var(--accent)] text-white text-center rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
                >
                  BR-TR 보기
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
                  backgroundImage: "url(https://picsum.photos/600/700?random=61)",
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
              시스템 구성 요소
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              완벽한 자동화를 위한 통합 시스템
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1581092160607-ee67d44c8dad?w=800&q=80"
              title="레일 시스템"
              description="정밀하게 설계된 레일 트랙으로 모든 테이블에 정확하게 서빙합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
              title="제어 시스템"
              description="스마트 제어 장치로 실시간 모니터링과 최적 경로 설정이 가능합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              title="통합 플랫폼"
              description="POS, 주방, 서빙을 하나로 연결하는 통합 관리 플랫폼을 제공합니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              기술 스펙
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              최첨단 기술로 완성된 시스템
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                15kg
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                최대 적재량
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                안정적인 운반
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                1.5m/s
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                이동 속도
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                빠르고 안전한 서빙
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                ±1cm
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                정밀도
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                정확한 위치 제어
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                IoT
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                스마트 연결
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                실시간 데이터 분석
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=65)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              첨단 기술을 매장에 도입하세요
            </h2>
            <p className="text-lg text-white/90 mb-8">
              전문가와 상담하여 최적의 시스템 구성을 확인해보세요
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--accent)] text-white text-center rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

