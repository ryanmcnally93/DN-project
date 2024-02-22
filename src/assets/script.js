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
        return EmployerMain();
    else if(sectionName == "employer-profile")
        return EmployerProfile();
    else if(sectionName == "applicant-profile")
        return ApplicantProfile();
    else if(sectionName == "applicant-job-view")
        return ApplicantJobView();
    else if(sectionName == "employer-job-view")
        return EmployerJobView();
    else
        return SectionNotFoundContent();
}

function fetchJSONData() {
    fetch("../roles.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data.jobsdataset))
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
fetchJSONData();

//Section Template Functions - Returning html for that section.
function MainContent(){
    return `
    <div class="section-nav">
        <a href="#employer-profile" class="nav-link green-btn">Employer Profile</a>
        <a href="#applicant-profile" class="nav-link green-btn">Applicant Profile</a>
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
                <td><a href="#applicant-job-view" id="details-link" class="nav-link green-btn">Details</a></td>
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

function EmployerMain(){
    return `
    <div class="left-nav">
        <a href="#main" class="nav-link green-btn">Home</a>
    </div>
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
                <td><a href="#employer-job-view" id="details-link" class="nav-link green-btn">Manage</a></td>
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
                <td><a href="#employer-job-view" id="details-link" class="nav-link green-btn">Add New</a></td>
            </tr>
        </tbody>
    </table>
    `;
}

function EmployerProfile(){
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

function ApplicantProfile(){
    return `
    <div class="left-nav">
        <div>
            <p>Welcome: NAME</p>
        </div>
        <a href="#main" class="nav-link green-btn">Back</a>
    </div>
    <table cellspacing=0 id="employer-profile-table">
        <thead>
            <tr>
                <th>Applicant Name:</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
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
                <td>Image / File Load Paste</td>
            </tr>
            <tr>
                <td>CV</td>
                <td>Image / File Load Paste</td>
            </tr>
        </tbody>
    </table>
    `;
}

function ApplicantJobView(){
    return `
    <a href="#applicant-profile" class="nav-link green-btn" id="applicant-profile-link">Applicant Profile</a>
    <div class="left-nav">
        <div>
            <a href="#" class="nav-link green-btn">Apply</a>
        </div>
        <a href="#main" class="nav-link green-btn">Back</a>
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
                <td>Role Category</td>
                <td>Drop Down</td>
            </tr>
            <tr>
                <td>Role</td>
                <td></td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Combi Box</td>
            </tr>
            <tr>
                <td>Industry</td>
                <td></td>
            </tr>
            <tr>
                <td>Function</td>
                <td></td>
            </tr>
            <tr>
                <td>Title</td>
                <td>Image / File Load Paste</td>
            </tr>
            <tr>
                <td>Experience</td>
                <td></td>
            </tr>
            <tr>
                <td>Salary</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;
}

function EmployerJobView(){
    return `
    <div class="left-nav">
        <div>
            <p>Welcome: NAME</p>
        </div>
        <a href="#" class="nav-link green-btn">Save</a>
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
                <td>Role Category</td>
                <td>Drop Down</td>
            </tr>
            <tr>
                <td>Role</td>
                <td></td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Combi Box</td>
            </tr>
            <tr>
                <td>Industry</td>
                <td></td>
            </tr>
            <tr>
                <td>Function</td>
                <td></td>
            </tr>
            <tr>
                <td>Title</td>
                <td>Image / File Load Paste</td>
            </tr>
            <tr>
                <td>Experience</td>
                <td></td>
            </tr>
            <tr>
                <td>Salary</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;
}

function SectionNotFoundContent(){
    return `
    <p class="section-title">Section was not found. Please Select a Section</p>
    <div class="section-nav">
        <a href="#employer-profile" class="nav-link green-btn">Employer Profile</a>
        <a href="#applicant-profile" class="nav-link green-btn">Applicant Profile</a>
    </div> `;
}
