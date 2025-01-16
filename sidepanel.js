const logInBtn = document.querySelector('#logIn');
const signUpBtn = document.querySelector('#signUp');

logInBtn.addEventListener("click", async () => {
    chrome.storage.local.get(['workdayCred'], (data) => {
        if (data.workdayCred) {
            const { email, password } = data.workdayCred;
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'logIn', credentials: { email, password } });
            });
        } else {
            alert('Credentials not found. Please save them first.');
        }
    });
});

signUpBtn.addEventListener("click", async () => {
    chrome.storage.local.get(['workdayCred'], (data) => {
        if (data.workdayCred) {
            const { email, password } = data.workdayCred;
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'signUp', credentials: { email, password } });
            });
        } else {
            alert('Credentials not found. Please save them first.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['workdayCred'], function (data) {
        if (data.workdayCred) {
            const { email, password } = data.workdayCred;
            document.getElementById('email').value = email;
            document.getElementById('password').value = password;
        }
    });
    
    document.getElementById('saveCred').addEventListener('click', function () {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email && password) {
            chrome.storage.local.set({ workdayCred: { email, password } }, function () {
                document.getElementById('saveCred').value = 'SAVED';
            });
        }
    });
});