# Privacy Policy

## Introduction
Workday Sign-In Helper is a simple browser extension designed to help users streamline the login and sign-up process on Workday-powered job portals. This Privacy Policy explains how the Extension handles user data.

## Data Collection and Usage
Workday Sign-In Helper does **not** collect, transmit, or store any personal data on external servers. The only data stored is the user's email and password, which are saved **locally** using Chrome's `chrome.storage.local` API. This means:

- The data remains **on your device** and is never sent to any third party.
- Only you have access to your stored credentials.
- You can delete your credentials at any time using the **Delete** button within the extension.

⚠ **Important:** We strongly recommend using a unique password that you have never used before for any other account. Do not store passwords associated with your email or sensitive accounts in this extension.

## Permissions Justification
The Extension requests the following permissions:

- **`storage`**: This is used to store the user's email and password **locally** within the browser.
- **`activeTab`**: This allows the Extension to detect when a user is on a Workday login or sign-up page and automate form-filling accordingly.
- **Host permissions (`<all_urls>`)**: This is required to support various Workday-powered job portals, as they use different domain structures (e.g., `myworkdayjobs.com`, `myworkdaysite.com`).

## Third-Party Services
This Extension does not use or interact with any third-party services, external databases, or analytics tools.

## Security
Your credentials are stored securely within Chrome’s local storage, which means they are **never transmitted over the internet**. However, users are encouraged to follow general security best practices, such as using strong passwords and enabling two-factor authentication where possible.

## Changes to This Policy
This Privacy Policy may be updated from time to time. Any updates will be reflected in the latest version of the Extension.

## Contact
If you have any questions, you can contact me at [am-ping@outlook.com](mailto:am-ping@outlook.com)

---

**Effective Date:** February 8, 2025