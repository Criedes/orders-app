# Orders Search React App

A **React + Vite + TypeScript + Tailwind** web application for searching and viewing orders.  
Supports filtering by **date range** and **status** (`Waiting`, `Completed`, `Rejected`),  
with responsive design and expandable order details.

---

## Features

- **Search Filters**
  - Date range (`From` / `To`)
  - Status dropdown (`Waiting`, `Completed`, `Rejected`)
  - Period is fixed to `Transmission` (MVP)

- **Orders Table**
  - Responsive: shows only `Account`, `Operation`, `Symbol`, `Status` on small screens
  - Expand/collapse rows for detailed info
  - Status badges with icons:
    - Completed → green with check
    - Rejected → red with cross
    - Waiting → blue with clock

- **Row Details**
  - Shows extra fields like Net Amount, Reference Number, Exchange Rate, etc.
  - Warnings block with highlights
  - **Accept / Reject buttons** (only for `Waiting` status)

- **Mock Data**
  - Pre-generated dataset of 20+ orders
  - Random symbols (AAPL, TSLA, GOOGL, etc.)
  - Dates starting from 2024 for filter testing

- **Clean Code Structure**
  - `@/` path alias for imports
  - Organized by `components/`, `hooks/`, `services/`, `data/`, `types/`, `utils/`

---

## Project Structure

```
src/
├─ App.tsx
├─ main.tsx
├─ index.css
├─ components/
│  ├─ OrdersTable.tsx
│  ├─ RowDetail.tsx
│  ├─ Pill.tsx
│  └─ SearchHeaderBar.tsx
├─ hooks/
│  └─ useOrdersSearch.ts
├─ services/
│  └─ ordersService.ts
├─ data/
│  └─ mockOrders.ts
├─ types/
│  ├─ order.ts
│  └─ status.ts
└─ utils/
   └─ format.ts
```

---

## Requirements

- **Node.js v22.19.0** (recommended)  
- **npm v10+**

> You can enforce this version with `.nvmrc` if using [nvm](https://github.com/nvm-sh/nvm).  
> Add the following file at the project root:

```
22.19.0
```

---

## Tech Stack

- [React 18](https://reactjs.org/)  
- [Vite 5](https://vitejs.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Lucide Icons](https://lucide.dev/)  

---

## Setup & Run

Clone the repo and install dependencies:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Environment Variables

No environment variables required for this MVP.  
Future versions may use an API endpoint (`VITE_API_URL`) instead of mock data.

---

## Testing the Filters

- Default view shows orders in **Waiting** status in early 2024.  
- Adjust `From` / `To` dates to see filtering in action.  
- Switch status between `Waiting`, `Completed`, `Rejected` to test pill colors and icons.  
- Expand a row → only `Waiting` rows show action buttons.

---

## Notes

- This is an **MVP** with mock data.  
- Replace `ordersService.ts` with real API calls later.  
- `.gitignore` excludes build files, node modules, env files, and IDE configs.  
