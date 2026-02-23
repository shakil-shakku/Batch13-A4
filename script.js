const jobs =[
    {
        id:1, 
        company:"DataSoft Systems Bangladesh Limited", 
        position:"Software Development", 
        location:"Shymoli,Dhaka,Bangladesh", 
        type:"Full-Time",
        salary:"25,000 – 120,000 BDT per month",
        description:"One of the leading local software companies in Bangladesh.",
        status:"All"
    },
    {
        id:2, 
        company:" TigerIT Bangladesh Limited", 
        position:" IT & Biometric Solutions", 
        location:"Banani,Dhaka,Bangladesh", 
        type:"Full-Time",
        salary:"30,000 – 100,000 BDT per month",
        description:"Known for biometric and identity management systems.",
        status:"All"
    },
    {
        id:3, 
        company:"Brain Station 23", 
        position:"Software & Mobile App Development", 
        location:"Mohakhali,Dhaka,Bangladesh", 
        type:"contract",
        salary:"25,000 – 150,000 BDT per month",
        description:"A fast-growing company providing web, mobile, and enterprise software solutions to international clients.",
        status:"All"
    },
    {
        id:4, 
        company:"BJIT Limited", 
        position:"IT Outsourcing", 
        location:"Baridhara,Dhaka,Bangladesh", 
        type:"Full-Time",
        salary:"$120,000/year",
        description:"Works mainly with Japanese and global clients. Provides offshore software development and QA services.",
        status:"All"
    },
    {
        id:5, 
        company:"REVE Systems", 
        position:"Telecom Software", 
        location:"Gulshan,Dhaka,Bangladesh", 
        type:"Remote",
        salary:"25,000 – 110,000 BDT per month",
        description:"Develops telecom software such as VoIP, messaging platforms, and billing systems used worldwide.",
        status:"All"
    },
    {
        id:6, 
        company:"Enosis Solutions", 
        position:"Software Development", 
        location:"khilkhet,Dhaka,Bangladesh", 
        type:"Full-Time",
        salary:"30,000 – 140,000 BDT per month",
        description:"Provides high-quality software development services for North American and international clients.",
        status:"All"
    },
    {
        id:7, 
        company:"Selise Digital Platforms", 
        position:"Enterprise & Cloud Software", 
        location:"Dhanmondi,Dhaka,Bangladesh", 
        type:"contract",
        salary:"40,000 – 180,000 BDT per month",
        description:"DFocuses on digital transformation and enterprise solutions using modern cloud technologies.",
        status:"All"
    },
    {
        id:8, 
        company:"Kaz Software Limited", 
        position:"Web & Enterprise Application Development", 
        location:"Shantinagar,Dhaka,Bangladesh", 
        type:"Remote",
        salary:"30,000 – 120,000 BDT per month",
        description:" Builds custom web applications and enterprise systems mainly for USA-based clients.",
        status:"All"
    },
]

let activeTab = "All";


function updateCounts() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(s => s.status === "Interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(s => s.status === "Rejected").length;
}

function renderJobs() {
  const container = document.getElementById("jobContainer");
  container.innerHTML = "";
  
  let filtered = activeTab === "All" ? jobs : jobs.filter(s => s.status === activeTab);

  document.getElementById("sectionCount").innerText = filtered.length + " Jobs";

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div>
        <h3>${job.position}</h3>
        <div class="information">${job.company}  ${job.location}</div>
        <div class="information">${job.type}</div>
        <div class="salary">${job.salary}</div>
        <div class="description">${job.description}</div>
      </div>
      <div class="buttons">
        <button class="interview-btn">Interview</button>
        <button class="reject-btn">Rejected</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

     const interviewBtn = card.querySelector(".interview-btn");
    const rejectBtn = card.querySelector(".reject-btn");
    const deleteBtn = card.querySelector(".delete-btn");

    interviewBtn.onclick = () => {
      job.status = job.status === "Interview" ? "All" : "Interview";
      updateCounts();
      renderJobs();
    };

    rejectBtn.onclick = () => {
      job.status = job.status === "Rejected" ? "All" : "Rejected";
      updateCounts();
      renderJobs();
    };
 deleteBtn.onclick = () => {
      const index = jobs.findIndex(s => s.id === job.id);
      jobs.splice(index,1);
      updateCounts();
      renderJobs();
    };

    container.appendChild(card);
  });

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty">
        <img src="/jobs.png"/>
        <h3>No jobs Available</h3>
        <p>You have not added any jobs in this section yet.</p>
      </div>`;
    return;
  }
   updateCounts();
}
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(s => s.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    renderJobs();
  });
});

renderJobs();