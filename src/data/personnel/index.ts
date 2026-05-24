import { leeChanYoung } from './lee-chan-young';
import type { PersonnelRecord } from './types';

export const allPersonnel: PersonnelRecord[] = [leeChanYoung];

export function getPersonnelById(id: string): PersonnelRecord | undefined {
  return allPersonnel.find((p) => p.id === id);
}
