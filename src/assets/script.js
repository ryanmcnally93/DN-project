if(!location.hash){
    location.hash = "#main";
};

// Open Database and event listeners
let db;
const openRequest = window.indexedDB.open("jobs_array", 1);
openRequest.addEventListener("error", () => 
    console.error("Database failed to open"),
);
openRequest.addEventListener("success", () => {
    console.log("Database opened successfully");
    db = openRequest.result;
});
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log('upgradeneeded is being called!');
    db = e.target.result;
    const objectStore = db.createObjectStore("jobs_array", {
        keyPath: "id",
        autoIncrement: true,
    });
    objectStore.createIndex("role_category", "role_category", { unique: false });
    objectStore.createIndex("role", "role", { unique: false });
    objectStore.createIndex("location", "location", { unique: false });
    objectStore.createIndex("industry", "industry", { unique: false });
    objectStore.createIndex("functional_area", "functional_area", { unique: false });
    objectStore.createIndex("job_title", "job_title", { unique: false });
    objectStore.createIndex("job_experience_required", "job_experience_required", { unique: false });
    objectStore.createIndex("job_salary", "job_salary", { unique: false });
    
    console.log("Database setup complete");
});

const Section = document.getElementById("section");
UpdateSection();

window.addEventListener("hashchange", () =>{
    UpdateSection();
})

function UpdateSection(){
    var sectionName = location.hash.substring(1);
    UpdateSectionContent(sectionName);
}

function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}

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

window.onload = function AccessJobs() {
    fetch('../roles.json')
    .then(function(response){
        return response.json();
    })
    .then(function(jobs){
        let target = document.getElementById('target');
        let out = "";
        let i = 0;
        for(let job of jobs.jobsdataset) {
            out += `
                <tr>
                    <td class="width">${job.Role_Category}</td>
                    <td>${job.Role}</td>
                    <td>${job.Location}</td>
                    <td>${job.Industry}</td>
                    <td>${job.Functional_Area}</td>
                    <td>${job.Job_Title}</td>
                    <td>${job.Job_Experience_Required}</td>
                    <td>${job.Job_Salary}</td>
                    <td>LINK</td>
                </tr>
            `;
            i++;
            if (i === 10) { break; }
        }

        target.innerHTML = out;
    })
}

function AddJobs() {
    fetch('../roles.json')
    .then(function(response){
        return response.json();
    })
    .then(function(jobs){
        let j = 0;
        let newItem = '';
        const transaction = db.transaction(["jobs_array"], "readwrite");
        const objectStore = transaction.objectStore("jobs_array");
        let addRequest = '';
        for(let job of jobs.jobsdataset) {
            newItem = { 
                role_category: job.Role_Category,
                role: job.Role,
                location: job.Location,
                industry: job.Industry,
                functional_area: job.Functional_Area,
                job_title: job.Job_Title,
                job_experience_required: job.Job_Experience_Required,
                job_salary: job.Job_Salary
            };
            if (newItem.role_category === undefined) {
                newItem.role_category = "Not given";
            }
            if (newItem.role === undefined) {
                newItem.role = "Not given";
            }
            if (newItem.location === undefined) {
                newItem.location = "Not given";
            }
            if (newItem.industry === undefined) {
                newItem.industry = "Not given";
            }
            if (newItem.functional_area === undefined) {
                newItem.functional_area = "Not given";
            }
            if (newItem.job_title === undefined) {
                newItem.job_title = "Not given";
            }
            if (newItem.job_experience_required === undefined) {
                newItem.job_experience_required = "Not given";
            }
            if (newItem.job_salary === undefined) {
                newItem.job_salary = "Not given";
            }
            addRequest = objectStore.add(newItem);

            j++;
            if (j === 50) { break; };
        }
        console.log('Successfully saved ' + j + ' jobs to IndexedDB')
        DisplayData()
    })
}

function DisplayData() {
    const request = db.transaction('jobs_array')
                    .objectStore('jobs_array')
                    .getAll();
    request.onsuccess = ()=> {
        const jobs = request.result;
        console.table(jobs)
    }
}

function MainContent(){
    return `
    <div class="section-nav">
        <a href="#employer-profile" class="nav-link green-btn">Employer Profile</a>
        <a href="#applicant-profile" class="nav-link green-btn">Applicant Profile</a>
    </div>
    <table cellspacing=0>
        <thead">
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
        <tbody id="target">
            
        </tbody>
    </table>
    ` +  AddJobs();
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
        <tbody id="target"">
            
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
