import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithImage from "@/components/CardWithImage";

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
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E4C58B]/20 to-[#FFA36C]/20 border border-[#E4C58B]/30 text-[#E4C58B] text-sm font-bold rounded-full mb-8 backdrop-blur-sm">
                천장 레일 서빙 시스템의 완성
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                C4BR & BU
                <br />
                <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">서빙 레일 시스템</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/95 mb-8 font-medium leading-relaxed">
                각 테이블을 마크하는<br className="md:hidden" /> 레일 위를 달리는 풍선형 서빙 유닛
              </h2>
              <p className="text-lg text-white/85 mb-6 leading-relaxed">
                C4BR(순환형 Balloon Rail)과 BU(Balloon Unit)가 결합된<br className="hidden md:block" />
                음료 특화 자동 서빙 모듈입니다.
              </p>
              <p className="text-base text-white/80 mb-10 leading-relaxed">
                바닥 로봇 없이 천장 레일만으로 매장 전체를 커버하며,<br className="hidden md:block" />
                QR 주문 시 BU가 테이블까지 직접 가져다줍니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/arss"
                  className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
                >
                  ARSS 전체 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              C4BR/BU 특장점
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              천장 레일 기반 자동 서빙의 핵심 모듈
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
              title="음료에 최적화된 안정적 운반"
              description="진동·쏠림 최소화 구조와 부드러운 가감속으로 500cc 생맥주·칵테일도 코너 구간에서 흘림 없이 도착합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80"
              title="매장 테이블 수에 맞는 BU 대수 설계"
              description="매장 평수·테이블 수·동선에 따라 BU 대수를 설계하며, 일반적으로 테이블 수의 절반 수준으로 배치해 회전 효율을 높입니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
              title="보는 순간 사진 찍고 싶은 경험"
              description="천장 레일을 달리는 풍선형 유닛의 비주얼과 LED 연출로 사진·영상 공유를 유도하며 브랜드 스토리를 강화합니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              C4BR/BU 성능 지표
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              설계 목표 값 (Version 1 기준)
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                20잔
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                동시 운반
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                1레일 기준 설계 목표
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                0%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                유출률 목표
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                가감속 알고리즘
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                2분
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                평균 서빙 시간
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                매장 규모에 따라 상이
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                시스템 가동률
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                모듈화 구조 및 유지보수
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              C4BR/BU로 매장의<br className="md:hidden" /> '마지막 10m'를 자동화하세요
            </h2>
            <p className="text-lg md:text-xl text-white/95 mb-6 leading-relaxed">
              천장 레일 위 풍선 유닛으로,<br className="md:hidden" />
              서빙과 브랜딩을 한 번에 실현합니다.
            </p>
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              실제 데모·시연을 통해 C4BR/BU 동작을 확인하실 수 있으며,<br className="hidden lg:block" />
              1호점·파일럿 매장 도입 및 기존 매장 리모델링(천장형/타워형/벽걸이형) 등<br className="hidden lg:block" />
              다양한 시나리오가 가능합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/arss/system"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
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

