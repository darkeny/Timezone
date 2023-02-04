import { Timezones } from "./factory";

export class GetCountryTime {
    async run(code: string): Promise<Date> {
        const offset = Timezones.offset(code)
        return new Date(Date.now() + offset * 1000 * 60 * 60)
    }
}

export class GetCountryTimezone {
    async run(code: string): Promise<Timezones> {
        return Timezones.of(code)
    }
}

export class GetCountryOffset {

}