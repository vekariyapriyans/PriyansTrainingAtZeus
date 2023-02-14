const curCourse=document.querySelector(".courses") as HTMLDivElement

const ham = document.querySelector(".hamburger") as HTMLLinkElement
const hamburgerIcon = document.querySelector("#hamburgerIcon") as HTMLImageElement
const haveSubNav = document.querySelector(".have-sub") as HTMLLinkElement
const subNav = document.querySelector(".sub-nav") as HTMLDivElement
const openSubNav = document.querySelector(".open-sub-nav-icon") as HTMLLinkElement
const collapses = document.querySelector('.collapse') as HTMLDataListElement

const openNotification = document.querySelector('.notification-nav') as HTMLLinkElement
const notificationIcon = document.querySelector('#notification-icon') as HTMLImageElement
const displayNotification = document.querySelector('#display-notification') as HTMLDivElement
const totalNotification=document.querySelector('#total-notification') as HTMLElement

const openAnnouncement = document.querySelector('.announcement-nav') as HTMLLinkElement
const announcementIcon = document.querySelector('#announcement-icon') as HTMLImageElement
const displayAnnouncement = document.querySelector('#display-announcement') as HTMLDivElement
const totalAnnouncement=document.querySelector('#total-announcement') as HTMLElement

const coursesTotal = document.querySelector('.total-courses') as HTMLElement



var windowSize=window.innerWidth;


// onclick hamburger event
ham.addEventListener('click', () => {
    console.log(window.innerWidth)
    if(document.querySelector('.expand') as HTMLDataListElement){
        hamburgerIcon.classList.remove('white-icon')
        collapses.style.animation='menu-close-anim 300ms'
        setTimeout(()=>{
            console.log("into")
            collapses.classList.remove("expand");
        },280)
    }
    else{
        collapses.style.animation='menu-open-anim 300ms'
        hamburgerIcon.classList.add('white-icon')
        collapses.classList.add("expand")
    }
})
var sub_nav
var current_link
var dropdown_arrow

// flag for identify sub-navigation of header is opened
var flag=0
// handle menu and submenu after opening by clicking hamburger menu
function open_sub_nav(id){
    if(ham.style.display==='' && window.innerWidth<800){
            sub_nav=document.querySelector('#'+id+'-sub-nav') as HTMLDivElement
            current_link= document.querySelector('#'+id) as HTMLLinkElement
            dropdown_arrow=document.querySelector('#'+id+'-dropdown-arrow') as HTMLImageElement
            console.log(sub_nav.style.display)
            if(sub_nav.style.display=='none' || sub_nav.style.display==''){
                if(document.querySelector(".sub-nav-display-flex") as HTMLDivElement){
                    let active=document.querySelector(".sub-nav-display-flex") as HTMLDivElement
                    active.style.display='none'
                    active.classList.remove('sub-nav-display-flex')
                }
                if(document.querySelector(".sub-nav-link-bg") as HTMLDivElement){
                    let active=document.querySelector(".sub-nav-link-bg") as HTMLDivElement
                    active.classList.remove('sub-nav-link-bg')
                }
                if(document.querySelector(".sub-nav-dropdown-arrow") as HTMLImageElement){
                    let active=document.querySelector(".sub-nav-dropdown-arrow") as HTMLImageElement
                    active.classList.remove('sub-nav-dropdown-arrow')
                }
                // set marker to identify when other sub menu will opened by user
                sub_nav.classList.add('sub-nav-display-flex')
                sub_nav.style.display='flex'
                console.log("open")
                current_link.classList.add('sub-nav-link-bg')
                dropdown_arrow.classList.add('sub-nav-dropdown-arrow')
                sub_nav.style.animation='menu-open-anim 300ms'
                flag=1
            }
            else if(sub_nav.style.display=='flex'){
                console.log("close");
                sub_nav.style.animation='menu-close-anim 300ms'
                setTimeout(()=>{
                    current_link.classList.remove('sub-nav-link-bg')
                    dropdown_arrow.classList.remove('sub-nav-dropdown-arrow')
                    sub_nav.style.display='none'
                },280)
                flag=0
            }
    }
}
// Remove style of sub-navigation if that opened ans screen goes wide
addEventListener("resize",()=>{
    if(flag===1){
        dropdown_arrow.classList.remove('sub-nav-dropdown-arrow')
        sub_nav.style.display='none'
        current_link.classList.remove('sub-nav-link-bg')
    }
})


// Announcment open and close event when click on it 
openAnnouncement.addEventListener('click', () => {
    console.log(displayAnnouncement.style.display)
    if(displayAnnouncement.style.display!='flex'){
        // close announcement dropdown if that is opened
        if(totalNotification.style.display==='none'){
            notificationIcon.classList.remove('white-icon') 
            totalNotification.style.display='flex'
            displayNotification.style.animation='menu-close-anim 300ms'
            setTimeout(()=>{
                displayNotification.style.display='none'
            },280)
        }
        announcementIcon.classList.add('white-icon') 
        displayAnnouncement.style.display='flex'
        displayAnnouncement.style.animation='menu-open-anim 300ms'
        totalAnnouncement.style.display='none'
    }
    else{
        announcementIcon.classList.remove('white-icon') 
        totalAnnouncement.style.display='flex'
        displayAnnouncement.style.animation='menu-close-anim 300ms'
        setTimeout(()=>{
            displayAnnouncement.style.display='none'
        },280)
    }
})

// Notification open and close event when click on it 
openNotification.addEventListener('click', () => {
    if(displayNotification.style.display!=='flex'){
        // close notification dropdown if that is opened
        if(totalAnnouncement.style.display==='none'){
            announcementIcon.classList.remove('white-icon') 
            totalAnnouncement.style.display='flex'
            displayAnnouncement.style.animation='menu-close-anim 300ms'
            setTimeout(()=>{
                displayAnnouncement.style.display='none'
            },280)
        }
        notificationIcon.classList.add('white-icon') 
        displayNotification.style.display='flex'
        displayNotification.style.animation='menu-open-anim 300ms'
        totalNotification.style.display='none'
    }
    else{
        notificationIcon.classList.remove('white-icon') 
        totalNotification.style.display='flex'
        displayNotification.style.animation='menu-close-anim 300ms'
        setTimeout(()=>{
            displayNotification.style.display='none'
        },280)
    }
})


// Notification open and close event when curser hover on it 
// and screen width greater than 800px
openNotification.addEventListener('mouseenter', () => {
    if(window.innerWidth>=800){
        notificationIcon.classList.add('white-icon') 
        displayNotification.style.display='flex'
        displayNotification.style.animation='menu-open-anim 300ms'
        totalNotification.style.display='none'
    }
})
openNotification.addEventListener('mouseleave', () => {
    if(window.innerWidth>=800){
        notificationIcon.classList.remove('white-icon') 
        totalNotification.style.display='flex'
        displayNotification.style.animation='menu-close-anim 300ms'
        setTimeout(()=>{
            displayNotification.style.display='none'
        },280)
    }
})


// Announcement open and close event when curser hover on it
// and screen width greater than 800px
openAnnouncement.addEventListener('mouseenter', () => {
    if(window.innerWidth>=800){
        announcementIcon.classList.add('white-icon') 
        displayAnnouncement.style.display='flex'
        displayAnnouncement.style.animation='menu-open-anim 300ms'
        totalAnnouncement.style.display='none'
    }
})
openAnnouncement.addEventListener('mouseleave', () => {
    if(window.innerWidth>=800){
        announcementIcon.classList.remove('white-icon') 
        totalAnnouncement.style.display='flex'
        displayAnnouncement.style.animation='menu-close-anim 300ms'
        setTimeout(()=>{
            displayAnnouncement.style.display='none'
        },280)
    }
})


// function for fetch cards data from json file
const fetchCourse=async ()=> {
    let responce = await fetch('../JSONFiles/courses.json')
    return await responce.json()
}
// run function and print all card information 
fetchCourse()
.then(data=>{
    let mark:string
    let total=0
    for(let card of data){
        mark=`
        <div class="course">
            ${card.expired?`<p class="expired">EXPIRED</p>`:``}
            <div class="course-data">
            <img
                class="course-img"
                src="${card.img}"
                alt="course image not found"
            />
            <div class="course-info">
                <div class="course-first-line">
                <h3 class="color-black">${card.topicName}</h3>
                <img
                    class="${card.favorite==true?``:`favorite-unmarked`}"
                    src="images/icons/favourite.svg"
                    alt="favorite icon not found"
                />
                </div>
                <p class="course-subject">
                ${card.courseSubject} Grade <span class="pipeline"></span> 
                ${card.totalGrade.grade}
                <span class="add-grade">+${card.totalGrade.addedGrade}</span>
                </p>
                <div class="course-detail">
                <p>
                    ${card.courseDetail.units==0?``:`<span class="color-black">${card.courseDetail.units}</span> Unitts &nbsp;`}
                    ${card.courseDetail.lessons==0?``:`<span class="color-black">${card.courseDetail.lessons}</span> Lessons &nbsp;`}
                    ${card.courseDetail.topics==0?``:`<span class="color-black">${card.courseDetail.topics}</span> Topics`}
                </p>
                <select class="dropdown-classes" ${card.classees[0]=="no"?`disabled`:` `}>
                    ${card.classees[0]=="no"?
                    `<option>No Classes</option>`:
                    `${card.classees.map(option=>
                        `<option value="No Classes">${option}</option>`)}`
                    }   
                </select>
                <p>
                    ${card.students==0?``:`<span>${card.students}</span> Students`}
                    ${card.courseDuration.startDate=="no"?``:`<span class="pipeline"></span> ${card.courseDuration.startDate}`}
                    ${card.courseDuration.endDate=="no"?``:`- ${card.courseDuration.endDate}`}
                </p>
                </div>
            </div>
            </div>
            <div class="course-track-icons">
            <img 
            class="${card.courseAccess.priview?"":"opacity-0-4"}" src="images/icons/preview.svg" alt="preview image not found" />
            <img
                class="${card.courseAccess.manageCourse?"":"opacity-0-4"}"
                src="images/icons/manage course.svg"
                alt="manage course icon not found"
            />
            <img
            class="${card.courseAccess.gradeSubmission?"":"opacity-0-4"}"
                src="images/icons/grade submissions.svg"
                alt="grade icon not found"
            />
            <img
                class="${card.courseAccess.reports?"":"opacity-0-4"}"
                src="images/icons/reports.svg"
                alt="report icon not found"
            />
            </div>
        </div>
        `;
        total+=1
        curCourse.innerHTML+=mark;
    }
    coursesTotal.innerHTML=total+''
})

console.log(windowSize)