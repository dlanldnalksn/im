export interface Notice {
  id: string;
  title: string;
  date: string;
  audience: 'public' | 'internal';
  summary: string;
}

export const publicNotices: Notice[] = [
  {
    id: 'n1',
    title: '2026년도 등재 신청 일정 안내',
    date: '2026-01-15',
    audience: 'public',
    summary:
      '각 지역 등재청사에서 연간 등재 신청 접수 일정이 확정되었습니다. 미등재 각성자는 관련 법령에 따라 등재 의무가 있습니다.',
  },
  {
    id: 'n2',
    title: '신천사건 15주기 추모 행사 안내',
    date: '2026-02-01',
    audience: 'public',
    summary:
      '전국 추모 행사가 거행됩니다. 행사 기간 중 각성자 관련 집회·행사에 대한 제한이 강화될 수 있습니다.',
  },
  {
    id: 'n3',
    title: '조력자 매칭 대기 현황 (요약)',
    date: '2026-03-10',
    audience: 'public',
    summary:
      '조력자 대비 능력자 비율로 인해 전원 매칭은 불가합니다. 우선순위 기준은 관련 고시를 참고하시기 바랍니다.',
  },
];

export const internalNotices: Notice[] = [
  {
    id: 'i1',
    title: '[2처] 미등재자 검거 작전 브리핑',
    date: '2026-03-18',
    audience: 'internal',
    summary: '수도권 미등재 능력자 3명 동시 검거 예정. 차출 요원 배치 확정.',
  },
  {
    id: 'i2',
    title: '인사 통합 조회 시스템 점검',
    date: '2026-03-20',
    audience: 'internal',
    summary: '3월 22일 02:00~04:00 내부망 점검. 해당 시간 접속 불가.',
  },
];
