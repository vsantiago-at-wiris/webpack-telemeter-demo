import { Telemeter, Level } from "@wiris/telemeter-wasm"; // Replace [flavour] with `js` or `wasm`.


export default function telemeterDemo() {
    const solution = { name: "webpack-telemeter-demo", version: "1.0.0" };
    const hosts = [];
    const config = { test: true, debug: true, api_key: "00000000-0000-0000-000000000000" };

    const telemeter = new Telemeter(solution, hosts, config); // A Telemeter instance is a Telemetry session.

    const ident = telemeter.identify("user@email.local"); // Telemeter anonymize the user identifier.

    telemeter.log(Level.DEBUG, "This is a log message for a example");

    telemeter.finish(); // After this call, Telemeter's instance can NOT be used more.

    return ident;
}

