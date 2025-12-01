import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SystemPage() {
  return (
    <div className="min-h-screen bg-[#15273D]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#15273D] via-[#1a3048] to-[#14273C]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #E4C58B 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
            <div>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#E4C58B]/20 to-[#FFA36C]/20 border border-[#E4C58B]/30 text-[#E4C58B] text-sm font-bold rounded-full mb-8 backdrop-blur-sm">
                AUTOMATED RAIL-BASED SERVING SYSTEM
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Smart Restaurant
                <br />
                <span className="bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] bg-clip-text text-transparent">
                  & Pub
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-4 leading-relaxed">
                레일 기반 자동화 서빙 시스템으로
              </p>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                인건비 절감, 회전율 증가, 매출 극대화를 한 번에 실현하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/arss/system#modules"
                  className="px-8 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
                >
                  시스템 소개 보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
                >
                  도입 상담 요청
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0 relative">
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E4C58B]/20 hover:border-[#E4C58B]/40 transition-all duration-300">
                <div 
                  className="h-[500px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15273D] via-transparent to-transparent"></div>
                </div>
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#14273C]/90 backdrop-blur-md rounded-2xl p-6 border border-[#E4C58B]/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-[#FFA36C]">50%</div>
                      <div className="text-sm text-white/70">인건비 절감</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#FFA36C]">2배</div>
                      <div className="text-sm text-white/70">회전율 향상</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#FFA36C]">24/7</div>
                      <div className="text-sm text-white/70">무인 운영</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARSS System Overview Section */}
      <section className="py-24 bg-[#1a3048]" id="overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#E4C58B]/10 text-[#E4C58B] text-sm font-bold rounded-full mb-4 border border-[#E4C58B]/20">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ARSS 시스템 구조
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Client 1~4, Server, Bridge로 구성된 통합 자동화 시스템
            </p>
          </div>
          
          {/* System Flow Diagram */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Client Stage */}
              <div className="bg-gradient-to-br from-[#14273C] to-[#1a3048] rounded-2xl p-8 border-2 border-[#E4C58B]/20 hover:border-[#E4C58B]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-[#15273D]">C</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Client Layer</h3>
                  <p className="text-sm text-[#E4C58B]">고객 접점</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#15273D]/50 rounded-lg p-3 border border-[#E4C58B]/10">
                    <div className="font-bold text-white text-sm mb-1">Client 1 - 주문</div>
                    <p className="text-xs text-white/60">QR/Web 기반 주문</p>
                  </div>
                  <div className="bg-[#15273D]/50 rounded-lg p-3 border border-[#E4C58B]/10">
                    <div className="font-bold text-white text-sm mb-1">Client 2 - 자판기</div>
                    <p className="text-xs text-white/60">음료 자동 배출</p>
                  </div>
                  <div className="bg-[#15273D]/50 rounded-lg p-3 border border-[#E4C58B]/10">
                    <div className="font-bold text-white text-sm mb-1">Client 3 - 디스펜서</div>
                    <p className="text-xs text-white/60">생맥주 자동 제공</p>
                  </div>
                  <div className="bg-[#15273D]/50 rounded-lg p-3 border border-[#E4C58B]/10">
                    <div className="font-bold text-white text-sm mb-1">Client 4 - 레일</div>
                    <p className="text-xs text-white/60">Balloon Rail 서빙</p>
                  </div>
                </div>
              </div>

              {/* Server Stage */}
              <div className="bg-gradient-to-br from-[#14273C] to-[#1a3048] rounded-2xl p-8 border-2 border-[#FFA36C]/30 hover:border-[#FFA36C]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA36C]/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#FFA36C] to-[#E4C58B] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-[#15273D]">CS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Client Server</h3>
                  <p className="text-sm text-[#FFA36C]">중앙 관제</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#15273D]/50 rounded-lg p-4 border border-[#FFA36C]/20">
                    <div className="font-bold text-white mb-2">통합 제어</div>
                    <ul className="space-y-1 text-xs text-white/70">
                      <li>• 실시간 주문 관리</li>
                      <li>• 레일 경로 최적화</li>
                      <li>• 테이블 상태 모니터링</li>
                      <li>• 데이터 분석 및 리포트</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bridge Stage */}
              <div className="bg-gradient-to-br from-[#14273C] to-[#1a3048] rounded-2xl p-8 border-2 border-[#E4C58B]/20 hover:border-[#E4C58B]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-[#15273D]">CB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Client Bridge</h3>
                  <p className="text-sm text-[#E4C58B]">연결 허브</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#15273D]/50 rounded-lg p-4 border border-[#E4C58B]/10">
                    <div className="font-bold text-white mb-2">물리적 연결 허브</div>
                    <ul className="space-y-1 text-xs text-white/70">
                      <li>• C2→C3→C4 컨베이어/브릿지</li>
                      <li>• 데이터 전달 및 배차 연결</li>
                      <li>• 프로토콜 변환, 부하 분산</li>
                      <li>• 명령 중계 레이어</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow Arrow Indicator */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col gap-2 text-white/50 text-sm">
                <div className="flex items-center gap-4 justify-center">
                  <span className="text-[#E4C58B] font-bold">기본 순환:</span>
                  <span>C1 → C2 → C3 → C4</span>
                </div>
                <div className="flex items-center gap-4 justify-center text-xs">
                  <span className="text-[#FFA36C] font-bold">상세 순환:</span>
                  <span>C1 → CS → C2 → CB → C3 → CB → C4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Modules Section */}
      <section className="py-24 bg-[#15273D]" id="modules">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FFA36C]/10 text-[#FFA36C] text-sm font-bold rounded-full mb-4 border border-[#FFA36C]/20">
              CORE MODULES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              주요 모듈 소개
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              완벽한 자동화를 위한 6개의 핵심 컴포넌트
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Client 1 */}
            <div className="group bg-gradient-to-br from-[#1a3048] to-[#14273C] rounded-2xl p-8 border border-[#E4C58B]/20 hover:border-[#E4C58B]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/20 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-[#15273D]">C1</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#E4C58B] group-hover:animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E4C58B] transition-colors">
                Client 1 - 테이블 주문 시스템
              </h3>
              <p className="text-white/60 mb-4 leading-relaxed">
                고객 QR/Web 기반 주문으로 메뉴 선택부터 결제까지 간편하게 처리합니다
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• 메뉴 선택, 옵션, 요청사항 입력</li>
                <li>• 기본 결제 (전체/인원수 분할)</li>
                <li>• 주문 진행상황 UI & C4BR 번호 표시</li>
              </ul>
            </div>

            {/* Client 2 */}
            <div className="group bg-gradient-to-br from-[#1a3048] to-[#14273C] rounded-2xl p-8 border border-[#E4C58B]/20 hover:border-[#E4C58B]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/20 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-[#15273D]">C2</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#E4C58B] group-hover:animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E4C58B] transition-colors">
                Client 2 - 음료 자동 자판기 시스템
              </h3>
              <p className="text-white/60 mb-4 leading-relaxed">
                병/캔/병음료를 자동으로 배출하여 CB 시작점까지 전달합니다
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• C1/CS 주문 정보 기반 자동 동작</li>
                <li>• 다양한 음료 타입 지원</li>
                <li>• 잔/음료 자동 전달</li>
              </ul>
            </div>

            {/* Client 3 */}
            <div className="group bg-gradient-to-br from-[#1a3048] to-[#14273C] rounded-2xl p-8 border border-[#FFA36C]/30 hover:border-[#FFA36C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA36C]/20 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFA36C] to-[#E4C58B] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-[#15273D]">C3</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FFA36C] group-hover:animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFA36C] transition-colors">
                Client 3 - 생맥주 자동 디스펜서 시스템 ★
              </h3>
              <p className="text-white/60 mb-4 leading-relaxed">
                잔 감지 센서 기반으로 자동 디스펜싱하여 C4 적재 위치로 전달합니다
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• 자동 잔 감지 및 디스펜싱</li>
                <li>• 완성된 잔 자동 전달</li>
              </ul>
            </div>

            {/* Client 4 */}
            <div className="group bg-gradient-to-br from-[#1a3048] to-[#14273C] rounded-2xl p-8 border border-[#E4C58B]/20 hover:border-[#E4C58B]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/20 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-[#15273D]">C4</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#E4C58B] group-hover:animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFA36C] transition-colors">
                Client 4 - Balloon Rail / Serving Unit ★
              </h3>
              <p className="text-white/60 mb-4 leading-relaxed">
                천장/타워/벽걸이형 순환 레일 위를 이동하는 BU/BR로 테이블 앞 정밀 정차합니다
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• 속도 제어 / 정차 포인트 / 위치 추적</li>
                <li>• 센서 기반 정밀 제어</li>
                <li>• LED·광고·이벤트 모듈 탑재 가능</li>
              </ul>
            </div>

            {/* Client Server */}
            <div className="group bg-gradient-to-br from-[#1a3048] to-[#14273C] rounded-2xl p-8 border border-[#FFA36C]/30 hover:border-[#FFA36C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA36C]/20 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFA36C] to-[#E4C58B] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-[#15273D]">CS</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FFA36C] group-hover:animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFA36C] transition-colors">
                Client Server ★
              </h3>
              <p className="text-white/60 mb-4 leading-relaxed">
                모든 클라이언트를 통합 관리하는 중앙 서버. 데이터 분석과 최적화를 담당합니다
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• 실시간 모니터링 대시보드</li>
                <li>• 경로 최적화 알고리즘</li>
                <li>• 매출/재고 통계 분석</li>
              </ul>
            </div>

            {/* Client Bridge */}
            <div className="group bg-gradient-to-br from-[#1a3048] to-[#14273C] rounded-2xl p-8 border border-[#E4C58B]/20 hover:border-[#E4C58B]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/20 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-[#15273D]">CB</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#E4C58B] group-hover:animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E4C58B] transition-colors">
                Client Bridge - 클라이언트 간 연결 허브
              </h3>
              <p className="text-white/60 mb-4 leading-relaxed">
                C2 → C3 → C4 구간을 물리적으로 연결하는 컨베이어/브릿지입니다
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• 데이터 전달 및 배차 연결</li>
                <li>• 프로토콜 변환, 부하 분산</li>
                <li>• C1/CS 명령을 물리 모듈에 전달</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#1a3048]" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#E4C58B]/10 text-[#E4C58B] text-sm font-bold rounded-full mb-4 border border-[#E4C58B]/20">
              PRICING PLANS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              매장 규모만 알면, 대략 견적이 보입니다
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              매장 평수와 테이블 수 기준으로 ARSS 도입 시 초기 설치비와 월 예상 비용을 가볍게 계산해보세요.<br />
              최종 견적은 현장 실측 후 확정됩니다.
            </p>
          </div>

          {/* Pricing Formula Box */}
          <div className="max-w-5xl mx-auto mb-12 bg-gradient-to-br from-[#14273C] to-[#15273D] rounded-2xl p-6 border border-[#E4C58B]/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#E4C58B] mb-3">💰 설치비 공식</h3>
                <div className="text-sm text-white/80 leading-relaxed space-y-1">
                  <p className="font-mono">레일 설치비 = 평수 × 50만원</p>
                  <p className="font-mono">C4 BR/BU 유닛 = ⌈테이블 수 ÷ 2⌉ × 50만원</p>
                  <p className="text-[#FFA36C] font-semibold mt-2">설치비 ≈ 레일 + 유닛 비용</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#E4C58B] mb-3">📊 월 운영비 공식</h3>
                <div className="text-sm text-white/80 leading-relaxed space-y-1">
                  <p className="font-mono">서버 비용 = 평수 × 5만원</p>
                  <p className="font-mono">유지보수 = 평수 × 1만원</p>
                  <p className="text-[#FFA36C] font-semibold mt-2">월 비용 ≈ 서버 + 유지보수</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 text-center">
                ※ 실제 견적은 매장 구조·동선·설치 방식(천장형/타워형/벽걸이형)에 따라 달라질 수 있습니다.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Standard */}
            <div id="pricing-standard" className="bg-gradient-to-br from-[#14273C] to-[#15273D] rounded-3xl p-6 border-2 border-[#E4C58B]/20 hover:border-[#E4C58B]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                <p className="text-white/60 text-sm">소규모 펍/바</p>
              </div>
              
              {/* Price Info */}
              <div className="bg-[#15273D]/60 rounded-xl p-4 mb-5 border border-[#E4C58B]/10">
                <div className="text-xs text-white/50 mb-1">추천 기준</div>
                <div className="text-sm text-white/90 font-medium mb-3">10평 이하 · 약 8테이블</div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-[#E4C58B] font-semibold">대략 설치비</div>
                    <div className="text-xl font-bold text-white">약 700만원</div>
                    <div className="text-xs text-white/40">레일 500만 + 유닛 200만</div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-[#E4C58B] font-semibold">월 예상 비용</div>
                    <div className="text-xl font-bold text-white">약 60만원</div>
                    <div className="text-xs text-white/40">서버 50만 + 유지 10만</div>
                  </div>
                </div>
              </div>

              {/* System Components */}
              <div className="mb-5">
                <div className="text-xs text-white/50 mb-2 font-semibold">시스템 구성</div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C1 주문 시스템</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C3 생맥주 디스펜서</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C4 BR/BU 레일 서빙</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/40">
                    <span className="text-white/20">-</span>
                    <span>C2 음료 배출기 (선택)</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/40">
                    <span className="text-white/20">-</span>
                    <span>CS 서버 (선택)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs text-white/40 leading-relaxed">
                  ※ 모든 금액은 예시이며, 현장 조사 후 정확한 견적이 산출됩니다.
                </p>
              </div>

              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-[#E4C58B]/10 text-[#E4C58B] text-center rounded-full hover:bg-[#E4C58B]/20 transition-colors font-medium border border-[#E4C58B]/30"
              >
                상담 요청
              </Link>
            </div>

            {/* Deluxe */}
            <div id="pricing-deluxe" className="bg-gradient-to-br from-[#14273C] to-[#15273D] rounded-3xl p-6 border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-white mb-2">Deluxe</h3>
                <p className="text-white/60 text-sm">중규모 레스토랑</p>
              </div>
              
              {/* Price Info */}
              <div className="bg-[#15273D]/60 rounded-xl p-4 mb-5 border border-[#E4C58B]/10">
                <div className="text-xs text-white/50 mb-1">추천 기준</div>
                <div className="text-sm text-white/90 font-medium mb-3">10~30평 · 약 16테이블</div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-[#E4C58B] font-semibold">대략 설치비</div>
                    <div className="text-xl font-bold text-white">약 1,900만원</div>
                    <div className="text-xs text-white/40">레일 1,500만 + 유닛 400만</div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-[#E4C58B] font-semibold">월 예상 비용</div>
                    <div className="text-xl font-bold text-white">약 180만원</div>
                    <div className="text-xs text-white/40">서버 150만 + 유지 30만</div>
                  </div>
                </div>
              </div>

              {/* System Components */}
              <div className="mb-5">
                <div className="text-xs text-white/50 mb-2 font-semibold">시스템 구성</div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C1 주문 시스템</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C2 음료 자동 배출기</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C3 생맥주 디스펜서</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C4 BR/BU 레일 서빙</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>CS 통합 관리 서버</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs text-white/40 leading-relaxed">
                  ※ 모든 금액은 예시이며, 현장 조사 후 정확한 견적이 산출됩니다.
                </p>
              </div>

              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-lg transition-all font-bold"
              >
                상담 요청
              </Link>
            </div>

            {/* Luxury */}
            <div id="pricing-luxury" className="bg-gradient-to-br from-[#14273C] to-[#15273D] rounded-3xl p-6 border-2 border-[#FFA36C]/30 hover:border-[#FFA36C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA36C]/30 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFA36C] text-[#15273D] text-xs font-bold rounded-full">
                인기
              </div>
              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-white mb-2">Luxury</h3>
                <p className="text-white/60 text-sm">대규모 프리미엄 매장</p>
              </div>
              
              {/* Price Info */}
              <div className="bg-[#15273D]/60 rounded-xl p-4 mb-5 border border-[#FFA36C]/20">
                <div className="text-xs text-white/50 mb-1">추천 기준</div>
                <div className="text-sm text-white/90 font-medium mb-3">30~50평 · 약 24테이블</div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-[#FFA36C] font-semibold">대략 설치비</div>
                    <div className="text-xl font-bold text-white">약 2,600만원</div>
                    <div className="text-xs text-white/40">레일 2,000만 + 유닛 600만</div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-[#FFA36C] font-semibold">월 예상 비용</div>
                    <div className="text-xl font-bold text-white">약 240만원</div>
                    <div className="text-xs text-white/40">서버 200만 + 유지 40만</div>
                  </div>
                </div>
              </div>

              {/* System Components */}
              <div className="mb-5">
                <div className="text-xs text-white/50 mb-2 font-semibold">시스템 구성</div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#FFA36C]">✓</span>
                    <span>Full System (C1~4)</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#FFA36C]">✓</span>
                    <span>CS 통합 관리 서버</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#FFA36C]">✓</span>
                    <span>CB 클라이언트 브릿지</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#FFA36C]">✓</span>
                    <span>인테리어 조명 커스텀</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#FFA36C]">✓</span>
                    <span>실시간 데이터 분석</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs text-white/40 leading-relaxed">
                  ※ 모든 금액은 예시이며, 현장 조사 후 정확한 견적이 산출됩니다.
                </p>
              </div>

              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#FFA36C] to-[#E4C58B] text-[#15273D] text-center rounded-full hover:shadow-xl hover:shadow-[#FFA36C]/50 transition-all font-bold"
              >
                상담 요청
              </Link>
            </div>

            {/* Noblesse */}
            <div id="pricing-noblesse" className="bg-gradient-to-br from-[#14273C] to-[#15273D] rounded-3xl p-6 border-2 border-[#E4C58B]/40 hover:border-[#E4C58B]/70 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E4C58B]/30 hover:-translate-y-2">
              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-white mb-2">Noblesse</h3>
                <p className="text-white/60 text-sm">플래그십 매장</p>
              </div>
              
              {/* Price Info */}
              <div className="bg-[#15273D]/60 rounded-xl p-4 mb-5 border border-[#E4C58B]/20">
                <div className="text-xs text-white/50 mb-1">추천 기준</div>
                <div className="text-sm text-white/90 font-medium mb-3">50평 이상 · 약 32테이블</div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-[#E4C58B] font-semibold">대략 설치비</div>
                    <div className="text-xl font-bold text-white">약 3,800만원</div>
                    <div className="text-xs text-white/40">레일 3,000만 + 유닛 800만</div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-[#E4C58B] font-semibold">월 예상 비용</div>
                    <div className="text-xl font-bold text-white">약 360만원</div>
                    <div className="text-xs text-white/40">서버 300만 + 유지 60만</div>
                  </div>
                </div>
              </div>

              {/* System Components */}
              <div className="mb-5">
                <div className="text-xs text-white/50 mb-2 font-semibold">시스템 구성</div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>완전 커스텀 설계</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>Full System + CB</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C4 LED 광고 연출</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>C4 사운드 이벤트</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <span className="text-[#E4C58B]">✓</span>
                    <span>AI 기반 운영 최적화</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs text-white/40 leading-relaxed">
                  C4BR/BU에 LED·사운드 연출을 더해 브랜드 경험을 극대화하는 플랜입니다.
                </p>
              </div>

              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-xl transition-all font-bold"
              >
                상담 요청
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              * 모든 요금제는 현장 실측 후 최종 견적이 확정되며, 설치 환경에 따라 금액이 달라질 수 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#15273D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FFA36C]/10 text-[#FFA36C] text-sm font-bold rounded-full mb-4 border border-[#FFA36C]/20">
              BENEFITS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              도입 효과
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              ARSS를 도입한 매장이 경험하는 실질적인 변화
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">인건비 50% 절감</h3>
              <p className="text-white/60 leading-relaxed">
                서빙 인력을 최소화하고 핵심 업무에만 집중할 수 있습니다
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">회전율 2배 향상</h3>
              <p className="text-white/60 leading-relaxed">
                빠른 서빙으로 테이블 회전율이 대폭 증가하여 매출이 상승합니다
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">주문 오류 제로</h3>
              <p className="text-white/60 leading-relaxed">
                디지털 주문 시스템으로 잘못된 주문이나 누락을 완전히 방지합니다
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#E4C58B] to-[#FFA36C] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">특별한 경험 제공</h3>
              <p className="text-white/60 leading-relaxed">
                레일 서빙의 독특한 경험으로 고객 만족도와 재방문율이 증가합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a3048] to-[#15273D] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E4C58B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFA36C]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              S.R&P 전문가가 귀하의 매장을 방문하여<br />
              최적의 솔루션을 무료로 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-2xl hover:shadow-[#FFA36C]/50 transition-all duration-300 text-lg font-bold"
              >
                무료 상담 신청하기
              </Link>
              <Link
                href="/arss"
                className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-center rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium border-2 border-[#E4C58B]/30 hover:border-[#E4C58B]"
              >
                ARSS 더 알아보기
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-[#E4C58B] font-bold mb-2">전화 문의</div>
                <div className="text-white/80">010-5401-0732</div>
                <div className="text-white/50 text-sm mt-1">평일 09:00 - 18:00</div>
              </div>
              <div className="text-center">
                <div className="text-[#E4C58B] font-bold mb-2">이메일</div>
                <div className="text-white/80">shinji9112@gmail.com</div>
                <div className="text-white/50 text-sm mt-1">24시간 접수 가능</div>
              </div>
              <div className="text-center">
                <div className="text-[#E4C58B] font-bold mb-2">본사 위치</div>
                <div className="text-white/80">서울특별시 강남구</div>
                <div className="text-white/50 text-sm mt-1">헌릉로 590길 11</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#14273C] border-t border-[#E4C58B]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © 2025 S.R&P. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/about" className="text-white/50 hover:text-[#E4C58B] transition-colors text-sm">
                회사소개
              </Link>
              <Link href="/arss" className="text-white/50 hover:text-[#E4C58B] transition-colors text-sm">
                서비스
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-[#E4C58B] transition-colors text-sm">
                문의
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
