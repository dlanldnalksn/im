const OP_KEY = 'sib-read-ops';
const NTC_KEY = 'sib-read-notices';

function loadSet(key: string): Set<string> {
  if (typeof localStorage === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(key);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function saveSet(key: string, ids: Set<string>) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, JSON.stringify([...ids]));
}

export function markOperationRead(id: string) {
  const read = loadSet(OP_KEY);
  read.add(id);
  saveSet(OP_KEY, read);
}

export function markNoticeRead(id: string) {
  const read = loadSet(NTC_KEY);
  read.add(id);
  saveSet(NTC_KEY, read);
}

export function getReadOperations(): Set<string> {
  return loadSet(OP_KEY);
}

export function getReadNotices(): Set<string> {
  return loadSet(NTC_KEY);
}

export const SIB_READ_KEYS = {
  operations: OP_KEY,
  notices: NTC_KEY,
} as const;
