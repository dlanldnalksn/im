export interface PersonnelRecord {
  id: string;
  name: string;
  nameEn?: string;
  age: number;
  sex: 'M' | 'F';
  org: string;
  department: string;
  role: string;
  employeeId: string;
  residence: {
    official: string;
    personal: string;
  };
  contact: {
    mobile: string;
    extension: string;
  };
  registry: {
    type: string;
    abilityGrade: string | null;
    riskGrade: string | null;
    matchingStatus: string;
  };
  ability: {
    category: string;
    passive: string;
    detection: string;
    effect: string;
    backlashActive: string[];
    backlashAfter: string[];
    chronic: string[];
  };
  appearance: {
    height: number;
    weight: number;
    summary: string;
    outfitWork: string;
    outfitCasual: string;
    marks: string;
  };
  psych: {
    surface: string;
    inner: string;
    speech: string;
    special: string[];
    likes: string[];
    dislikes: string[];
    narrativeGuide: string;
  };
  tags: string[];
  portalId: 'imc' | 'admin' | 'adjust' | 'sib' | 'research';
  clearanceRequired: number;
}
