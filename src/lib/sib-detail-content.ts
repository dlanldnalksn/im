import type { SibApprovalRecord } from '../data/sib-approvals-list';
import type { SibNoticeRecord } from '../data/sib-notices-list';
import type { SibOperationRecord } from '../data/sib-operations-list';
import type { SibRegulationRecord } from '../data/sib-regulations-list';
import type { SibReportRecord } from '../data/sib-reports-list';

export interface SibDetailField {
  label: string;
  value: string;
  mono?: boolean;
}

export interface SibDetailContent {
  fields: SibDetailField[];
  body: string[];
}

const workflowLabels = ['접수', '1차 검토', '2차 검토', '최종 승인'];

export function getOperationDetail(op: SibOperationRecord): SibDetailContent {
  const statusTags = op.statusTags.filter((t) => t.variant !== 'unread');
  const statusText = statusTags.map((t) => t.label).join(' · ');

  return {
    fields: [
      { label: '작전번호', value: op.code, mono: true },
      { label: '분류', value: op.category },
      { label: '상태', value: statusText },
      { label: '발령', value: `${op.issuer} · ${op.issuedDate}` },
      { label: '집결', value: `${op.scheduleMain} · ${op.scheduleSub}` },
    ],
    body: [
      op.title,
      `본 작전 명령은 ${op.issuer}에서 ${op.issuedDate.replace(' 발령', '')} 발령되었으며, 집결 일시는 ${op.scheduleMain} (${op.scheduleSub})입니다.`,
      op.filterBuckets.includes('rejected')
        ? '본인 차출 신청이 반려되었습니다. 사유 및 후속 조치는 발령 부서에 문의하십시오.'
        : op.filterBuckets.includes('done')
          ? '작전이 완료되었습니다. 사후 진술·보고 의무가 있는 경우 의무 보고 메뉴에서 확인하십시오.'
          : '집결 전까지 명령 내용을 숙지하고, 이동·동행 인원 기준을 준수하십시오. 변경 사항은 본 시스템을 통해 통보됩니다.',
      '무단 유출·외부 공유 시 형사처벌 및 복무 제재 대상입니다.',
    ],
  };
}

export function getReportDetail(rpt: SibReportRecord): SibDetailContent {
  return {
    fields: [
      { label: '양식', value: rpt.formCode, mono: true },
      { label: '분류', value: rpt.category },
      { label: '상태', value: rpt.statusTags.map((t) => t.label).join(' · ') + (rpt.statusSub ? ` · ${rpt.statusSub}` : '') },
      { label: '제출처', value: `${rpt.submitTo} · ${rpt.submitSub}` },
      { label: '기한', value: `${rpt.deadlineMain} · ${rpt.deadlineSub}` },
    ],
    body: [
      rpt.title,
      `${rpt.formCode} 양식에 따른 ${rpt.category} 건입니다. 제출처는 ${rpt.submitTo}(${rpt.submitSub})이며, 처리 기한은 ${rpt.deadlineMain} ${rpt.deadlineSub}입니다.`,
      rpt.action === 'write'
        ? '기한 내 전자 제출이 필요합니다. 미제출 시 복무 기록에 불이행으로 등재될 수 있습니다.'
        : rpt.action === 'reserve'
          ? '조정원 예약 시스템에서 일정을 확정한 뒤, 방문 당일 신분증과 차출요원증을 지참하십시오.'
          : rpt.action === 'apply'
            ? '신청서 작성 후 결재·신청 메뉴에서 관련 허가와 연동 제출하십시오.'
            : rpt.filterBuckets.includes('done')
              ? '제출·처리가 완료된 건입니다. 필요 시 출력본을 개인 보관함에 저장할 수 있습니다.'
              : '담당 부서 검토 중입니다. 보완 요청 시 알림으로 통보됩니다.',
    ],
  };
}

export function getApprovalDetail(rec: SibApprovalRecord): SibDetailContent {
  const workflowText = rec.workflow
    ? rec.workflow
        .map((step, i) => {
          const label = workflowLabels[i] ?? `${step.step}단계`;
          if (step.state === 'done') return `${label}: 완료`;
          if (step.state === 'current') return `${label}: 진행 중`;
          if (step.state === 'rejected') return `${label}: 반려`;
          return `${label}: 대기`;
        })
        .join(' → ')
    : rec.workflowNote ?? '—';

  return {
    fields: [
      { label: '신청번호', value: rec.requestCode, mono: true },
      { label: '분류', value: rec.category },
      { label: '상태', value: rec.statusLabel + (rec.statusSub ? ` · ${rec.statusSub}` : '') },
      { label: '접수', value: `${rec.dateMain} · ${rec.dateSub}` },
      { label: '결재 진행', value: workflowText },
    ],
    body: [
      rec.title,
      rec.titleNote ? `비고: ${rec.titleNote}` : '',
      `${rec.category} 신청 건으로, 현재 상태는 「${rec.statusLabel}」입니다.`,
      rec.filterBuckets.includes('rejected')
        ? '반려 사유는 결재 이력에 기재되어 있습니다. 수정 후 재신청할 수 있습니다.'
        : rec.filterBuckets.includes('approved')
          ? '승인 완료되었습니다. 승인 내용에 따라 복무·이동·처방 등 후속 조치를 이행하십시오.'
          : rec.filterBuckets.includes('cancelled')
            ? '신청인 또는 담당 부서에 의해 취소된 건입니다.'
            : '결재가 진행 중입니다. 보완 요청 시 알림으로 통보됩니다.',
    ].filter(Boolean),
  };
}

export function getRegulationDetail(rec: SibRegulationRecord): SibDetailContent {
  return {
    fields: [
      { label: '문서번호', value: rec.ruleCode, mono: true },
      { label: '분류', value: rec.category },
      { label: '상태', value: rec.statusLabel },
      { label: '소관', value: rec.department },
      { label: '시행일', value: rec.effectiveDate },
    ],
    body: [
      rec.title,
      rec.titleNote ?? '',
      `${rec.category}에 해당하는 ${rec.ruleCode} 문서입니다. 시행일 ${rec.effectiveDate}부터 적용됩니다.`,
      rec.statusVariant === 'revised'
        ? '최근 개정된 조항이 포함되어 있습니다. 개정 전후 비교는 법무·행정과에 문의하십시오.'
        : '현행 시행 중인 규정입니다. 차출요원 복무·작전·처방 관련 의무를 확인하십시오.',
      '본 규정은 특감국 내부 열람용이며, 외부 반출을 금합니다.',
    ].filter(Boolean),
  };
}

export function getNoticeDetail(rec: SibNoticeRecord): SibDetailContent {
  return {
    fields: [
      { label: '공지번호', value: rec.noticeCode, mono: true },
      { label: '분류', value: rec.category },
      { label: '소관', value: rec.department },
      { label: '대상', value: rec.audience },
      { label: '게시', value: `${rec.postedDate} ${rec.postedTime}` },
    ],
    body: [
      rec.title,
      rec.titleNote ?? '',
      `${rec.department}에서 ${rec.audience} 대상으로 게시한 ${rec.category} 공지입니다.`,
      rec.filterKey === 'urgent'
        ? '긴급 공지입니다. 즉시 내용을 확인하고, 지시 사항을 이행하십시오.'
        : rec.filterKey === 'hr'
          ? '인사·복무 관련 안내입니다. 해당 기한 내 필요 조치를 완료하십시오.'
          : '일반 공지입니다. 변경 사항은 추후 별도 안내될 수 있습니다.',
    ].filter(Boolean),
  };
}
