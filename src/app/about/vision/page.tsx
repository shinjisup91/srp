import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithVideo from "@/components/CardWithVideo";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-full mb-6">
                Our Vision
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                기술로
                <br />
                세상을 바꾸는
                <br />
                <span className="text-[var(--accent)]">회사이념</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                S.R&P는 혁신적인 기술로 외식업의 미래를 만들어갑니다
                <br />
                사람과 기술이 조화를 이루는 세상을 꿈꿉니다
              </p>
            </div>
            <div className="hidden md:block">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url(https://picsum.photos/600/700?random=21)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
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
              우리의 핵심 가치
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              S.R&P가 추구하는 가치와 비전
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardWithVideo
              videoUrl="https://videos.pexels.com/video-files/3129671/3129671-sd-960x506-25fps.mp4"
              title="혁신 Innovation"
              description="끊임없는 연구개발로 업계를 선도하는 기술 혁신을 이뤄냅니다"
            />
            <CardWithVideo
              videoUrl="https://videos.pexels.com/video-files/3129840/3129840-sd-960x506-25fps.mp4"
              title="신뢰 Trust"
              description="고객과의 약속을 지키며 신뢰를 바탕으로 함께 성장합니다"
            />
            <CardWithVideo
              videoUrl="https://videos.pexels.com/video-files/3129957/3129957-sd-960x506-25fps.mp4"
              title="상생 Mutual Growth"
              description="고객의 성공이 곧 우리의 성공이라는 믿음으로 함께 발전합니다"
            />
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              우리의 목표
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              2030년까지 달성할 비전
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                #1
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                시장 점유율
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                업계 1위 달성
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                5000+
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                글로벌 설치
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                전 세계 업장 확대
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                100%
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                친환경
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                지속가능한 경영
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                AI
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                기술 선도
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                차세대 기술 혁신
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=25)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              S.R&P와 함께 미래를 만들어가세요
            </h2>
            <p className="text-lg text-white/90 mb-8">
              혁신적인 솔루션으로 귀하의 비즈니스를 성장시키겠습니다
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

