import { atom } from 'jotai';

const initialIsDark = false;
const isDarkAtom = atom(initialIsDark);

export { initialIsDark, isDarkAtom };
