let jobs = [
    { id: 1, companyName: "Tesla", position: "AI Engineer", location: "Austin", type: "Full-time", salary: "$150k", description: "Self-driving car computer vision.", status: "all" },
    { id: 2, companyName: "Meta", position: "Product Designer", location: "Menlo Park", type: "Full-time", salary: "$115k", description: "Design UI for the Metaverse.", status: "all" },
    { id: 3, companyName: "Amazon", position: "AWS Architect", location: "Seattle", type: "Full-time", salary: "$130k", description: "Cloud infrastructure scaling.", status: "all" },
    { id: 4, companyName: "Google", position: "Software Engineer", location: "Remote", type: "Full-time", salary: "$120k", description: "Working on core search algorithms.", status: "all" },
    { id: 5, companyName: "Apple", position: "iOS Developer", location: "Cupertino", type: "Full-time", salary: "$145k", description: "Building next-gen iOS apps.", status: "all" },
    { id: 6, companyName: "Netflix", position: "Backend Dev", location: "Los Gatos", type: "Contract", salary: "$140k", description: "Optimizing streaming latency.", status: "all" },
    { id: 7, companyName: "Spotify", position: "Frontend Developer", location: "Remote", type: "Part-time", salary: "$90k", description: "Enhancing user music experience.", status: "all" },
    { id: 8, companyName: "Slack", position: "QA Engineer", location: "Remote", type: "Full-time", salary: "$100k", description: "Ensuring communication stability.", status: "all" }
];

let activeTab = 'all';

function render() {
    const container = document.getElementById('job-container');
    const emptyState = document.getElementById('empty-state');
    const badge = document.getElementById('job-count-badge');

    const filtered = activeTab === 'all' ? jobs : jobs.filter(j => j.status === activeTab);

    document.getElementById('dash-total').innerText = jobs.length;
    document.getElementById('dash-interview').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('dash-rejected').innerText = jobs.filter(j => j.status === 'rejected').length;

    if (activeTab === 'all') {
        badge.innerText = `${jobs.length} jobs`;
    } else {
        badge.innerText = `${filtered.length} of ${jobs.length} jobs`;
    }

    if (filtered.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        container.classList.remove('hidden');
        emptyState.classList.add('hidden');

        container.innerHTML = filtered.map(job => `
            <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative group hover:shadow-lg transition-all duration-300">

                <button onclick="deleteJob(${job.id})" class="absolute top-5 right-5 text-slate-300 border border-gray-400 rounded-full p-1.5 hover:text-red-500 transition-colors">
                <i class="fa-solid fa-trash-can"></i>
                </button>

                <div class=" grow">
                    <p class="text-xl font-bold text-[#002C5C] uppercase tracking-widest">${job.companyName}</p>
                    <h3 class="text-[14px] font-bold text-gray-500 mt-1">${job.position}</h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <span> •  ${job.location}</span>  <span>  •  ${job.type}</span>
                    </div>
                    <p class="text-sm font-bold text-gray-700 mt-3">Salary: ${job.salary}</p>

                    <div class="mt-4 mb-4">
                    ${job.status !== 'all' ? `
                    <span class=" px-2 py-1 rounded text-[12px] font-bold uppercase ${job.status === 'interview' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                        ${job.status}
                    </span>
                ` : ''}
                     </div>

                    <p class="text-xs text-gray-500 mt-2 line-clamp-2">${job.description}</p>
                </div>

                <div class="flex gap-2 mt-6 max-w-xs">
                    <button onclick="updateStatus(${job.id}, 'interview')" class="flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${job.status === 'interview' ? ' bg-[#10B981] border-[#10B981]  text-white' : 'border-[#10B981] border-2 text-[#10B981] hover:bg-green-200 focus:outline-2 '}">
                        INTERVIEW
                    </button>
                    <button onclick="updateStatus(${job.id}, 'rejected')" class="flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${job.status === 'rejected' ? 'bg-[#EF4444] border-[#EF4444] text-white' : 'border-[#EF4444] border-2 text-[#EF4444] hover:bg-red-200 focus:outline-2 '}">
                        REJECTED
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function updateStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    if (activeTab === 'all') {
        job.status = (job.status === newStatus) ? 'all' : newStatus;
    } else {
        job.status = newStatus;
    }

    render();
}

function deleteJob(id) {
    if (confirm('Will You Delete This Card???')) {
        jobs = jobs.filter(job => job.id !== id);

        render();
    }
}
// all, interview , Rejected button  Related function
function switchTab(tab) {
    activeTab = tab;

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn px-8 py-3 bg-white border border-gray-200 rounded-lg text-gray-500 font-medium transition-all";
    });

    const activeBtn = document.getElementById(`tab-${tab}`);
    activeBtn.className = "tab-btn px-8 py-3 bg-[#4285F4] text-white rounded-lg font-medium shadow-md transition-all";

    render();
}
render();