import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import CardWithVideo from "@/components/CardWithVideo";

export default function ContactPage() {
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
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                언제든
                <br />
                <span className="text-[var(--accent)]">문의</span>
                해주세요
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                S.R&P 전문가가 귀하의 매장에 최적화된
                <br />
                솔루션을 무료로 제안해드립니다
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">전화 문의</h3>
                    <p className="text-white/80">010-5401-0732</p>
                    <p className="text-white/60 text-sm">평일 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">이메일</h3>
                    <p className="text-white/80">shinji9112@gmail.com</p>
                    <p className="text-white/60 text-sm">24시간 접수 가능</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">본사 위치</h3>
                    <p className="text-white/80">서울특별시 강남구</p>
                    <p className="text-white/60 text-sm">헌릉로 590길 11</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  무료 상담 신청
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      이름 *
                    </label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-black/50 text-black dark:text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-black/50 text-black dark:text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-black/50 text-black dark:text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      매장명
                    </label>
                    <input
                      type="text"
                      placeholder="매장 이름을 입력해주세요"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-black/50 text-black dark:text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">
                      문의 내용 *
                    </label>
                    <textarea
                      placeholder="문의하실 내용을 자세히 입력해주세요"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-black/50 text-black dark:text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[var(--accent)] text-white rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
                  >
                    상담 신청하기
                  </button>
                  <p className="text-white/60 text-sm text-center">
                    제출하신 정보는 상담 목적으로만 사용됩니다
                  </p>
                </form>
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
              상담 프로세스
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              간편하고 빠른 3단계 상담 과정
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-gradient-to-br from-[var(--accent)] to-[#2f9bb3] flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-white">1</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  상담 신청
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  간단한 정보를 입력하여 상담을 신청합니다. 24시간 이내 연락드립니다
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-gradient-to-br from-[var(--accent)] to-[#2f9bb3] flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-white">2</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  매장 분석
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  전문가가 매장을 방문하여 현장 조사 및 맞춤 솔루션을 제안합니다
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-gradient-to-br from-[var(--accent)] to-[#2f9bb3] flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-white">3</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  제안 및 설치
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  최적의 솔루션을 제안하고 빠르게 설치하여 운영을 시작합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - 4 Indicators */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              고객 지원
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              언제나 함께하는 S.R&P
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                24시간
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                응답 시간
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                빠른 답변 보장
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                무료
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                현장 방문
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                전문가 상담
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                7일
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                평균 설치
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                신속한 구축
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--accent)] mb-2">
                A/S
              </div>
              <div className="text-lg text-black dark:text-white font-medium mb-1">
                평생 지원
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                사후 관리 보장
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
            backgroundImage: "url(https://picsum.photos/1920/600?random=81)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 dark:from-black/90 dark:to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              더 궁금하신 내용이 있으신가요?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              서비스에 대해 더 자세히 알아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-[var(--accent)] text-white text-center rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
              >
                회사소개
              </Link>
              <Link
                href="/arss"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/20 transition-colors text-lg font-medium border border-white/30"
              >
                ARSS 서비스
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <section className="md:hidden py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              무료 상담 신청
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-black dark:text-white mb-2 text-sm font-medium">
                  이름 *
                </label>
                <input
                  type="text"
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-black dark:text-white mb-2 text-sm font-medium">
                  연락처 *
                </label>
                <input
                  type="tel"
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-black dark:text-white mb-2 text-sm font-medium">
                  이메일 *
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-black dark:text-white mb-2 text-sm font-medium">
                  매장명
                </label>
                <input
                  type="text"
                  placeholder="매장 이름을 입력해주세요"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-black dark:text-white mb-2 text-sm font-medium">
                  문의 내용 *
                </label>
                <textarea
                  placeholder="문의하실 내용을 자세히 입력해주세요"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--accent)] text-white rounded-full hover:bg-[#2f9bb3] transition-colors text-lg font-medium"
              >
                상담 신청하기
              </button>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm text-center">
                제출하신 정보는 상담 목적으로만 사용됩니다
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

