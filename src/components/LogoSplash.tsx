"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LogoSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(0); // 0: particles gathering, 1: logo visible, 2: fade out

  useEffect(() => {
    // 파티클 모이는 애니메이션
    const gatherTimer = setTimeout(() => {
      setAnimationStage(1);
    }, 800);

    // 로고 표시
    const logoTimer = setTimeout(() => {
      setAnimationStage(2);
    }, 2500);

    // 전체 애니메이션 종료
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(gatherTimer);
      clearTimeout(logoTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  // 파티클 생성 (금색 입자들)
  const particles = Array.from({ length: 40 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 40;
    const distance = 400 + Math.random() * 200;
    const startX = Math.cos(angle) * distance;
    const startY = Math.sin(angle) * distance;
    const delay = Math.random() * 0.3;
    const duration = 0.8 + Math.random() * 0.4;

    return (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: i % 3 === 0 
            ? "#E4C58B" 
            : i % 3 === 1 
            ? "#FFA36C" 
            : "linear-gradient(135deg, #E4C58B, #FFA36C)",
          boxShadow: `0 0 10px ${i % 2 === 0 ? "#E4C58B" : "#FFA36C"}`,
          left: "50%",
          top: "50%",
          transform: animationStage === 0 
            ? `translate(${startX}px, ${startY}px) scale(0)` 
            : animationStage === 1
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0)",
          transition: animationStage === 0 
            ? "none"
            : animationStage === 1
            ? `all ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`
            : "all 0.6s ease-out",
          opacity: animationStage === 2 ? 0 : 1,
        }}
      />
    );
  });

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#15273D] transition-opacity duration-1000 ${
        animationStage === 2 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E4C58B]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFA36C]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* 파티클 컨테이너 */}
      <div className="relative w-full h-full">
        {particles}
      </div>

      {/* 로고 */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: animationStage >= 1 ? 1 : 0,
          transform: animationStage >= 1 
            ? "scale(1)" 
            : "scale(0.5)",
          transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s",
        }}
      >
        <div className="relative">
          {/* 로고 글로우 효과 */}
          <div 
            className="absolute inset-0 blur-3xl opacity-60"
            style={{
              background: "radial-gradient(circle, #E4C58B 0%, #FFA36C 50%, transparent 70%)",
              transform: "scale(1.5)",
            }}
          ></div>
          
          {/* 실제 로고 */}
          <div className="relative">
            <Image
              src="/S.R&P 로고.png"
              alt="S.R&P 로고"
              width={400}
              height={400}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* 회전하는 링 */}
          <div
            className="absolute inset-0 rounded-full border-2 border-[#E4C58B]/30 animate-spin"
            style={{
              animationDuration: "3s",
              transform: "scale(1.3)",
            }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border-2 border-[#FFA36C]/20 animate-spin"
            style={{
              animationDuration: "4s",
              animationDirection: "reverse",
              transform: "scale(1.5)",
            }}
          ></div>
        </div>
      </div>

      {/* 텍스트 애니메이션 */}
      <div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center"
        style={{
          opacity: animationStage === 1 ? 1 : 0,
          transform: animationStage === 1 
            ? "translateY(0)" 
            : "translateY(20px)",
          transition: "all 0.8s ease-out 1.2s",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">
            S.R&P
          </span>
        </h1>
        <p className="text-white/70 text-sm md:text-base">
          Smart Restaurant & Pub
        </p>
      </div>

      {/* 하단 로딩 바 */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] rounded-full"
          style={{
            width: animationStage === 0 ? "0%" : animationStage === 1 ? "100%" : "100%",
            transition: "width 2s ease-out",
          }}
        ></div>
      </div>
    </div>
  );
}

