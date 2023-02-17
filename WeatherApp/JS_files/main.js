var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var city = document.querySelector('#city');
var form = document.querySelector('.search-form');
var displayData = document.querySelector('.data');
var key = 'AWaeMGsttqBNnOYpgQNRdLOCk68T18VP';
var fetchCity = function (city) { return __awaiter(_this, void 0, void 0, function () {
    var base, query, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
                query = "?apikey=".concat(key, "&q=").concat(city);
                return [4 /*yield*/, fetch(base + query)];
            case 1: return [4 /*yield*/, (_a.sent()).json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data[0]];
        }
    });
}); };
var fetchWeather = function (city_key) { return __awaiter(_this, void 0, void 0, function () {
    var base, query, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                base = 'http://dataservice.accuweather.com/currentconditions/v1/';
                query = "".concat(city_key, "?apikey=").concat(key);
                return [4 /*yield*/, fetch(base + query)];
            case 1: return [4 /*yield*/, (_a.sent()).json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data[0]];
        }
    });
}); };
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var city_name = city.value.trim();
    // fetch data based on city name
    GetData(city_name);
});
// fetch data based on city name
function GetData(city_name) {
    fetchCity(city_name)
        .then(function (data) {
        city_name = data.EnglishName;
        return fetchWeather(data.Key);
    })
        .then(function (data) {
        updateDOM(data, city_name);
    })["catch"](function (err) { return console.log(err); });
}
function updateDOM(data, city_name) {
    console.log(data);
    console.log(data.IsDayTime);
    var mark = "\n    <img src=\"/images/".concat(data.IsDayTime ? 'day.svg' : 'night.svg', "\" class=\"day-img\" />\n    <div class=\"weather-des\">\n      <img\n        src=\"/images/icons/").concat(data.WeatherIcon, ".svg\"\n        alt=\"weather icon not found\"\n        class=\"weather-icon\"\n      />\n      <p class=\"city-name\">").concat(city_name, "</p>\n      <p class=\"weather-class\">").concat(data.WeatherText, "</p>\n      <p class=\"temperature\">").concat(data.Temperature.Metric.Value, " &deg;C</p>\n    </div>");
    displayData.innerHTML = mark;
    displayData.classList.remove('d-none');
    displayData.style.backgroundColor = data.IsDayTime ? '#e6ecf6' : '#243046';
    displayData.style.color = data.IsDayTime ? 'black' : 'white';
    var weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.style.backgroundColor = data.IsDayTime ? '#eaf1fc57' : '#6c7a95';
    window.localStorage.setItem('city', city_name);
}
if (window.localStorage.getItem('city')) {
    GetData(window.localStorage.getItem('city'));
}
