//Set the hash to default
if(!location.hash){
    location.hash = "#main";
};

//Reference Section Element
const Section = document.getElementById("section");

//Update Section on Load
UpdateSection();

//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})

function UpdateSection(){
    var sectionName = location.hash.substring(1);
    console.log(sectionName);
    UpdateSectionContent(sectionName);
}

//Updates the innerHTML of the section element.
function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}

//Get Section Content based on the SectionName
function GetSectionContent(sectionName){
    if(sectionName == "main")
        return MainContent();
    else if(sectionName == "employer-main")
        return EmployerMainContent();
    else if(sectionName == "employer-profile")
        return EmployerProfileContent();
    else if(sectionName == "section2")
        return Section2Content();
    else if(sectionName == "section3")
        return Section3Content();
    else
        return SectionNotFoundContent();
}

//Section Template Functions - Returning html for that section.
function MainContent(){
    return `
    <div class="section-nav">
        <a href="#employer-profile" class="nav-link green-btn">Employer Profile</a>
        <a href="#section2" class="nav-link green-btn">Applicant Profile</a>
    </div>
    <table cellspacing=0>
        <thead>
            <tr>
                <th>Role Category</th>
                <th>Role</th>
                <th>Location</th>
                <th>Industry</th>
                <th>Function</th>
                <th>Job Title</th>
                <th>Experience</th>
                <th>Salary</th>
                <th>Details/Apply</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="#section3" id="details-link" class="nav-link green-btn">Details</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;
}

function EmployerMainContent(){
    return `
    <div class="title"><p>Welcome EMPLOYER</p></div>
    <div class="section-nav">
        <a href="#" class="nav-link green-btn">Login</a>
        <a href="#employer-profile" class="nav-link green-btn">Profile</a>
    </div>
    <table cellspacing=0>
        <thead>
            <tr>
                <th>Role Category</th>
                <th>Role</th>
                <th>Location</th>
                <th>Industry</th>
                <th>Function</th>
                <th>Job Title</th>
                <th>Experience</th>
                <th>Salary</th>
                <th>Details/Apply</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="#section3" id="details-link" class="nav-link green-btn">Manage</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="#section3" id="details-link" class="nav-link green-btn">Add New</a></td>
            </tr>
        </tbody>
    </table>
    `;
}

function EmployerProfileContent(){
    return `
    <div class="left-nav">
        <div>
            <p>Welcome: NAME</p>
        </div>
        <a href="#employer-main" class="nav-link green-btn">Back</a>
    </div>
    <table cellspacing=0 id="employer-profile-table">
        <thead>
            <tr>
                <th>Company Name</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Company Website</td>
                <td></td>
            </tr>
            <tr>
                <td>Company Logo</td>
                <td></td>
            </tr>
            <tr>
                <td>Employer Name</td>
                <td></td>
            </tr>
            <tr>
                <td>Phone Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Email</td>
                <td></td>
            </tr>
            <tr>
                <td>Profile Picture</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;
}

function Section2Content(){
    return `
    <p class="section-title">Section 2</p>
    <div class="section-nav">
    <a href="#employer-profile" class="nav-link green-btn">Section 1</a>
    <a href="#section2" class="nav-link green-btn btn-disabled">Section 2</a>
    <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div>
    `;
}

function Section3Content(){
    return `
    <p class="section-title">Section 3</p>
    <div class="section-nav">
    <a href="#employer-profile" class="nav-link green-btn">Section 1</a>
    <a href="#section2" class="nav-link green-btn">Section 2</a>
    <a href="#section3" class="nav-link green-btn btn-disabled">Section 3</a>
    </div>
    `;
}

function SectionNotFoundContent(){
    return `
    <p class="section-title">Section was not found. Please Select a Section</p>
    <div class="section-nav">
        <a href="#employer-profile" class="nav-link green-btn">Section 1</a>
        <a href="#section2" class="nav-link green-btn">Section 2</a>
        <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div> `;
}
