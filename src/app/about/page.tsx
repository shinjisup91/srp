import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithImage from "@/components/CardWithImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3196085/3196085-uhd_2560_1440_25fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E4C58B]/20 to-[#FFA36C]/20 border border-[#E4C58B]/30 text-[#E4C58B] text-sm font-bold rounded-full mb-6 backdrop-blur-sm">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                혁신으로
                <br />
                미래를 만드는
                <br />
                <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">S.R&P</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                S.R&P는 비대면 자동화 서빙 시스템의 선두주자로서
                <br />
                외식업계의 디지털 혁신을 이끌어가고 있습니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/vision"
                  className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
                >
                  회사이념 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
                >
                  문의하기
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url(https://picsum.photos/600/700?random=11)",
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
              S.R&P를 선택해야 하는 이유
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              기술과 혁신으로 고객의 성공을 만들어갑니다
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              title="맞춤형 인테리어"
              description="각 매장의 콘셉트와 분위기에 맞춘 최적화된 레일 시스템 설치"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
              title="이색적인 고객경험"
              description="레일 서빙 시스템으로 재미있고 특별한 경험을 선사합니다"
            />
            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
              title="편리한 자동화 서비스"
              description="터치 한 번으로 간편하게 주문하고 자동으로 서빙받는 스마트한 시스템"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              숫자로 보는 S.R&P
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              신뢰할 수 있는 성과를 위한 목표
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                구축 업장
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                전국 업장 설치 완료
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                고객 만족도
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                높은 만족도 평가
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                신생
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                신생 기업
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                새로운 혁신의 시작
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                고객 지원
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                언제나 함께합니다
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=15)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              더 자세한 이야기가 궁금하신가요?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              S.R&P의 비전과 가치, 그리고 팀을 더 자세히 알아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/vision"
                className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
              >
                회사이념
              </Link>
              <Link
                href="/about/ceo"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
              >
                대표소개
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

