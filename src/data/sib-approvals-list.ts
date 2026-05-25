export type SibApprovalRowStyle = 'review' | 'normal';
export type SibApprovalFilterBucket = 'review' | 'approved' | 'rejected' | 'cancelled';
export type SibWorkflowStepState = 'done' | 'current' | 'rejected' | 'pending';

export interface SibWorkflowStep {
  state: SibWorkflowStepState;
  step: number;
}

export interface SibApprovalRecord {
  id: string;
  rowStyle: SibApprovalRowStyle;
  statusLabel: string;
  statusVariant: 'review' | 'rejected' | 'approved' | 'cancelled';
  statusSub?: string;
  statusSubVariant?: 'review' | 'rejected' | 'approved' | 'muted';
  category: string;
  requestCode: string;
  title: string;
  titleNote?: string;
  titleNoteVariant?: 'rejected' | 'muted';
  workflow?: SibWorkflowStep[];
  workflowNote?: string;
  dateMain: string;
  dateSub: string;
  dateVariant?: 'review' | 'rejected' | 'approved' | 'muted';
  muted?: boolean;
  filterBuckets: SibApprovalFilterBucket[];
  referenceDate: string;
}

export const SIB_APR_PAGE_SIZE = 10;
export const SIB_APR_REFERENCE_DATE = '2026-05-24';

export const sibApprovalStats = {
  total: 15,
  review: 2,
  approved: 7,
  rejected: 5,
  cancelled: 1,
};

export const sibApprovalRecords: SibApprovalRecord[] = [
  {
    id: 'apr-0118',
    rowStyle: 'review',
    statusLabel: '검토 중',
    statusVariant: 'review',
    statusSub: 'D+2',
    statusSubVariant: 'review',
    category: '자원 차출',
    requestCode: 'REQ-2026-0118',
    title: '갑급 작전 자원 차출 신청 — 신천 사건 추모일 비상 대기 시 추가 투입 희망',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'current', step: 2 },
      { state: 'pending', step: 3 },
      { state: 'pending', step: 4 },
    ],
    dateMain: '접수 05.23',
    dateSub: '2/4 단계',
    dateVariant: 'review',
    filterBuckets: ['review'],
    referenceDate: '2026-05-23',
  },
  {
    id: 'apr-0109',
    rowStyle: 'review',
    statusLabel: '검토 중',
    statusVariant: 'review',
    statusSub: 'D+5',
    statusSubVariant: 'review',
    category: '처방',
    requestCode: 'REQ-2026-0109',
    title: '차단제 용량 증량 신청 (편두통·불면증 악화)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'current', step: 3 },
    ],
    dateMain: '접수 05.20',
    dateSub: '조정원 검토',
    dateVariant: 'review',
    filterBuckets: ['review'],
    referenceDate: '2026-05-20',
  },
  {
    id: 'apr-0097',
    rowStyle: 'normal',
    statusLabel: '반려',
    statusVariant: 'rejected',
    category: '자원 차출',
    requestCode: 'REQ-2026-0097',
    title: '갑급 단독 진압 작전 자원 차출 신청',
    titleNote: '반려 (사유: 동기화 미충족)',
    titleNoteVariant: 'rejected',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'rejected', step: 2 },
      { state: 'pending', step: 3 },
      { state: 'pending', step: 4 },
    ],
    dateMain: '반려 05.14',
    dateSub: '접수 05.11',
    dateVariant: 'rejected',
    filterBuckets: ['rejected'],
    referenceDate: '2026-05-14',
  },
  {
    id: 'apr-0091',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '관외 이동',
    requestCode: 'REQ-2026-0091',
    title: '관외 이동 허가 (작전 종료 후 강원도 □□ · 익일 복귀)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
    ],
    dateMain: '승인 05.12',
    dateSub: '접수 05.09',
    dateVariant: 'approved',
    filterBuckets: ['approved'],
    referenceDate: '2026-05-12',
  },
  {
    id: 'apr-0083',
    rowStyle: 'normal',
    statusLabel: '반려',
    statusVariant: 'rejected',
    category: '매칭',
    requestCode: 'REQ-2026-0083',
    title: '매칭 우선순위 조정 신청 (3회차)',
    titleNote: '반려 (사유: 지난 3개월 내 재신청 불가)',
    titleNoteVariant: 'rejected',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'rejected', step: 2 },
      { state: 'pending', step: 3 },
      { state: 'pending', step: 4 },
    ],
    dateMain: '반려 05.04',
    dateSub: '접수 05.02',
    dateVariant: 'rejected',
    filterBuckets: ['rejected'],
    referenceDate: '2026-05-04',
  },
  {
    id: 'apr-0072',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '관외 이동',
    requestCode: 'REQ-2026-0072',
    title: '관외 이동 허가 (외곽 □□시 · 작전 종료 후 야간 · 당일 복귀)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
    ],
    dateMain: '승인 04.21',
    dateSub: '접수 04.19',
    dateVariant: 'approved',
    filterBuckets: ['approved'],
    referenceDate: '2026-04-21',
  },
  {
    id: 'apr-0064',
    rowStyle: 'normal',
    statusLabel: '반려',
    statusVariant: 'rejected',
    category: '자원 차출',
    requestCode: 'REQ-2026-0064',
    title: '갑급 진압 작전 자원 차출 신청',
    titleNote: '반려 (사유: 동기화 미충족)',
    titleNoteVariant: 'rejected',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'rejected', step: 2 },
      { state: 'pending', step: 3 },
      { state: 'pending', step: 4 },
    ],
    dateMain: '반려 04.10',
    dateSub: '접수 04.07',
    dateVariant: 'rejected',
    filterBuckets: ['rejected'],
    referenceDate: '2026-04-10',
  },
  {
    id: 'apr-0057',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '처방',
    requestCode: 'REQ-2026-0057',
    title: '진통제 처방 추가 (편두통 보조약)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
    ],
    dateMain: '승인 03.28',
    dateSub: '접수 03.25',
    dateVariant: 'approved',
    filterBuckets: ['approved'],
    referenceDate: '2026-03-28',
  },
  {
    id: 'apr-0042',
    rowStyle: 'normal',
    statusLabel: '반려',
    statusVariant: 'rejected',
    category: '매칭',
    requestCode: 'REQ-2026-0042',
    title: '매칭 우선순위 조정 신청 (2회차)',
    titleNote: '반려 (사유: 적합도 평가 미달)',
    titleNoteVariant: 'rejected',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'rejected', step: 3 },
      { state: 'pending', step: 4 },
    ],
    dateMain: '반려 03.18',
    dateSub: '접수 03.12',
    dateVariant: 'rejected',
    filterBuckets: ['rejected'],
    referenceDate: '2026-03-18',
  },
  {
    id: 'apr-0031',
    rowStyle: 'normal',
    statusLabel: '취소',
    statusVariant: 'cancelled',
    category: '시설 이용',
    requestCode: 'REQ-2026-0031',
    title: '훈련시설 야간 사용 신청 (개인 훈련)',
    titleNote: '신청자 철회 — 작전 일정 충돌',
    titleNoteVariant: 'muted',
    workflowNote: '신청자 철회',
    dateMain: '취소 03.04',
    dateSub: '접수 03.02',
    dateVariant: 'muted',
    muted: true,
    filterBuckets: ['cancelled'],
    referenceDate: '2026-03-04',
  },
  {
    id: 'apr-0024',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '관외 이동',
    requestCode: 'REQ-2026-0024',
    title: '관외 이동 허가 (수도권 외곽 · 당일 복귀)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
    ],
    dateMain: '승인 02.20',
    dateSub: '접수 02.18',
    dateVariant: 'approved',
    muted: true,
    filterBuckets: ['approved'],
    referenceDate: '2026-02-20',
  },
  {
    id: 'apr-0019',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '처방',
    requestCode: 'REQ-2026-0019',
    title: '차단제 처방 갱신 (정기)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
    ],
    dateMain: '승인 02.08',
    dateSub: '접수 02.05',
    dateVariant: 'approved',
    muted: true,
    filterBuckets: ['approved'],
    referenceDate: '2026-02-08',
  },
  {
    id: 'apr-0012',
    rowStyle: 'normal',
    statusLabel: '반려',
    statusVariant: 'rejected',
    category: '자원 차출',
    requestCode: 'REQ-2026-0012',
    title: '을급 작전 자원 차출 신청',
    titleNote: '반려 (사유: 배치 한도 초과)',
    titleNoteVariant: 'rejected',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'rejected', step: 2 },
      { state: 'pending', step: 3 },
    ],
    dateMain: '반려 01.22',
    dateSub: '접수 01.19',
    dateVariant: 'rejected',
    muted: true,
    filterBuckets: ['rejected'],
    referenceDate: '2026-01-22',
  },
  {
    id: 'apr-0008',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '시설 이용',
    requestCode: 'REQ-2026-0008',
    title: '훈련시설 주간 사용 신청 (합동 훈련)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
    ],
    dateMain: '승인 01.15',
    dateSub: '접수 01.12',
    dateVariant: 'approved',
    muted: true,
    filterBuckets: ['approved'],
    referenceDate: '2026-01-15',
  },
  {
    id: 'apr-0003',
    rowStyle: 'normal',
    statusLabel: '승인',
    statusVariant: 'approved',
    category: '매칭',
    requestCode: 'REQ-2026-0003',
    title: '매칭 우선순위 조정 신청 (1회차)',
    workflow: [
      { state: 'done', step: 1 },
      { state: 'done', step: 2 },
      { state: 'done', step: 3 },
      { state: 'done', step: 4 },
    ],
    dateMain: '승인 01.05',
    dateSub: '접수 01.02',
    dateVariant: 'approved',
    muted: true,
    filterBuckets: ['approved'],
    referenceDate: '2026-01-05',
  },
];

export function getSibApprovalById(id: string) {
  return sibApprovalRecords.find((rec) => rec.id === id);
}

