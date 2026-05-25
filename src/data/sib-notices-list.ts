export type SibNoticeCategory = '긴급' | '공지' | '행정' | '인사';
export type SibNoticeFilterKey = 'urgent' | 'notice' | 'admin' | 'hr';
export type SibNoticeRowStyle = 'urgent' | 'normal';

export interface SibNoticeRecord {
  id: string;
  rowStyle: SibNoticeRowStyle;
  category: SibNoticeCategory;
  filterKey: SibNoticeFilterKey;
  noticeCode: string;
  title: string;
  titleNote?: string;
  titleNoteVariant?: 'urgent' | 'muted';
  department: string;
  audience: string;
  postedDate: string;
  postedTime: string;
  postedBold?: boolean;
  action: 'read' | 'view';
  referenceDate: string;
}

export const SIB_NTC_PAGE_SIZE = 11;

export const sibNoticeStats = {
  total: 38,
  urgent: 1,
  notice: 21,
  admin: 11,
  hr: 5,
};

export const sibNoticeBanner = {
  code: 'URG-2026-008',
  label: '긴급 · D-3',
  text: '신천 사건 15주기 추모일 (05.27) — 전 차출요원 비상 대기 명령 (05.25 00:00 — 05.28 24:00)',
};

const templateRecords: SibNoticeRecord[] = [
  {
    id: 'ntc-008',
    rowStyle: 'urgent',
    category: '긴급',
    filterKey: 'urgent',
    noticeCode: 'URG-2026-008',
    title: '전 차출요원 비상 대기 명령 (05.25 00:00 — 05.28 24:00)',
    titleNote: '신천 사건 15주기 추모일 · 출입 제한 강화',
    titleNoteVariant: 'urgent',
    department: '작전과장실',
    audience: '전 차출요원',
    postedDate: '2026.05.23',
    postedTime: '14:00',
    postedBold: true,
    action: 'read',
    referenceDate: '2026-05-23',
  },
  {
    id: 'ntc-094',
    rowStyle: 'normal',
    category: '공지',
    filterKey: 'notice',
    noticeCode: 'NTC-2026-094',
    title: '차출요원 숙소 출입 게이트 보안 시스템 업데이트 안내',
    titleNote: '05.30 02:00 — 04:00 일시 사용 제한',
    titleNoteVariant: 'muted',
    department: '시설관리과',
    audience: '차출요원 전원',
    postedDate: '2026.05.22',
    postedTime: '10:30',
    action: 'view',
    referenceDate: '2026-05-22',
  },
  {
    id: 'ntc-091',
    rowStyle: 'normal',
    category: '공지',
    filterKey: 'notice',
    noticeCode: 'NTC-2026-091',
    title: '2026년도 동기화 매칭 우선순위 산정 기준 개정 안내',
    titleNote: '3개월 내 재신청 제한 신설 · 시행 05.18',
    titleNoteVariant: 'muted',
    department: '조정원·매칭과',
    audience: '차출요원 전원',
    postedDate: '2026.05.18',
    postedTime: '09:00',
    action: 'view',
    referenceDate: '2026-05-18',
  },
  {
    id: 'ntc-047',
    rowStyle: 'normal',
    category: '행정',
    filterKey: 'admin',
    noticeCode: 'ADM-2026-047',
    title: '분기 정기 진료 일정 배정 안내 (2분기)',
    titleNote: '조정원 본원 · 06월 첫째주 ~ 셋째주 일정',
    titleNoteVariant: 'muted',
    department: '조정원·의무과',
    audience: '차출요원 전원',
    postedDate: '2026.05.15',
    postedTime: '11:15',
    action: 'view',
    referenceDate: '2026-05-15',
  },
  {
    id: 'ntc-088',
    rowStyle: 'normal',
    category: '공지',
    filterKey: 'notice',
    noticeCode: 'NTC-2026-088',
    title: '신천 사건 15주기 추모식 안내 (외부 공식 행사)',
    titleNote: '차출요원 참석 불가 · 비공개 추모 별도 안내',
    titleNoteVariant: 'muted',
    department: '위원회 공보실',
    audience: '전 기관 회람',
    postedDate: '2026.05.12',
    postedTime: '16:40',
    action: 'view',
    referenceDate: '2026-05-12',
  },
  {
    id: 'ntc-019',
    rowStyle: 'normal',
    category: '인사',
    filterKey: 'hr',
    noticeCode: 'HR-2026-019',
    title: '2處 작전과장 부분 직무대행 명령',
    titleNote: '기존 과장 휴직 ~ 06.30 · 직무대행 □□□ 부과장',
    titleNoteVariant: 'muted',
    department: '인사과',
    audience: '2處 전 직원',
    postedDate: '2026.05.10',
    postedTime: '09:00',
    action: 'view',
    referenceDate: '2026-05-10',
  },
  {
    id: 'ntc-082',
    rowStyle: 'normal',
    category: '공지',
    filterKey: 'notice',
    noticeCode: 'NTC-2026-082',
    title: '2분기 합동 훈련 일정 확정 및 분기 평가 안내',
    titleNote: '06.10 ~ 06.14 · 갑·을급 차출요원 대상',
    titleNoteVariant: 'muted',
    department: '훈련과',
    audience: '갑·을급 요원',
    postedDate: '2026.05.08',
    postedTime: '13:20',
    action: 'view',
    referenceDate: '2026-05-08',
  },
  {
    id: 'ntc-041',
    rowStyle: 'normal',
    category: '행정',
    filterKey: 'admin',
    noticeCode: 'ADM-2026-041',
    title: '차출요원 피복 지급 신청 접수 (하절기)',
    titleNote: '05.20 ~ 06.05 · 작전복·일반복 동시 신청',
    titleNoteVariant: 'muted',
    department: '시설관리과',
    audience: '차출요원 전원',
    postedDate: '2026.05.05',
    postedTime: '10:00',
    action: 'view',
    referenceDate: '2026-05-05',
  },
  {
    id: 'ntc-076',
    rowStyle: 'normal',
    category: '공지',
    filterKey: 'notice',
    noticeCode: 'NTC-2026-076',
    title: '미등재자 신고 접수 채널 일원화 안내',
    titleNote: '긴급신고 11X로 통합 · 기존 채널 단계적 폐지',
    titleNoteVariant: 'muted',
    department: '정보분석과',
    audience: '전 직원',
    postedDate: '2026.05.02',
    postedTime: '15:30',
    action: 'view',
    referenceDate: '2026-05-02',
  },
  {
    id: 'ntc-016',
    rowStyle: 'normal',
    category: '인사',
    filterKey: 'hr',
    noticeCode: 'HR-2026-016',
    title: '2026년 상반기 차출요원 정기 인사 발령',
    titleNote: '2處 → 3處 차출요원 5명 · 3處 → 2處 차출요원 2명',
    titleNoteVariant: 'muted',
    department: '인사과',
    audience: '전 직원',
    postedDate: '2026.04.28',
    postedTime: '09:00',
    action: 'view',
    referenceDate: '2026-04-28',
  },
  {
    id: 'ntc-034',
    rowStyle: 'normal',
    category: '행정',
    filterKey: 'admin',
    noticeCode: 'ADM-2026-034',
    title: '2026년 상반기 차출요원 정기 평가 일정 안내',
    titleNote: '06.15 ~ 06.30 · 능력 평가 + 적합도 평가 동시 실시',
    titleNoteVariant: 'muted',
    department: '평가과',
    audience: '차출요원 전원',
    postedDate: '2026.04.25',
    postedTime: '14:00',
    action: 'view',
    referenceDate: '2026-04-25',
  },
];

const CATEGORY_TARGETS: Record<
  SibNoticeFilterKey,
  { category: SibNoticeCategory; prefix: string; dept: string; audience: string; target: number }
> = {
  urgent: { category: '긴급', prefix: 'URG', dept: '작전과장실', audience: '전 차출요원', target: 1 },
  notice: { category: '공지', prefix: 'NTC', dept: '위원회 공보실', audience: '차출요원 전원', target: 21 },
  admin: { category: '행정', prefix: 'ADM', dept: '행정과', audience: '차출요원 전원', target: 11 },
  hr: { category: '인사', prefix: 'HR', dept: '인사과', audience: '전 직원', target: 5 },
};

function buildNoticeRecords(): SibNoticeRecord[] {
  const records: SibNoticeRecord[] = [...templateRecords];
  const counts: Record<SibNoticeFilterKey, number> = { urgent: 0, notice: 0, admin: 0, hr: 0 };
  for (const record of records) counts[record.filterKey] += 1;

  let gen = 1;
  for (const filterKey of ['notice', 'admin', 'hr'] as const) {
    const meta = CATEGORY_TARGETS[filterKey];
    while (counts[filterKey] < meta.target) {
      const year = 2025 + (gen % 2);
      const month = String((gen % 12) + 1).padStart(2, '0');
      const day = String((gen % 27) + 1).padStart(2, '0');
      const codeNum = String(100 - counts[filterKey]).padStart(3, '0');
      records.push({
        id: `ntc-gen-${filterKey}-${gen}`,
        rowStyle: 'normal',
        category: meta.category,
        filterKey,
        noticeCode: `${meta.prefix}-2026-${codeNum}`,
        title: `${meta.category} 안내 (${codeNum})`,
        titleNote: '내부 회람',
        titleNoteVariant: 'muted',
        department: meta.dept,
        audience: meta.audience,
        postedDate: `${year}.${month}.${day}`,
        postedTime: '09:00',
        action: 'view',
        referenceDate: `${year}-${month}-${day}`,
      });
      counts[filterKey] += 1;
      gen += 1;
    }
  }

  return records.sort((a, b) => b.referenceDate.localeCompare(a.referenceDate));
}

export const sibNoticeRecords = buildNoticeRecords();
