<h1 align="center">🖥️React-TS-Employee-Management)</h1>

## ℹ️Information
- Hey, this project was developed during my internship for a company. Essentially, it aims to represent an employee list that can only be accessed via MSAL authentication. This panel features various functions such as employee locking, invisibility toggling, grouping assignment, and the ability to specify vacation times.
- To this day, the company actively utilizes this system, providing a centralized and user-friendly solution to enhance teamwork and efficiently manage tasks.
- Thanks to everyone on the team who assisted me. The project is still being used by the company and is intended to be online on GitHub for learning purposes, accessible only to me.

## ⭐Features
- Sidebar
- Logout Feature
- Navigation
- Employee list
- Search bar
- Select individual employees
- Employee management
- Role management
- Change Visible
- Change Blocking
- Change ActiveEmployee?

## 🖼️Pictures
<details>
<summary>How it looks today and further developed</summary>
    
![FotoJet (1)](https://github.com/Zerofour04/React-TS-Employee-Management/assets/60815764/14cbf59a-de44-432c-8597-31a28239afd3)
    
</details>

<details>
<summary>v2.0</summary>
    
![v2 0](https://user-images.githubusercontent.com/60815764/163386840-d28988b6-b940-40d5-b895-39da54b34e18.png)
    
![v2 0-S](https://user-images.githubusercontent.com/60815764/163386871-3444711f-5713-4adc-9d2a-8dc502b8056d.png)
    
![v2 0-3](https://user-images.githubusercontent.com/60815764/163386897-286917b3-665a-4c66-bb7f-eb43402571b4.png)
    
![v2 0-2](https://user-images.githubusercontent.com/60815764/163386905-e670e35d-1cd4-4093-96e5-01040a692237.png)
    
</details>


<details>
<summary>v1.0</summary>
    
![React Bild](https://user-images.githubusercontent.com/60815764/162760988-09275d07-3ede-42f1-bbc1-9250250d490d.png)
    
</details>

## 📗Installation
1. `cd my-app`
2. `npm install`
3. `npm start`

## 🧱Requirements & ⚙️Configuration
- NPM
- Node.js
- Microsoft Account 
- MSAL
- Redux

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

### ⚠️Your database must contain exactly these values, otherwise, you will have to edit something!
```
export interface Employee {
    email: string;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    groups: string[] | null;
    acronym: string;
    location: {
        countryIsocode: string;
        regionIsocode: string
    };
    displayName: string;
    active: boolean;
    locked: boolean;
    visible: boolean;
}
```

## 🔧Changlogs

<details>
<summary>v2.0</summary>
- Integrated Employee-Locked, Employee-Visible, Employee-Locked and Employee-Active functions
- BugFixes
- Codecleanup
- Design changed      
</details>

<details>
<summary>v1.8</summary>
- Roles can be removed/added    
</details>

<details>
<summary>v1.6</summary>
- Integrated select Employee and Sidebar 
</details>

<details>
<summary>v1.2</summary>
- Pre-release
</details>

<details>
<summary>v1.0</summary>
- Added Sidebar
- Added Navigation
- Reworked LogOut
- Fixed some bugs
</details>

<details>
<summary>v0.8</summary>
- Updated Header
- Added Dropdown menu
- Changed design
</details>

<details>
<summary>v0.5</summary>
- Reworked the repo
</details>

<details>
<summary>v0.4</summary>
- Fixed LogOut
</details>

<details>
<summary>v0.3</summary>
- Created header
</details>

<details>
<summary>v0.3</summary>
- Integrated MSAL
</details>
