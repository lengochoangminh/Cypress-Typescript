export interface IA11yUtil {
    initAxe: (url?: string) => void;
    check: (knownBug?: boolean | string) => void;
}