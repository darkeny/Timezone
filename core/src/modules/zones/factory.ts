import { Timezone } from "./types";

export abstract class Timezones {
    public static offset(code: string): number {
        if (code == 'mz') return 2
        throw new Error("No offset for " + code);
    }
    public static of(code: string): Timezone {
        const offset = Timezones.offset(code);
        const time = new Date(Date.now() + offset * 1000 * 60 * 60)

        return new TimezoneImp("", time, offset)
    }
}
class TimezoneImp implements Timezone {
    constructor(
        readonly name: string,
        readonly time: Date,
        readonly offset: number
    ) { }

}