import { GetCountryTime } from "./usage"

async function main() {
    const getCountryTime = await new GetCountryTime().run("mz")
    console.log(getCountryTime);
    
}
main()