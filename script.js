console.log("check if it will be added");


let activeTab = 'all';

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