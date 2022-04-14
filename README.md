# 🖥️React TS-Panel (Microsoft Authentication Library/MSAL) V2.0

## ℹ️Information
Hey this is an employee management list where you can manage employees by blocking them, being visible, and if they are employees.

## 🖼️Pictures
![React Bild](https://user-images.githubusercontent.com/60815764/162760988-09275d07-3ede-42f1-bbc1-9250250d490d.png)

## 📗Installation
1. `cd my-app`
2. `npm install`
3. `npm start`

## ⚙️Configuration
`/src/config/msalConfig.ts`
```
export const msalConfiguration: Configuration = {
    auth: {
        clientId: '',
        authority: ''
    }
};
```

`/public/env-config.js`
```
window._env_ = {
    MISSIONASSIGNMENTS_SERVICE_EXTERNAL_URL: '',
    EMPLOYEE_SERVICE_EXTERNAL_URL: ''    
};
```

## 🧱Requirements
- NPM
- Node.js
- Microsoft Account 
- MSAL

## ⭐Features
- Sidebar
- LogOut Feature
- Navigation
- Employee list
- Searchbar
- Select individual employees
- Employee management
- Role management
- Change Visible
- Change Blocking
- Change ActiveEmployee?

## 🔧Changlogs
### v2.0
- Integrated Employee-Locked, Employee-Visible, Employee-Locked and Employee-Active functions
- BugFixes
- Codecleanup
- Design changed

### v1.8
- Roles can be removed/added

### v1.6
- Integrated select Employee and Sidebar

### v1.2
- Pre-release

### v1.0
- Added Sidebar
- Added Navigation
- Reworked LogOut
- Fixed some bugs

### v0.8
- Updated Header
- Added Dropdown menu
- Changed design

### v0.5
- Reworked the repo

### v0.4
- Fixed LogOut

### v0.3
- Created header

### v0.2
- Integrated MSAL


