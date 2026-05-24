import type { IntranetPortal } from '../data/intranet-portals';
import { allPersonnel } from '../data/personnel';
import type { PersonnelRecord } from '../data/personnel/types';

export interface IntranetDocument {
  id: string;
  title: string;
  meta: string;
  portalIds: string[];
  accessible: boolean;
}

export interface IntranetNotice {
  id: string;
  title: string;
  date: string;
  summary: string;
  portalIds: string[];
}

export const intranetNotices: IntranetNotice[] = [
  {
    id: 'i1',
    title: '[2처] 미등재자 검거 작전 브리핑',
    date: '2026-03-18',
    summary: '수도권 미등재 능력자 3명 동시 검거 예정. 차출 요원 배치 확정.',
    portalIds: ['sib'],
  },
  {
    id: 'i2',
    title: '인사 통합 조회 시스템 점검',
    date: '2026-03-20',
    summary: '3월 22일 02:00~04:00 내부망 점검. 해당 시간 접속 불가.',
    portalIds: ['imc', 'admin', 'adjust', 'sib', 'research'],
  },
  {
    id: 'i3',
    title: '2026년 1분기 등재 통계 집계',
    date: '2026-03-12',
    summary: '지역별 등재·미등재 신고 건수 중간 집계 완료.',
    portalIds: ['imc', 'admin'],
  },
  {
    id: 'i4',
    title: '조력자 매칭 우선순위 개정 (안)',
    date: '2026-03-08',
    summary: '갑·을급 대기열 재산정 기준 시행 전 내부 의견 수렴.',
    portalIds: ['adjust'],
  },
  {
    id: 'i5',
    title: '프로젝트 Σ-7 실험실 출입 통제',
    date: '2026-03-05',
    summary: 'B동 지하 2층 추가 생체인증 적용. 승인 없는 출입 시 보안 위반.',
    portalIds: ['research'],
  },
];

export const intranetDocuments: IntranetDocument[] = [
  {
    id: 'd1',
    title: '국가 각성자 관리 체계 요약 백서 (전문)',
    meta: '제 17.3 호 · 대외비',
    portalIds: ['imc', 'admin', 'adjust', 'research'],
    accessible: true,
  },
  {
    id: 'd2',
    title: '신천사건 내부 조사 브리핑',
    meta: '1급 열람',
    portalIds: ['imc'],
    accessible: false,
  },
  {
    id: 'd3',
    title: '차출 요원 운용 지침',
    meta: '2처·4처 공동 · 2급',
    portalIds: ['sib'],
    accessible: true,
  },
  {
    id: 'd4',
    title: '미등재자 검거 표준 절차 (SOP)',
    meta: '특감국 내부 · 2급',
    portalIds: ['sib'],
    accessible: true,
  },
  {
    id: 'd5',
    title: '등재 신청 서식·심사 매뉴얼',
    meta: '행정청 내부',
    portalIds: ['admin'],
    accessible: true,
  },
  {
    id: 'd6',
    title: '조정시술 후속 관리 프로토콜',
    meta: '조정원 의료국',
    portalIds: ['adjust'],
    accessible: true,
  },
  {
    id: 'd7',
    title: '능력 파장 스펙트럼 분석 (Σ-7)',
    meta: '연구원 기밀 · 2급',
    portalIds: ['research'],
    accessible: true,
  },
];

export function getNoticesForPortal(portalId: string): IntranetNotice[] {
  return intranetNotices.filter((n) => n.portalIds.includes(portalId));
}

export function getDocumentsForPortal(portalId: string): IntranetDocument[] {
  return intranetDocuments
    .filter((d) => d.portalIds.includes(portalId))
    .map((d) => ({ ...d, accessible: d.portalIds.includes(portalId) }));
}

export function getPersonnelForPortal(portalId: string): PersonnelRecord[] {
  return allPersonnel.filter((p) => p.portalId === portalId);
}

export function canViewPersonnel(person: PersonnelRecord, portalId: string): boolean {
  return person.portalId === portalId;
}

export function getOrgChartSections(portal: IntranetPortal) {
  const full = [
    {
      name: '중앙행정청',
      desc: '등재·신분·허가·동기화 등록',
      restricted: false,
    },
    {
      name: '조정원',
      desc: '의료·매칭·시술·안정원',
      restricted: false,
    },
    {
      name: '특수감찰국',
      desc: '고위험 격리·미등재 검거·차출·대외 감시',
      restricted: true,
      detail: [
        '1처 정보처 — 등재자·미등재 추적, 침투·감청',
        '2처 집행처 — 검거·진압 (차출 능력자 다수)',
        '3처 수용처 — 격리시설(보호처분소) 7개소',
        '4처 운용처 — 차출자 선발·배치',
        '5처 대외처 — 해외 동향·외국 기관',
        '특수작전과 — 조직도 미등재 · 본청 직속',
      ],
    },
    {
      name: '이능연구원',
      desc: '능력 메커니즘 연구',
      restricted: false,
    },
  ];

  switch (portal.id) {
    case 'imc':
      return full.map((org) =>
        org.restricted ? { ...org, detail: undefined, note: '산하 기밀망 별도 운영 · 상세 조직도 비공개' } : org,
      );
    case 'admin':
      return [full[0]];
    case 'adjust':
      return [full[1]];
    case 'sib':
      return [full[2]];
    case 'research':
      return [full[3]];
    default:
      return [];
  }
}
