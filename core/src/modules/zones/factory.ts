export abstract class Timezones {
    public static offset(code: string): number {
        if (code == 'mz') return 2
        throw new Error("No offset for " + code);

    }
}