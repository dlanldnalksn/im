/** 신상·인사 탭 — 이찬영 고정 프로필 (템플릿 v17) */
export const sibPersonnelProfileMeta = {
  updated: '2026.05.18',
  photoDate: '2024.11',
  nameHanja: '李燦榮',
  displayAge: '만 25세',
  birthDate: '2001.04.12',
  cohort: '8기',
  extensionShort: '2147',
  grades: {
    risk: { main: '二級', sub: '통제 대상' },
    ops: { main: '乙', sub: '중위험·일반' },
    seal: { main: '未實施', sub: '처방 중' },
    matching: { main: '未매칭', sub: '대기 중' },
  },
};

export const sibPersonnelBasic = {
  officialAddress: '서울특별시 양천구 목동서로 124',
  officialDetail: '특감국 제2생활관 2동 407호',
  personalAddress: '서울특별시 은평구 진관동 391-25',
  personalDetail: '본인 명의 임차 · 등록일 2022.06.15',
  family: [
    { relation: '부 · 이윤성', location: '서울 노원구 상계동' },
    { relation: '모 · 김진혜', location: '서울 노원구 상계동' },
    { relation: '매 · 이찬서', location: '등록 주소 별도' },
  ],
};

export const sibPersonnelHistory = {
  timeline: [
    {
      date: '2017.04',
      current: true,
      title: '특수감찰국 2處 배치',
      sub: '갑급 차출요원 · 진압·호송·잠복 임무 수행',
    },
    {
      date: '2017.02',
      title: '차출 발령 (8기)',
      sub: '시설 입소 1년 10개월차 · 역대 최단',
    },
    {
      date: '2016.04',
      title: '시설 입소',
      sub: '능력 발현 · 등재 · 격리 교육 과정 수료',
    },
    {
      date: '2016.04.11',
      title: '능력 발현 · 강제 등재',
      sub: '만 14세 · 교내 사고 발현',
    },
  ],
  stats: [
    { value: '478', unit: '건', label: '총 작전' },
    { value: '326', unit: '건', label: '진압·검거' },
    { value: '94', unit: '건', label: '호송·경계' },
    { value: '58', unit: '건', label: '잠복·정보' },
  ],
  recentAvg: '주 1.2건 · 월 5.3건',
};

export const sibPersonnelAbility = {
  overview: [
    { label: '분류', value: '근접 격투계 · 신체 강화' },
    { label: '발현 유형', value: '패시브 (상시 활성)' },
    { label: '등재 유형', value: '사고 발현 · 강제 등재' },
    { label: '발현일', value: '2016.04.11', note: '만 14세' },
    { label: '제어 수단', value: '차단제 정기 처방', note: '완전 차단 불가' },
  ],
  operation: {
    title: '적의(敵意) 감지 → 신체 능력 증폭',
    sub: '반경 약 30m · 감정 강도 및 밀도 비례 증폭',
  },
  backlash: [
    '· 사용 중 감각 왜곡 · 의식 혼탁',
    '· 사용 직후 통증·피로 일시 폭주',
    '· 장시간 사용 시 의식 손실 가능',
    '· 만성 신경 손상 누적',
  ],
};

export const sibPersonnelMedical = {
  body: [
    { label: '신장', value: '188cm' },
    { label: '체중', value: '80kg' },
    { label: '최종 측정', value: '2026.03.18', mono: true },
  ],
  prescriptions: [
    { name: '차단제 정기 (정량)', date: '최종 갱신 05.18' },
    { name: '진통제 보조 (편두통용)', date: '승인 03.28' },
    { name: '차단제 증량 신청', date: '검토 중', accent: true },
  ],
  chronic: ['편두통', '불면증', '공황장애', '근육 긴장', '부정맥', '감각 과민'],
  checkups: [
    { label: '차기 정기 검진', value: '2026.05.31 · D-7', accent: true },
    { label: '신경 손상 누적', value: '중등도' },
    { label: '최근 능력 사용 평가', value: '고강도' },
    { label: '권장 휴식 (의무과 소견)', value: '미준수' },
  ],
};

export const sibPersonnelEval = {
  quarters: [
    { label: '2026년 1분기 종합 평가', grade: '우수', tone: 'good' as const, bold: true },
    { label: '2025년 4분기 종합 평가', grade: '우수', tone: 'good' as const },
    { label: '2025년 3분기 종합 평가', grade: '양호', tone: 'ok' as const },
    { label: '2025년 2분기 종합 평가', grade: '우수', tone: 'good' as const },
  ],
  matching: {
    title: '매칭 우선순위 신청 (3회)',
    badge: '전 회차 반려',
    note: '사유: 적합도 평가 미달 · 동기화 미충족 · 3개월 내 재신청 제한',
  },
  discipline: [
    { label: '표창 (특별 작전 공로)', value: '5건', bold: true },
    { label: '경고 (과잉 진압 의혹)', value: '2건', danger: true },
    { label: '징계', value: '해당 없음', muted: true },
  ],
  warnings: [
    { title: '과잉 진압 의혹 · 사후 진술 요구', date: '2025.11', code: 'OP-2025-0742 · 의도성 인정 不' },
    { title: '과잉 진압 의혹 · 사후 진술 요구', date: '2024.06', code: 'OP-2024-0319 · 의도성 인정 不' },
  ],
};

export const sibPersonnelDeep = {
  metrics: [
    { label: '정서 안정도', level: '낮음', width: '28%', tone: 'danger' as const },
    { label: '대인 신뢰 지수', level: '매우 낮음', width: '14%', tone: 'danger' as const },
    { label: '충동 통제력', level: '보통 (변동)', width: '48%', tone: 'warn' as const },
    { label: '권위 수용도', level: '낮음', width: '22%', tone: 'danger' as const },
    { label: '의존 성향', level: '높음', width: '74%', tone: 'warn' as const },
    { label: '이탈 위험도', level: '낮음', width: '18%', tone: 'neutral' as const },
  ],
  caution:
    '공황 발작 이력 다수 · 자기 혐오 기반 인지 왜곡 관찰됨 · 작전 후 일시 정서 불안 보고 빈번',
  report: {
    date: '2026.04.15 · 분기 종합 평가서 발췌',
    paragraphs: [
      '대상은 갑급 차출 9년차로 작전 수행 능력 및 결과 산출 면에서 일관된 최상위 성과를 유지하고 있음. 다만 능력 특성상 적의 흡수에 따른 신경계 마모가 누적되어 있으며, 본인 신청에 의한 차단제 증량 요청이 빈번해지는 추세임.',
      '대인 관계 형성에 극도로 폐쇄적이며 비상 연락망 등록을 수차례 거부함. 동료 차출요원 및 상급자와의 사적 교류 전무. 권위 수용도가 낮아 명령 이행 시 형식적 복종에 그치는 사례가 보고됨.',
      '표면적으로는 안정적이나 작전 후 회복기에 정서적 불안정이 두드러지며, 적합도 평가 미달 누적으로 매칭 우선순위에서 지속 배제되고 있음. 중장기적으로는 매칭 강제 배정 또는 봉인 등급 상향 검토가 권고됨.',
    ],
    highlight:
      '중장기적으로는 매칭 강제 배정 또는 봉인 등급 상향 검토가 권고됨.',
    author: '감찰관 J. ███ · 2處 직속',
    nextEval: '2026.07.15 예정',
  },
};
