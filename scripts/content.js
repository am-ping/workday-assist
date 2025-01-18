chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
  if (request.action === 'logIn' && request.credentials) {
    await logIn(request.credentials); 
  } else if (request.action === 'signUp' && request.credentials) {
    await signUp(request.credentials); 
  }
})

async function logIn(credentials) {
  const { email, password } = credentials;
  document.querySelector(`[data-automation-id="email"]`).focus();
  document.querySelector(`[data-automation-id="email"]`).value = "";
  document.execCommand('insertText', false, email);

  document.querySelector(`[data-automation-id="password"]`).focus();
  document.querySelector(`[data-automation-id="password"]`).value = "";
  document.execCommand('insertText', false, password);
  
  document.querySelector(`[data-automation-id="click_filter"]`).click();
  document.querySelector(`[data-automation-id="signInSubmitButton"]`).click();
}

async function signUp(credentials) {
  const { email, password } = credentials;
  const createAccountCheckbox = document.querySelector('[data-automation-id="createAccountCheckbox"]');
  if (createAccountCheckbox) {
    createAccountCheckbox.click();
  }
  document.querySelector(`[data-automation-id="email"]`).focus();
  document.querySelector(`[data-automation-id="email"]`).value = "";
  document.execCommand('insertText', false, email);

  document.querySelector(`[data-automation-id="password"]`).focus();
  document.querySelector(`[data-automation-id="password"]`).value = "";
  document.execCommand('insertText', false, password);

  document.querySelector(`[data-automation-id="verifyPassword"]`).focus();
  document.querySelector(`[data-automation-id="verifyPassword"]`).value = "";
  document.execCommand('insertText', false, password);
  
  document.querySelector(`[data-automation-id="click_filter"]`).click();
  document.querySelector(`[data-automation-id="createAccountSubmitButton"]`).click();
}
