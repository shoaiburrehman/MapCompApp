type EnvironmentType = "DEV" | "MASTER" | "LOCAL";
type ConfigType = {
    ENVIRONMENTS: Record<EnvironmentType, Record<string, any>>;
};
const Config: ConfigType = {
    ENVIRONMENTS: {
        LOCAL: {
            LIMIT: 10,
            SOCKET_URL: "SOCKET_URL",
            API_URL: "API_URL",
            GOOGLE_GEOCODING_API_KEY: "YOUR_GOOGLE_PLACES_API_KEY",
            STRIPE_PUBLISHABLE_KEY:
                "STRIPE_PUBLISHABLE_KEY"
        },
        DEV: {
            LIMIT: 10,
            API_URL: ""
        },
        MASTER: {
            LIMIT: 10,
            API_URL: ""
        }
    }
};
const ENVIRONMENT: EnvironmentType = "LOCAL";
export default Config.ENVIRONMENTS[ENVIRONMENT];
