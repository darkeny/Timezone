import { GetCountryTime, GetCountryTimezone } from "./src/modules/zones/usage"

async function main() {
    const getCountryTime = await new GetCountryTime().run("mz")
    console.log(getCountryTime);

    const getCountryTimezone = await new GetCountryTimezone().run("mz")
    console.log(getCountryTimezone);


}

main()