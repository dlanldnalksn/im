export interface IntranetPortal {
  id: string;
  code: string;
  name: string;
  nameHan: string;
  employeePrefix: string;
  password: string;
  accent: string;
  banner: string;
  clearanceLabel: string;
  description: string;
}

export const intranetPortals: IntranetPortal[] = [
  {
    id: 'imc',
    code: 'IMC',
    name: '위원회 본청',
    nameHan: '異能管理委員會 本廳',
    employeePrefix: 'TG-0',
    password: 'imc-intra',
    accent: '#1a1a1a',
    banner: '위원회 통합 행정 · 산하 기관 조율 · 대외 대응',
    clearanceLabel: '1급 (통합)',
    description: '산하 기관 공통 공지·조직 개요. 기관별 기밀 자료는 해당 산하망에서 열람.',
  },
  {
    id: 'admin',
    code: 'ADM',
    name: '중앙행정청',
    nameHan: '中央行政廳',
    employeePrefix: 'CA-',
    password: 'admin-intra',
    accent: '#0a3d62',
    banner: '등재·신분·허가·동기화 등록',
    clearanceLabel: '행정 2급',
    description: '등재자 신분 관리, 허가·이동·취업 심사, 동기화 등록 업무.',
  },
  {
    id: 'adjust',
    code: 'ADJ',
    name: '조정원',
    nameHan: '調整院',
    employeePrefix: 'AD-',
    password: 'adjust-intra',
    accent: '#2d5f3f',
    banner: '의료·매칭·조정시술·안정원',
    clearanceLabel: '의료 2급',
    description: '능력자 의료, 조력자 매칭, 조정시술 및 안정원 운영.',
  },
  {
    id: 'sib',
    code: 'SIB',
    name: '특수감찰국',
    nameHan: '特殊監察國',
    employeePrefix: 'TG-2',
    password: 'sib-intra',
    accent: '#8b1a1a',
    banner: '고위험 격리 · 미등재 검거 · 차출 · 대외 감시',
    clearanceLabel: '2급 (기밀)',
    description: '대외비. 검거·집행·수용·차출·대외처 업무. 타 기관 접근 불가.',
  },
  {
    id: 'research',
    code: 'RES',
    name: '이능연구원',
    nameHan: '異能硏究院',
    employeePrefix: 'IR-',
    password: 'research-intra',
    accent: '#5a3a7a',
    banner: '능력 메커니즘 · 실험 데이터 · 학술 DB',
    clearanceLabel: '연구 2급',
    description: '실험·연구 자료, 내부 논문, 분류 DB. 일부 프로젝트는 추가 승인 필요.',
  },
];

export function getPortalById(id: string): IntranetPortal | undefined {
  return intranetPortals.find((p) => p.id === id);
}

export function getPortalByCode(code: string): IntranetPortal | undefined {
  const normalized = code.trim().toUpperCase();
  return intranetPortals.find((p) => p.code === normalized || p.id === normalized.toLowerCase());
}

export function getPortalByEmployeeId(employeeId: string): IntranetPortal | undefined {
  const id = employeeId.trim().toUpperCase();
  return intranetPortals.find((p) => id.startsWith(p.employeePrefix.toUpperCase()));
}

export function resolvePortalLogin(
  orgCode: string,
  employeeId: string,
  password: string,
): IntranetPortal | null {
  const byCode = orgCode ? getPortalByCode(orgCode) : undefined;
  const byEmployee = employeeId ? getPortalByEmployeeId(employeeId) : undefined;
  const portal = byCode ?? byEmployee;

  if (!portal || password !== portal.password) return null;
  if (byCode && byEmployee && byCode.id !== byEmployee.id) return null;

  return portal;
}
