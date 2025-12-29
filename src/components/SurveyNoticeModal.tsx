"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface SurveyNoticeModalProps {
  /** 모달 표시 여부를 외부에서 제어할 때 사용 (선택사항) */
  open?: boolean;
  /** 외부에서 모달 닫기를 제어할 때 사용 (선택사항) */
  onClose?: () => void;
  /** "설문 참여하기" 버튼 클릭 시 실행할 콜백 (선택사항, 기본: /survey로 이동) */
  onConfirm?: () => void;
  /** 팝업 제목 (선택사항) */
  title?: string;
  /** 팝업 본문 (선택사항) */
  message?: string;
  /** localStorage 키 (선택사항, 기본: "surveyNoticeHidden") */
  storageKey?: string;
}

const STORAGE_KEY_DEFAULT = "surveyNoticeHidden";

/**
 * 안내 팝업 모달 컴포넌트
 * - 첫 방문 시 자동 표시
 * - "오늘 다시 보지 않기" 체크박스로 KST 자정까지 숨김 처리
 * - 접근성: 포커스 트랩, ESC 닫기, 오버레이 클릭 닫기
 */
export default function SurveyNoticeModal({
  open: controlledOpen,
  onClose: controlledOnClose,
  onConfirm,
  title = "안내드립니다",
  message = "S.R&P는 현재 특허 출원 진행 중입니다. 본 설문은 창업·IR 자료로만 활용되며, 투자 유치 이후 사업자 등록 및 본격 운영을 진행할 예정입니다. 참고하시어 설문에 참여해 주시면 감사하겠습니다.",
  storageKey = STORAGE_KEY_DEFAULT,
}: SurveyNoticeModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // hydration mismatch 방지
  useEffect(() => {
    setMounted(true);
  }, []);

  // localStorage 체크 및 초기 open 상태 설정
  useEffect(() => {
    if (!mounted) return;

    // 외부 제어 모드면 localStorage 체크 안 함
    if (controlledOpen !== undefined) {
      setIsOpen(controlledOpen);
      return;
    }

    const hiddenUntil = localStorage.getItem(storageKey);
    if (hiddenUntil) {
      const hiddenDate = new Date(hiddenUntil);
      const now = new Date();

      // KST 기준 자정 이후면 다시 표시
      if (now < hiddenDate) {
        setIsOpen(false);
        return;
      } else {
        // 만료되었으면 localStorage 제거
        localStorage.removeItem(storageKey);
      }
    }

    // 숨김 조건이 없으면 모달 표시
    setIsOpen(true);
  }, [mounted, controlledOpen, storageKey]);

  // 포커스 트랩 구현
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // 첫 포커스 설정
    closeButtonRef.current?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleTabKey);
    return () => modal.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, dontShowToday]);

  // body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    if (dontShowToday) {
      // KST 기준 다음 날 자정 계산
      const now = new Date();
      const kstOffset = 9 * 60; // KST는 UTC+9
      const kstNow = new Date(now.getTime() + kstOffset * 60 * 1000);
      
      const nextMidnight = new Date(kstNow);
      nextMidnight.setHours(24, 0, 0, 0);
      
      // UTC로 다시 변환
      const nextMidnightUTC = new Date(nextMidnight.getTime() - kstOffset * 60 * 1000);
      
      localStorage.setItem(storageKey, nextMidnightUTC.toISOString());
    }

    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setIsOpen(false);
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      router.push("/survey");
    }
    handleClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // 마운트 전이거나 닫혀있으면 렌더링 안 함
  if (!mounted || !isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={handleOverlayClick}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 (우상단) */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
          aria-label="모달 닫기"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 타이틀 */}
        <h2
          id="modal-title"
          className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          {title}
        </h2>

        {/* 본문 */}
        <p
          id="modal-description"
          className="mb-6 whitespace-pre-wrap text-base leading-relaxed text-gray-700 sm:text-lg"
        >
          {message}
        </p>

        {/* 체크박스 */}
        <div className="mb-6">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={dontShowToday}
              onChange={(e) => setDontShowToday(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
            <span className="text-sm text-gray-600 sm:text-base">
              오늘 다시 보지 않기
            </span>
          </label>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={handleClose}
            className="order-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:order-1 sm:text-base"
          >
            닫기
          </button>
          <button
            onClick={handleConfirm}
            className="order-1 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:order-2 sm:text-base"
          >
            설문 참여하기
          </button>
        </div>
      </div>
    </div>
  );
}

