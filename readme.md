Kamu adalah Senior Frontend Engineer.

Tolong buatkan sebuah **Admin Panel Web Application** untuk marketplace multi-vendor UMKM bernama **“E-Peken Mart”**.

=== TEKNOLOGI WAJIB ===
- React + Vite
- Tailwind CSS v4
- TypeScript
- Axios
- React Router
- JWT Auth (Bearer Token)
- State management: Context API + Reducer (untuk auth)
- UI clean, modern, enterprise-ready
- TanStack Query (React Query) - *Optional but recommended for data fetching*

=== TEMA & DESIGN SYSTEM ===
- Tema warna utama: MERAH & PUTIH (mirip Alfagift)
- Gunakan CSS variable di :root agar mudah ganti warna

Contoh:
:root {
  --primary: #e11d48;
  --primary-dark: #be123c;
  --background: #f3f4f6; /* Light gray background for better contrast */
  --text: #1f2937;
  --card-bg: #ffffff;
}

- Sidebar fixed (kiri)
- Header topbar (user profile + logout)
- Responsive (desktop priority)
- Gunakan icon lucide-react
- Card rounded-xl, shadow-sm
- Font: Inter / Plus Jakarta Sans

=== AUTH FLOW ===
1. Halaman Login Admin
2. Login via POST /auth/login
3. Simpan token di localStorage (`token`) & User info
4. Redirect ke /dashboard
5. Protect route (ADMIN only) - Jika token expired/invalid, redirect login

=== ROLE ===
- Hanya role ADMIN yang bisa akses panel
- Jika role bukan ADMIN → redirect ke login + Toast Message "Access Denied"

=== STRUKTUR HALAMAN & ENDPOINT ===

1. LOGIN
- Route: `/login`
- Form: Email, Password
- Action: POST /auth/login

2. DASHBOARD (Overview)
- Route: `/` or `/dashboard`
- **NOTE: Endpoint belum tersedia di backend, gunakan DUMMY DATA.**
- Data yang ditampilkan:
  - Total User
  - Total UMKM
  - Total Produk
  - Total Order
  - Total Transaksi
  - Chart sederhana (opsional, jika waktu cukup)

3. USER MANAGEMENT
- Route: `/users`
- Endpoint:
  - List: GET /admin/users
  - Ban: PATCH /admin/users/:id/ban
  - Unban: PATCH /admin/users/:id/unban
- Fitur:
  - Tabel user (Avatar, Nama, Email, Role, Status)
  - Badge Status (Active=Green, Banned=Red)
  - Search/Filter

4. UMKM VERIFICATION
- Route: `/umkm/verification`
- Endpoint:
  - List Pending: GET /admin/umkm/pending
  - Approve: PATCH /admin/umkm/:id/approve
  - Reject: PATCH /admin/umkm/:id/reject
- Fitur:
  - Admin harus bisa melihat detail pengajuan sebelum approve.

5. PRODUCT MONITORING
- Route: `/products`
- **NOTE: Endpoint `GET /admin/products` belum ada. Gunakan DUMMY DATA atau coba `GET /public/products` sementara.**
- Fitur:
  - Tabel produk
  - Column: Image, Name, Shop, Price, Category, Status

6. ORDER MONITORING
- Route: `/orders`
- Endpoint: GET /admin/orders
- Detail: GET /admin/orders/:id
- Fitur:
  - Status Badge (Pending, Paid, Shipped, Completed, Cancelled)

7. DISPUTE CENTER
- Route: `/disputes`
- Endpoint:
  - List: GET /admin/disputes
  - Resolve: PATCH /admin/disputes/:id/resolve

8. AUDIT LOG
- Route: `/audit-logs`
- Endpoint: GET /admin/audit-logs
- Fitur:
  - Timeline view atau Table view aktivitas admin

=== API CONFIG ===
- File: `src/api/axios.ts`
- Base URL: `import.meta.env.VITE_API_BASE_URL`
- Interceptor:
  - Request: Attach `Authorization: Bearer <token>`
  - Response: Handle 401 -> Clear token -> Redirect Login

=== STRUKTUR FOLDER (UPDATED) ===
src/
 ├─ api/              # Axios instance & API services
 │   ├─ axios.ts
 │   ├─ auth.service.ts
 │   ├─ user.service.ts
 │   └─ ...
 ├─ components/       # Reusable UI components
 │   ├─ ui/           # Button, Card, Input, Badge, Modal (Atomic)
 │   └─ layout/       # Sidebar, Header, ProtectedRoute
 ├─ contexts/         # React Context (AuthContext)
 ├─ hooks/            # Custom hooks (useAuth, useFetch)
 ├─ layouts/          # MainLayout, AuthLayout
 ├─ pages/            # Page components
 │   ├─ auth/
 │   ├─ dashboard/
 │   ├─ users/
 │   └─ ...
 ├─ routes/           # AppRouter configuration
 ├─ types/            # TypeScript interfaces
 ├─ utils/            # Format currency, date, etc.
 ├─ App.tsx
 └─ main.tsx

=== STEP PENGERJAAN ===
1. Setup Project (Vite + TS + Tailwind v4)
2. Setup Design System (Colors, Typography)
3. Setup Axios & Auth Context
4. Implement Login Page
5. Implement Main Layout (Sidebar/Header)
6. Implement Dashboard (Dummy)
7. Implement Crutial Features (Users, UMKM, Orders)
8. Polishing & Testing

=== OUTPUT YANG DIMINTA ===
1. Full project structure
2. Contoh komponen utama:
   - LoginPage
   - DashboardPage
   - UsersPage
   - UMKMVerificationPage
3. Contoh axios instance
4. Contoh protected route
5. Styling dengan Tailwind v4 + root variable

Buatkan kodenya siap jalan, production-ready, dan mudah dikembangkan.


