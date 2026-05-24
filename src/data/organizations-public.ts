export interface PublicOrg {
  id: string;
  num: string;
  hanja: string;
  name: string;
  nameHan: string;
  codeEn: string;
  desc: string;
  location: string;
  iconBg: string;
  iconColor: string;
  href: string;
  classified?: boolean;
}

export const publicOrgs: PublicOrg[] = [
  {
    id: 'admin',
    num: '01',
    hanja: '行',
    name: '중앙행정청',
    nameHan: '中央行政廳',
    codeEn: 'CENTRAL ADMINISTRATION',
    desc: '등재자 등록 · 신분 관리 · 거주/이동/취업 허가 · 동기화 등록을 담당합니다.',
    location: '서울 본청 · 광역 17개소',
    iconBg: 'bg-[#eef4f8]',
    iconColor: 'text-[#1e4d6e]',
    href: 'organizations/',
  },
  {
    id: 'adjust',
    num: '02',
    hanja: '調',
    name: '조정원',
    nameHan: '調整院',
    codeEn: 'COORDINATION BUREAU',
    desc: '능력자 의료 관리 · 조력자 매칭 · 조정시술 · 안정원 운영을 담당합니다.',
    location: '본원 1 · 지역 의료센터 9',
    iconBg: 'bg-[#eef6ee]',
    iconColor: 'text-[#2d5f3f]',
    href: 'organizations/',
  },
  {
    id: 'sib',
    num: '03',
    hanja: '監',
    name: '특수감찰국',
    nameHan: '特殊監察局',
    codeEn: 'SPECIAL INSPECTION BUREAU',
    desc: '고위험 능력자 격리 · 미등재자 검거 · 차출 운용 · 반정부 감시 업무를 담당합니다.',
    location: '위치 비공개 · 인가자 전용',
    iconBg: 'bg-[#f5e5e5]',
    iconColor: 'text-imc-danger',
    href: 'organizations/',
    classified: true,
  },
  {
    id: 'research',
    num: '04',
    hanja: '硏',
    name: '이능연구원',
    nameHan: '異能硏究院',
    codeEn: 'POWER RESEARCH INSTITUTE',
    desc: '능력 메커니즘 연구 · 학술 정보 제공 · 등재자 데이터베이스 운영을 담당합니다.',
    location: '본원 1 · 부속 연구시설',
    iconBg: 'bg-[#ede8f0]',
    iconColor: 'text-[#5a3a7a]',
    href: 'organizations/',
  },
];
