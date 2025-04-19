document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const folderModal = document.getElementById('folder-modal');
    const folderContent = document.getElementById('folder-content');
    const closeModal = document.querySelector('.close-modal');
    const folders = document.querySelectorAll('.folder');
    
    // Folder data structure with subfolders
    const folderData = {
        cohort1: {
            name: "Cohort #1",
            color: "blue",
            subfolders: [
                { name: "Participants", icon: "fa-solid fa-users", href: "placeholder.html" },
                { name: "Staff", icon: "fa-solid fa-user-tie", href: "placeholder.html" },
                { name: "Classroom", icon: "fa-solid fa-chalkboard-teacher", href: "placeholder.html" }
            ]
        },
        cohort2: {
            name: "Cohort #2",
            color: "blue",
            subfolders: [
                { name: "Participants", icon: "fa-solid fa-users", href: "https://drive.google.com/drive/folders/1jgr9DIE7oCjiLpnFBEIs_2jWZcHWf82R?usp=sharing" },
                { name: "Staff", icon: "fa-solid fa-user-tie", href: "https://drive.google.com/drive/folders/1jgr9DIE7oCjiLpnFBEIs_2jWZcHWf82R?usp=sharing" },
                { name: "Classroom", icon: "fa-solid fa-chalkboard-teacher", href: "placeholder.html" }
            ]
        },
        cohort3: {
            name: "Cohort #3",
            color: "blue",
            subfolders: [
                { name: "Participants", icon: "fa-solid fa-users", href: "https://drive.google.com/drive/folders/1jgr9DIE7oCjiLpnFBEIs_2jWZcHWf82R?usp=sharing" },
                { name: "Staff", icon: "fa-solid fa-user-tie", href: "https://drive.google.com/drive/folders/1jgr9DIE7oCjiLpnFBEIs_2jWZcHWf82R?usp=sharing" },
                { name: "Classroom", icon: "fa-solid fa-chalkboard-teacher", href: "placeholder.html" }
            ]
        },
        cohort4: {
            name: "Cohort #4",
            color: "blue",
            subfolders: [
                { name: "Participants", icon: "fa-solid fa-users", href: "https://drive.google.com/drive/folders/12Mj0rv-RijDhpOH_7oIguzYlVxpGkGq_?usp=sharing" },
                { name: "Staff", icon: "fa-solid fa-user-tie", href: "https://drive.google.com/drive/folders/1jgr9DIE7oCjiLpnFBEIs_2jWZcHWf82R?usp=sharing" },
                { name: "Classroom", icon: "fa-solid fa-chalkboard-teacher", href: "placeholder.html" }
            ]
        },
        staff: {
            name: "Staff",
            color: "blue",
            layout: "two-columns",
            subfolders: [
                { name: "Alumni Relation + Tracking", icon: "fa-solid fa-users-viewfinder", href: "https://drive.google.com/drive/folders/1maO6zRlMfR4FjqHPzo0HZQD6RoC9F7CQ?usp=sharing" },
                { name: "Finance - Receipts", icon: "fa-solid fa-money-bill-wave", href: "https://drive.google.com/drive/folders/1maO6zRlMfR4FjqHPzo0HZQD6RoC9F7CQ?usp=sharing" },
                { name: "Marketing & Outreach Materials", icon: "fa-solid fa-bullhorn", href: "https://drive.google.com/drive/folders/1maO6zRlMfR4FjqHPzo0HZQD6RoC9F7CQ?usp=sharing" },
                { name: "Mentorship + Advisory Protocols", icon: "fa-solid fa-handshake", href: "https://drive.google.com/drive/folders/1lpC0iYEIhKFwkkotO9AKCnTo8p67-LgN?usp=sharing" },
                { name: "Recruiting & Application Protocols", icon: "fa-solid fa-clipboard-check", href: "https://drive.google.com/drive/folders/1agyv_G70_NhKzs1ixQz9jryoUxuecMod?usp=sharing" },
                { name: "VB Master Curriculum", icon: "fa-solid fa-book", href: "https://drive.google.com/drive/folders/1agyv_G70_NhKzs1ixQz9jryoUxuecMod?usp=sharing" },
                { name: "Weekly Meeting Notes", icon: "fa-solid fa-clipboard-list", href: "https://drive.google.com/drive/folders/1agyv_G70_NhKzs1ixQz9jryoUxuecMod?usp=sharing" }
            ]
        }
    };
    
    // Event Listeners
    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const folderId = folder.getAttribute('data-folder');
            openFolder(folderId);
        });
    });
    
    closeModal.addEventListener('click', () => {
        folderModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === folderModal) {
            folderModal.style.display = 'none';
        }
    });
    
    // Functions
    function openFolder(folderId) {
        const folder = folderData[folderId];
        
        if (!folder) {
            console.error('Folder not found');
            return;
        }
        
        // Create modal header
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        modalHeader.innerHTML = `
            <div class="modal-icon">
                <i class="fa-solid fa-folder-open" style="color: var(--folder-${folder.color})"></i>
            </div>
            <h2 class="modal-title">${folder.name}</h2>
        `;
        
        // Create subfolder elements
        const subfolders = document.createElement('div');
        subfolders.className = 'subfolder-container';
        
        // Apply special layout for staff folder
        if (folder.layout === "two-columns") {
            subfolders.classList.add('two-column-layout');
        }
        
        folder.subfolders.forEach(sub => {
            const subElement = document.createElement('a');
            subElement.href = sub.href;
            subElement.className = 'subfolder';
            subElement.target = "_blank"; // Open links in new tab
            
            // Create Mac-style subfolder visuals
            subElement.innerHTML = `
                <div class="mac-subfolder">
                    <div class="subfolder-tab ${folder.color}-folder"></div>
                    <div class="subfolder-body ${folder.color}-folder"></div>
                    <div class="subfolder-content">
                        <i class="${sub.icon}"></i>
                    </div>
                </div>
                <p class="subfolder-name">${sub.name}</p>
            `;
            
            subfolders.appendChild(subElement);
        });
        
        // Clear and populate folder content
        folderContent.innerHTML = '';
        folderContent.appendChild(modalHeader);
        folderContent.appendChild(subfolders);
        
        // Display modal
        folderModal.style.display = 'block';
    }
}); 