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
var curCourse = document.querySelector(".courses");
var ham = document.querySelector(".hamburger");
var hamburgerIcon = document.querySelector("#hamburgerIcon");
var haveSubNav = document.querySelector(".have-sub");
var subNav = document.querySelector(".sub-nav");
var openSubNav = document.querySelector(".open-sub-nav-icon");
var collapses = document.querySelector('.collapse');
var openNotification = document.querySelector('.notification-nav');
var notificationIcon = document.querySelector('#notification-icon');
var displayNotification = document.querySelector('#display-notification');
var totalNotification = document.querySelector('#total-notification');
var openAnnouncement = document.querySelector('.announcement-nav');
var announcementIcon = document.querySelector('#announcement-icon');
var displayAnnouncement = document.querySelector('#display-announcement');
var totalAnnouncement = document.querySelector('#total-announcement');
var coursesTotal = document.querySelector('.total-courses');
var windowSize = window.innerWidth;
// onclick hamburger event
ham.addEventListener('click', function () {
    console.log(window.innerWidth);
    if (document.querySelector('.expand')) {
        hamburgerIcon.classList.remove('white-icon');
        collapses.style.animation = 'menu-close-anim 300ms';
        setTimeout(function () {
            console.log("into");
            collapses.classList.remove("expand");
        }, 280);
    }
    else {
        collapses.style.animation = 'menu-open-anim 300ms';
        hamburgerIcon.classList.add('white-icon');
        collapses.classList.add("expand");
    }
});
var sub_nav;
var current_link;
var dropdown_arrow;
// flag for identify sub-navigation of header is opened
var flag = 0;
// handle menu and submenu after opening by clicking hamburger menu
function open_sub_nav(id) {
    if (ham.style.display === '' && window.innerWidth < 800) {
        sub_nav = document.querySelector('#' + id + '-sub-nav');
        current_link = document.querySelector('#' + id);
        dropdown_arrow = document.querySelector('#' + id + '-dropdown-arrow');
        console.log(sub_nav.style.display);
        if (sub_nav.style.display == 'none' || sub_nav.style.display == '') {
            if (document.querySelector(".sub-nav-display-flex")) {
                var active = document.querySelector(".sub-nav-display-flex");
                active.style.display = 'none';
                active.classList.remove('sub-nav-display-flex');
            }
            if (document.querySelector(".sub-nav-link-bg")) {
                var active = document.querySelector(".sub-nav-link-bg");
                active.classList.remove('sub-nav-link-bg');
            }
            if (document.querySelector(".sub-nav-dropdown-arrow")) {
                var active = document.querySelector(".sub-nav-dropdown-arrow");
                active.classList.remove('sub-nav-dropdown-arrow');
            }
            // set marker to identify when other sub menu will opened by user
            sub_nav.classList.add('sub-nav-display-flex');
            sub_nav.style.display = 'flex';
            console.log("open");
            current_link.classList.add('sub-nav-link-bg');
            dropdown_arrow.classList.add('sub-nav-dropdown-arrow');
            sub_nav.style.animation = 'menu-open-anim 300ms';
            flag = 1;
        }
        else if (sub_nav.style.display == 'flex') {
            console.log("close");
            sub_nav.style.animation = 'menu-close-anim 300ms';
            setTimeout(function () {
                current_link.classList.remove('sub-nav-link-bg');
                dropdown_arrow.classList.remove('sub-nav-dropdown-arrow');
                sub_nav.style.display = 'none';
            }, 280);
            flag = 0;
        }
    }
}
// Remove style of sub-navigation if that opened ans screen goes wide
addEventListener("resize", function () {
    if (flag === 1) {
        dropdown_arrow.classList.remove('sub-nav-dropdown-arrow');
        sub_nav.style.display = 'none';
        current_link.classList.remove('sub-nav-link-bg');
    }
});
// Announcment open and close event when click on it 
openAnnouncement.addEventListener('click', function () {
    console.log(displayAnnouncement.style.display);
    if (displayAnnouncement.style.display != 'flex') {
        // close announcement dropdown if that is opened
        if (totalNotification.style.display === 'none') {
            notificationIcon.classList.remove('white-icon');
            totalNotification.style.display = 'flex';
            displayNotification.style.animation = 'menu-close-anim 300ms';
            setTimeout(function () {
                displayNotification.style.display = 'none';
            }, 280);
        }
        announcementIcon.classList.add('white-icon');
        displayAnnouncement.style.display = 'flex';
        displayAnnouncement.style.animation = 'menu-open-anim 300ms';
        totalAnnouncement.style.display = 'none';
    }
    else {
        announcementIcon.classList.remove('white-icon');
        totalAnnouncement.style.display = 'flex';
        displayAnnouncement.style.animation = 'menu-close-anim 300ms';
        setTimeout(function () {
            displayAnnouncement.style.display = 'none';
        }, 280);
    }
});
// Notification open and close event when click on it 
openNotification.addEventListener('click', function () {
    if (displayNotification.style.display !== 'flex') {
        // close notification dropdown if that is opened
        if (totalAnnouncement.style.display === 'none') {
            announcementIcon.classList.remove('white-icon');
            totalAnnouncement.style.display = 'flex';
            displayAnnouncement.style.animation = 'menu-close-anim 300ms';
            setTimeout(function () {
                displayAnnouncement.style.display = 'none';
            }, 280);
        }
        notificationIcon.classList.add('white-icon');
        displayNotification.style.display = 'flex';
        displayNotification.style.animation = 'menu-open-anim 300ms';
        totalNotification.style.display = 'none';
    }
    else {
        notificationIcon.classList.remove('white-icon');
        totalNotification.style.display = 'flex';
        displayNotification.style.animation = 'menu-close-anim 300ms';
        setTimeout(function () {
            displayNotification.style.display = 'none';
        }, 280);
    }
});
// Notification open and close event when curser hover on it 
// and screen width greater than 800px
openNotification.addEventListener('mouseenter', function () {
    if (window.innerWidth >= 800) {
        notificationIcon.classList.add('white-icon');
        displayNotification.style.display = 'flex';
        displayNotification.style.animation = 'menu-open-anim 300ms';
        totalNotification.style.display = 'none';
    }
});
openNotification.addEventListener('mouseleave', function () {
    if (window.innerWidth >= 800) {
        notificationIcon.classList.remove('white-icon');
        totalNotification.style.display = 'flex';
        displayNotification.style.animation = 'menu-close-anim 300ms';
        setTimeout(function () {
            displayNotification.style.display = 'none';
        }, 280);
    }
});
// Announcement open and close event when curser hover on it
// and screen width greater than 800px
openAnnouncement.addEventListener('mouseenter', function () {
    if (window.innerWidth >= 800) {
        announcementIcon.classList.add('white-icon');
        displayAnnouncement.style.display = 'flex';
        displayAnnouncement.style.animation = 'menu-open-anim 300ms';
        totalAnnouncement.style.display = 'none';
    }
});
openAnnouncement.addEventListener('mouseleave', function () {
    if (window.innerWidth >= 800) {
        announcementIcon.classList.remove('white-icon');
        totalAnnouncement.style.display = 'flex';
        displayAnnouncement.style.animation = 'menu-close-anim 300ms';
        setTimeout(function () {
            displayAnnouncement.style.display = 'none';
        }, 280);
    }
});
// function for fetch cards data from json file
var fetchCourse = function () { return __awaiter(_this, void 0, void 0, function () {
    var responce;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('../JSONFiles/courses.json')];
            case 1:
                responce = _a.sent();
                return [4 /*yield*/, responce.json()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// run function and print all card information 
fetchCourse()
    .then(function (data) {
    var mark;
    var total = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var card = data_1[_i];
        mark = "\n        <div class=\"course\">\n            ".concat(card.expired ? "<p class=\"expired\">EXPIRED</p>" : "", "\n            <div class=\"course-data\">\n            <img\n                class=\"course-img\"\n                src=\"").concat(card.img, "\"\n                alt=\"course image not found\"\n            />\n            <div class=\"course-info\">\n                <div class=\"course-first-line\">\n                <h3 class=\"color-black\">").concat(card.topicName, "</h3>\n                <img\n                    class=\"").concat(card.favorite == true ? "" : "favorite-unmarked", "\"\n                    src=\"images/icons/favourite.svg\"\n                    alt=\"favorite icon not found\"\n                />\n                </div>\n                <p class=\"course-subject\">\n                ").concat(card.courseSubject, " Grade <span class=\"pipeline\"></span> \n                ").concat(card.totalGrade.grade, "\n                <span class=\"add-grade\">+").concat(card.totalGrade.addedGrade, "</span>\n                </p>\n                <div class=\"course-detail\">\n                <p>\n                    ").concat(card.courseDetail.units == 0 ? "" : "<span class=\"color-black\">".concat(card.courseDetail.units, "</span> Unitts &nbsp;"), "\n                    ").concat(card.courseDetail.lessons == 0 ? "" : "<span class=\"color-black\">".concat(card.courseDetail.lessons, "</span> Lessons &nbsp;"), "\n                    ").concat(card.courseDetail.topics == 0 ? "" : "<span class=\"color-black\">".concat(card.courseDetail.topics, "</span> Topics"), "\n                </p>\n                <select class=\"dropdown-classes\" ").concat(card.classees[0] == "no" ? "disabled" : " ", ">\n                    ").concat(card.classees[0] == "no" ?
            "<option>No Classes</option>" :
            "".concat(card.classees.map(function (option) {
                return "<option value=\"No Classes\">".concat(option, "</option>");
            })), "   \n                </select>\n                <p>\n                    ").concat(card.students == 0 ? "" : "<span>".concat(card.students, "</span> Students"), "\n                    ").concat(card.courseDuration.startDate == "no" ? "" : "<span class=\"pipeline\"></span> ".concat(card.courseDuration.startDate), "\n                    ").concat(card.courseDuration.endDate == "no" ? "" : "- ".concat(card.courseDuration.endDate), "\n                </p>\n                </div>\n            </div>\n            </div>\n            <div class=\"course-track-icons\">\n            <img \n            class=\"").concat(card.courseAccess.priview ? "" : "opacity-0-4", "\" src=\"images/icons/preview.svg\" alt=\"preview image not found\" />\n            <img\n                class=\"").concat(card.courseAccess.manageCourse ? "" : "opacity-0-4", "\"\n                src=\"images/icons/manage course.svg\"\n                alt=\"manage course icon not found\"\n            />\n            <img\n            class=\"").concat(card.courseAccess.gradeSubmission ? "" : "opacity-0-4", "\"\n                src=\"images/icons/grade submissions.svg\"\n                alt=\"grade icon not found\"\n            />\n            <img\n                class=\"").concat(card.courseAccess.reports ? "" : "opacity-0-4", "\"\n                src=\"images/icons/reports.svg\"\n                alt=\"report icon not found\"\n            />\n            </div>\n        </div>\n        ");
        total += 1;
        curCourse.innerHTML += mark;
    }
    coursesTotal.innerHTML = total + '';
});
console.log(windowSize);
