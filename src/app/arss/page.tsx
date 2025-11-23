import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithImage from "@/components/CardWithImage";

export default function ARSSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E4C58B]/20 to-[#FFA36C]/20 border border-[#E4C58B]/30 text-[#E4C58B] text-sm font-bold rounded-full mb-6 backdrop-blur-sm">
                ARSS Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                자동화의 미래
                <br />
                <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">ARSS</span>
                <br />
                서비스란?
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Automated Rail Serving System
                <br />
                레일 기반 자동화 서빙 솔루션으로 매장 운영을 혁신합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/arss/system"
                  className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
                >
                  시스템 자세히 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
                >
                  무료 상담
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url(https://picsum.photos/600/700?random=51)",
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
              ARSS 핵심 기능
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              매장 운영을 완전히 바꾸는 스마트 솔루션
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
              title="자동 서빙"
              description="레일 시스템을 통한 정확하고 신속한 자동 서빙으로 인건비를 절감합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              title="실시간 모니터링"
              description="매장 전체를 한눈에 파악하고 효율적으로 관리할 수 있습니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
              title="스마트 통합"
              description="POS 시스템과 완벽하게 연동되어 주문부터 서빙까지 자동화합니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              ARSS 도입 효과
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              측정된 도입 효과 목표
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                60%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                인건비 절감
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                평균 인건비 감소율
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                3분
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                평균 서빙 시간
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                주문부터 서빙까지
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                정확도
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                오배송 최소화
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                무중단 운영
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                안정적인 시스템
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=55)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ARSS 시스템을 경험해보세요
            </h2>
            <p className="text-lg text-white/90 mb-8">
              무료 상담을 통해 귀하의 매장에 최적화된 솔루션을 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/arss/system"
                className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
              >
                시스템 상세보기
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
              >
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

