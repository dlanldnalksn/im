export type SibReportRowStyle = 'urgent' | 'normal';
export type SibReportFilterBucket = 'urgent' | 'scheduled' | 'review' | 'done';
export type SibReportAction = 'write' | 'reserve' | 'apply' | 'detail' | 'view';

export interface SibReportStatusTag {
  label: string;
  variant: 'urgent' | 'scheduled' | 'review' | 'done';
}

export interface SibReportRecord {
  id: string;
  rowStyle: SibReportRowStyle;
  statusTags: SibReportStatusTag[];
  statusSub: string;
  statusSubVariant?: 'urgent' | 'normal' | 'muted';
  category: string;
  formCode: string;
  title: string;
  titleCode?: string;
  submitTo: string;
  submitSub: string;
  deadlineMain: string;
  deadlineSub: string;
  deadlineMono?: boolean;
  action: SibReportAction;
  actionLabel: string;
  muted?: boolean;
  filterBuckets: SibReportFilterBucket[];
  /** YYYY-MM-DD — 기간 필터용 */
  referenceDate: string;
}

export const SIB_RPT_REFERENCE_DATE = '2026-05-24';

export const sibReportStats = {
  total: 9,
  urgent: 1,
  scheduled: 3,
  review: 2,
  done: 3,
};

export const sibReportRecords: SibReportRecord[] = [
  {
    id: 'rpt-may-statement',
    rowStyle: 'urgent',
    statusTags: [{ label: '기한 임박', variant: 'urgent' }],
    statusSub: 'D-1',
    statusSubVariant: 'urgent',
    category: '정기 진술',
    formCode: 'M-FORM-03',
    title: '월간 정기 진술서 (5월분)',
    submitTo: '감찰관실',
    submitSub: '자체 검토',
    deadlineMain: '2026.05.25',
    deadlineSub: '23:59 마감',
    deadlineMono: true,
    action: 'write',
    actionLabel: '작성',
    filterBuckets: ['urgent'],
    referenceDate: '2026-05-25',
  },
  {
    id: 'rpt-q2-checkup',
    rowStyle: 'normal',
    statusTags: [{ label: '예정', variant: 'scheduled' }],
    statusSub: 'D-7',
    category: '검진',
    formCode: 'H-FORM-02',
    title: '분기 정기 검진 (2분기)',
    submitTo: '조정원 본원',
    submitSub: '대면 진료',
    deadlineMain: '2026.05.31',
    deadlineSub: '예약 필요',
    deadlineMono: true,
    action: 'reserve',
    actionLabel: '예약',
    filterBuckets: ['scheduled'],
    referenceDate: '2026-05-31',
  },
  {
    id: 'rpt-prescription',
    rowStyle: 'normal',
    statusTags: [{ label: '예정', variant: 'scheduled' }],
    statusSub: 'D-12',
    category: '처방',
    formCode: 'P-FORM-05',
    title: '차단제 처방 갱신',
    submitTo: '조정원 의료센터',
    submitSub: '자동 갱신 가능',
    deadlineMain: '2026.06.05',
    deadlineSub: '처방 종료',
    deadlineMono: true,
    action: 'apply',
    actionLabel: '신청',
    filterBuckets: ['scheduled'],
    referenceDate: '2026-06-05',
  },
  {
    id: 'rpt-q2-eval',
    rowStyle: 'normal',
    statusTags: [{ label: '예정', variant: 'scheduled' }],
    statusSub: 'D-21',
    category: '평가',
    formCode: 'E-FORM-01',
    title: '분기 능력 평가 — 자기 진술 양식',
    submitTo: '평가과',
    submitSub: '서면 + 대면',
    deadlineMain: '2026.06.14',
    deadlineSub: '서면 마감',
    deadlineMono: true,
    action: 'detail',
    actionLabel: '상세 →',
    filterBuckets: ['scheduled'],
    referenceDate: '2026-06-14',
  },
  {
    id: 'rpt-op-0298',
    rowStyle: 'normal',
    statusTags: [{ label: '검토 중', variant: 'review' }],
    statusSub: '제출 05.20',
    category: '작전 후 보고',
    formCode: 'O-FORM-04',
    title: '작전 사후 진술서',
    titleCode: 'OP-2026-0298',
    submitTo: '감찰관실',
    submitSub: '2차 검토 중',
    deadlineMain: '검토 중',
    deadlineSub: '예상 5일',
    deadlineMono: true,
    action: 'view',
    actionLabel: '조회 →',
    filterBuckets: ['review'],
    referenceDate: '2026-05-20',
  },
  {
    id: 'rpt-op-0271',
    rowStyle: 'normal',
    statusTags: [{ label: '검토 중', variant: 'review' }],
    statusSub: '제출 05.14',
    category: '작전 후 보고',
    formCode: 'O-FORM-04',
    title: '작전 사후 진술서',
    titleCode: 'OP-2026-0271',
    submitTo: '감찰관실',
    submitSub: '1차 검토 중',
    deadlineMain: '검토 중',
    deadlineSub: '예상 11일',
    deadlineMono: true,
    action: 'view',
    actionLabel: '조회 →',
    filterBuckets: ['review'],
    referenceDate: '2026-05-14',
  },
  {
    id: 'rpt-apr-statement',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'done' }],
    statusSub: '승인 05.10',
    statusSubVariant: 'muted',
    category: '정기 진술',
    formCode: 'M-FORM-03',
    title: '월간 정기 진술서 (4월분)',
    submitTo: '감찰관실',
    submitSub: '승인 완료',
    deadlineMain: '2026.04.25 제출',
    deadlineSub: '15일 소요',
    deadlineMono: true,
    action: 'view',
    actionLabel: '조회 →',
    muted: true,
    filterBuckets: ['done'],
    referenceDate: '2026-04-25',
  },
  {
    id: 'rpt-prev-prescription',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'done' }],
    statusSub: '승인 04.12',
    statusSubVariant: 'muted',
    category: '처방',
    formCode: 'P-FORM-05',
    title: '차단제 처방 갱신 (지난 분기)',
    submitTo: '조정원 의료센터',
    submitSub: '자동 처리',
    deadlineMain: '2026.04.05 신청',
    deadlineSub: '7일 소요',
    deadlineMono: true,
    action: 'view',
    actionLabel: '조회 →',
    muted: true,
    filterBuckets: ['done'],
    referenceDate: '2026-04-05',
  },
  {
    id: 'rpt-q1-checkup',
    rowStyle: 'normal',
    statusTags: [{ label: '완료', variant: 'done' }],
    statusSub: '승인 03.20',
    statusSubVariant: 'muted',
    category: '검진',
    formCode: 'H-FORM-02',
    title: '분기 정기 검진 (1분기)',
    submitTo: '조정원 본원',
    submitSub: '소견서 발급',
    deadlineMain: '2026.03.18 진료',
    deadlineSub: '2일 소요',
    deadlineMono: true,
    action: 'view',
    actionLabel: '조회 →',
    muted: true,
    filterBuckets: ['done'],
    referenceDate: '2026-03-18',
  },
];

export function getSibReportById(id: string) {
  return sibReportRecords.find((rpt) => rpt.id === id);
}

export const sibDashboardReports = sibReportRecords.slice(0, 3);

