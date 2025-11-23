import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import CardWithImage from "@/components/CardWithImage";

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E4C58B]/20 to-[#FFA36C]/20 border border-[#E4C58B]/30 text-[#E4C58B] text-sm font-bold rounded-full mb-6 backdrop-blur-sm">
                Brand Identity
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                혁신의 상징
                <br />
                <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">S.R&P</span>
                <br />
                브랜드 아이덴티티
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                S.R&P 브랜드는 기술과 개성, 그리고 편의성을 상징합니다
                <br />
                우리의 정체성을 담은 브랜드 스토리를 소개합니다
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black p-8 md:p-12 flex items-center justify-center"
                style={{
                  height: "400px",
                }}
              >
                <Image
                  src="/S.R&P 로고.png"
                  alt="S.R&P 로고"
                  width={600}
                  height={500}
                  className="object-contain w-full h-full"
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
              브랜드 구성 요소
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              S.R&P 브랜드를 구성하는 핵심 요소들
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-[#15273D]">S.R&P</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  로고타입
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  '나'라는 정거장에 '행복'을 배달해 드립니다                
                </p>
              </div>
            </div>

            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80"
              title="브랜드 컬러"
              description="새벽을 상징하는 네이비, 노을을 상징하는 오렌지를 사용합니다"
            />

            <CardWithImage
              imageUrl="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80"
              title="비주얼 아이덴티티"
              description="열기구를 통해 동심의 향수를 일으킵니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              브랜드 원칙
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              우리가 지키는 4가지 디자인 원칙
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                Simple
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                개성
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                단순함
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                Modern
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                포근함
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                깔끔함
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                Trust
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                신뢰성
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                믿음을 주는 이미지
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent mb-2">
                Tech
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                기술적
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                혁신을 담은 표현
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=32)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              S.R&P 브랜드와 함께하세요
            </h2>
            <p className="text-lg text-white/90 mb-8">
              혁신적인 브랜드 가치를 경험하고 싶으신가요?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

