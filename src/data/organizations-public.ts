export interface PublicOrg {
  id: string;
  num: string;
  hanja: string;
  name: string;
  nameHan: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  href: string;
}

export const publicOrgs: PublicOrg[] = [
  {
    id: 'admin',
    num: '01',
    hanja: '行',
    name: '중앙행정청',
    nameHan: '中央行政廳',
    desc: '등재자 등록 · 신분 관리 · 거주 / 이동 / 취업 허가 · 동기화 등록',
    iconBg: 'bg-[#e8eef5]',
    iconColor: 'text-imc-primary',
    href: 'organizations/',
  },
  {
    id: 'adjust',
    num: '02',
    hanja: '調',
    name: '조정원',
    nameHan: '調整院',
    desc: '능력자 의료 관리 · 조력자 매칭 · 조정시술 · 안정원 운영',
    iconBg: 'bg-[#e8f0eb]',
    iconColor: 'text-[#2d5f3f]',
    href: 'organizations/',
  },
  {
    id: 'research',
    num: '03',
    hanja: '硏',
    name: '이능연구원',
    nameHan: '異能硏究院',
    desc: '능력 메커니즘 연구 · 학술 정보 제공 · 데이터베이스 운영',
    iconBg: 'bg-[#ede8f0]',
    iconColor: 'text-[#5a3a7a]',
    href: 'organizations/',
  },
];
