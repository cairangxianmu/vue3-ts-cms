let BASE_URL = "";
let BASE_NAME = "";
const TIME_OUT = 1000;
if (process.env.NODE_ENV === "production") {
    BASE_URL = "http://coderwhy.org/prod";
    BASE_NAME = "coderwhy";
} else if (process.env.NODE_ENV === "development") {
    BASE_URL = "/api";
    BASE_NAME = "caireang";
} else {
    BASE_URL = "http://coderwhy.org/TEST";
    BASE_NAME = "james";
}

export { BASE_URL, BASE_NAME, TIME_OUT };
