export class PatternResult {
    id: number;
    /**
     * The pattern itself, e.g "/\w\" 
     */
    pattern: string;
    beginIndex: number;
    endIndex: number;
    length: number;
    color: string;
    /**
     * The actual string which matches the pattern, e.g "abc"
     */
    content: string;

    /**
     * The string context of the matching string.
     */
    context: string;
}