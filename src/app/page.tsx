"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";
import { useState, useEffect } from "react";
import SurveyNoticeModal from "@/components/SurveyNoticeModal";

export default function Home() {
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // 안내 모달이 표시되어야 하는지 확인
    const noticeHiddenUntil = localStorage.getItem("surveyNoticeHidden");
    const shouldShowNotice = !noticeHiddenUntil || new Date() > new Date(noticeHiddenUntil);

    if (shouldShowNotice) {
      // 안내 모달을 먼저 표시
      setShowNoticeModal(true);
    } else {
      // 안내 모달을 건너뛰고 설문 팝업 체크
      checkAndShowSurveyPopup();
    }
  }, [mounted]);

  const checkAndShowSurveyPopup = () => {
    // 약간의 딜레이 후 설문 팝업 표시
    setTimeout(() => {
      const hideUntil = localStorage.getItem("surveyPopupHideUntil");
      if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
        setShowSurveyPopup(true);
      }
    }, 500);
  };

  const handleNoticeModalClose = () => {
    setShowNoticeModal(false);
    // 안내 모달이 닫히면 설문 팝업 체크
    checkAndShowSurveyPopup();
  };

  const handleClosePopup = () => {
    setShowSurveyPopup(false);
  };

  const handleCloseTodayPopup = () => {
    // 24시간 후까지 팝업 숨기기
    const tomorrow = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("surveyPopupHideUntil", tomorrow.toString());
    setShowSurveyPopup(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* 1. 안내 팝업 (새로운 컴포넌트) */}
      {mounted && (
        <SurveyNoticeModal
          open={showNoticeModal}
          onClose={handleNoticeModalClose}
        />
      )}

      {/* 2. 설문조사 QR 팝업 (기존) */}
      {showSurveyPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-in-out]">
          <div className="bg-white dark:bg-[#15273D] rounded-3xl p-6 sm:p-8 shadow-2xl w-full max-w-lg border-2 border-[#E4C58B]/50 relative">
            {/* 닫기 버튼 */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="닫기"
            >
              <span className="text-2xl text-gray-600 dark:text-white">×</span>
            </button>

            <div className="text-center">
              {/* 환영 인사 */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3">
                  S.R&P에 오신 것을 환영합니다! 🎉
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  외식업 운영에 대한 귀중한 의견을 듣고 싶습니다.
                  <br />
                  설문에 참여해주시면 감사하겠습니다.
                </p>
              </div>

              {/* QR 코드 */}
              <div className="mb-6 flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <Image
                    src="/설문조사.jpg"
                    alt="설문조사 QR 코드"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* 설명 */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                QR 코드를 스캔하거나 아래 버튼을 클릭하여<br />
                설문조사에 참여해주세요. (약 7-10분 소요)
              </p>

              {/* 버튼들 */}
              <div className="space-y-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScn5M2AJmxheDW8rVNuJHvd5xbyr4PB7VZrWKhS3uwFM7s34g/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-xl hover:shadow-[#FFA36C]/50 transition-all font-bold text-lg"
                >
                  설문조사 참여하기
                </a>
                <button
                  onClick={handleCloseTodayPopup}
                  className="block w-full px-6 py-3 text-zinc-600 dark:text-zinc-400 text-center text-sm hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                >
                  오늘 하루 보지 않기
                </button>
              </div>

              {/* 감사 인사 */}
              <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                귀중한 시간 내어 참여해주셔서 진심으로 감사드립니다. 🙏
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E4C58B]/20 to-[#FFA36C]/20 border border-[#E4C58B]/30 text-[#E4C58B] text-sm font-bold rounded-full mb-6 backdrop-blur-sm">
                비대면 자동화 서빙 시스템
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                최소 인원으로
                <br />
                최대의 효과를
                <br />
                제공하는
                <br />
                <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">S.R&P</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Automated Rail-based Serving System으로
                <br />
                주점 운영의 새로운 패러다임을 경험하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
                >
                  더 알아보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
                >
                  무료 상담 신청
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="rounded-2xl flex items-center justify-center"
                style={{
                  height: "400px",
                }}
              >
                <Image
                  src="/S.R&P 로고.png"
                  alt="S.R&P 로고"
                  width={600}
                  height={500}
                  className="object-contain w-full h-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
