export type SibOpRowStyle = 'priority' | 'urgent' | 'normal';

export interface SibOpStatusTag {
  label: string;
  variant: 'red' | 'amber' | 'gray' | 'unread' | 'rejected';
}

export interface SibOperationRecord {
  id: string;
  rowStyle: SibOpRowStyle;
  statusTags: SibOpStatusTag[];
  category: string;
  code: string;
  title: string;
  issuer: string;
  issuedDate: string;
  scheduleMain: string;
  scheduleSub: string;
  scheduleMono?: boolean;
  action: 'read' | 'detail';
  muted?: boolean;
}

export const sibOperationStats = {
  total: 14,
  unread: 2,
  inProgress: 3,
  done: 8,
  rejected: 1,
};

export const sibOperationRecords: SibOperationRecord[] = [
  {
    id: 'op-0341',
    rowStyle: 'priority',
    statusTags: [
      { label: '최우선', variant: 'red' },
      { label: '미열람', variant: 'unread' },
    ],
    category: '갑급 작전 지원',
    code: 'OP-2026-0341',
    title: '[극비] 수도권 마포구역 미등재자 거점 진압 작전 — 차출 명령',
    issuer: '2處 작전과',
    issuedDate: '2026.05.23 발령',
    scheduleMain: '2026.05.25 04:00',
    scheduleSub: '본청 B3',
    scheduleMono: true,
    action: 'read',
  },
  {
    id: 'op-0338',
    rowStyle: 'urgent',
    statusTags: [
      { label: '긴급', variant: 'amber' },
      { label: '미열람', variant: 'unread' },
    ],
    category: '을급 작전',
    code: 'OP-2026-0338',
    title: '[대외비] 인천 서구 신흥종교 잔당 추적 — 합동 작전',
    issuer: '2處',
    issuedDate: '2026.05.22 발령',
    scheduleMain: '2026.05.28 09:00',
    scheduleSub: '지역분실 3',
    scheduleMono: true,
    action: 'read',
  },
  {
    id: 'op-0329',
    rowStyle: 'normal',
    statusTags: [{ label: '진행 중', variant: 'amber' }],
    category: '을급 작전',
    code: 'OP-2026-0329',
    title: '[대외비] 미등재자 거점 잠복 감시 — 정보 수집',
    issuer: '2處',
    issuedDate: '2026.05.10 발령',
    scheduleMain: '진행 중',
    scheduleSub: '~06.30 예정',
    scheduleMono: true,
    action: 'detail',
  },
  {
    id: 'op-0317',
    rowStyle: 'normal',
    statusTags: [{ label: '진행 중', variant: 'amber' }],
    category: '병급 작전',
    code: 'OP-2026-0317',
    title: '[대외비] 차출요원 합동 훈련 — 분기 평가',
    issuer: '훈련과',
    issuedDate: '2026.05.05 발령',
    scheduleMain: '진행 중',
    scheduleSub: '~06.15 예정',
    scheduleMono: true,
    action: 'detail',
  },
  {
    id: 'op-0298',
    rowStyle: 'normal',
    statusTags: [{ label: '진행 중', variant: 'amber' }],
    category: '병급 작전',
    code: 'OP-2026-0298',
    title: '[대외비] 보호처분소 외곽 경계 임시 차출 — 후속',
    issuer: '시설관리과',
    issuedDate: '2026.04.28 발령',
    scheduleMain: '진행 중',
    scheduleSub: '상시 대기',
    scheduleMono: true,
    action: 'detail',
  },
  {
    id: 'op-0285',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'gray' }],
    category: '병급 작전',
    code: 'OP-2026-0285',
    title: '[대외비] 보호처분소 외곽 경계 임시 차출',
    issuer: '시설관리과',
    issuedDate: '2026.04.20 발령',
    scheduleMain: '2026.05.20 완료',
    scheduleSub: '보고서 제출 완료',
    scheduleMono: true,
    action: 'detail',
    muted: true,
  },
  {
    id: 'op-0271',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'gray' }],
    category: '을급 작전',
    code: 'OP-2026-0271',
    title: '[대외비] 미등재자 색출 합동작전 — 후속 진술 의무',
    issuer: '2處',
    issuedDate: '2026.04.05 발령',
    scheduleMain: '2026.05.14 완료',
    scheduleSub: '보고서 검토 중',
    scheduleMono: true,
    action: 'detail',
    muted: true,
  },
  {
    id: 'op-0254',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'gray' }],
    category: '을급 작전',
    code: 'OP-2026-0254',
    title: '[대외비] 수도권 홍대입구역 일대 비인가 능력자 검거',
    issuer: '2處',
    issuedDate: '2026.03.22 발령',
    scheduleMain: '2026.04.08 완료',
    scheduleSub: '보고서 제출 완료',
    scheduleMono: true,
    action: 'detail',
    muted: true,
  },
  {
    id: 'op-0231',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'gray' }],
    category: '병급 작전',
    code: 'OP-2026-0231',
    title: '[대외비] 격리시설 호송 임무 — 단독 차출',
    issuer: '호송과',
    issuedDate: '2026.03.08 발령',
    scheduleMain: '2026.03.15 완료',
    scheduleSub: '보고서 제출 완료',
    scheduleMono: true,
    action: 'detail',
    muted: true,
  },
  {
    id: 'op-0218',
    rowStyle: 'normal',
    statusTags: [{ label: '반려', variant: 'rejected' }],
    category: '을급 작전',
    code: 'OP-2026-0218',
    title: '[대외비] 강서구역 능력자 진압 작전 — 본인 차출 신청 반려',
    issuer: '2處',
    issuedDate: '2026.02.28 발령',
    scheduleMain: '반려',
    scheduleSub: '동기화 불일치',
    scheduleMono: true,
    action: 'detail',
    muted: true,
  },
];
