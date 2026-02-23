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