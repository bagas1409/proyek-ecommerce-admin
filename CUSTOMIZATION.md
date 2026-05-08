# 🎨 Panduan Kustomisasi Tampilan Admin Panel

Dokumen ini menjelaskan file-file yang perlu diubah untuk mengkustomisasi tampilan Admin Panel E-Peken.

---

## 1. Warna & CSS Variables

**File:** `src/index.css`

```css
:root {
  --primary: #e11d48;        /* Warna utama (merah) */
  --primary-dark: #be123c;   /* Warna utama gelap (hover) */
  --primary-light: #fb7185;  /* Warna utama terang */
  --background: #f3f4f6;     /* Background halaman */
  --card-bg: #ffffff;        /* Background kartu */
  --text: #1f2937;           /* Warna teks utama */
  --text-muted: #6b7280;     /* Warna teks secondary */
  --border: #e5e7eb;         /* Warna border */
  --success: #10b981;        /* Warna sukses (hijau) */
  --warning: #f59e0b;        /* Warna warning (kuning) */
  --danger: #ef4444;         /* Warna danger (merah) */
}
```

---

## 2. Layout & Navigasi

### Sidebar
**File:** `src/components/layout/Sidebar.tsx`
- Logo dan nama aplikasi
- Menu navigasi (icon + label)
- Lebar sidebar: `w-64` (256px)

### Header
**File:** `src/components/layout/Header.tsx`
- User profile display
- Logout button
- Tinggi header: `h-16` (64px)

### Main Layout
**File:** `src/layouts/MainLayout.tsx`
- Struktur layout (sidebar + header + content)
- Margin content: `ml-64` (mengikuti lebar sidebar)

---

## 3. Komponen UI

### Tombol (Button)
**File:** `src/components/ui/Button.tsx`
- Variants: `primary`, `secondary`, `danger`, `ghost`
- Sizes: `sm`, `md`, `lg`

### Kartu (Card)
**File:** `src/components/ui/Card.tsx`
- `Card` - kartu standar
- `StatCard` - kartu statistik dashboard

### Badge
**File:** `src/components/ui/Badge.tsx`
- Variants: `success`, `warning`, `danger`, `default`, `primary`

---

## 4. Halaman

| Halaman | File |
|:--------|:-----|
| Login | `src/pages/auth/LoginPage.tsx` |
| Dashboard | `src/pages/dashboard/DashboardPage.tsx` |
| Users | `src/pages/users/UsersPage.tsx` |
| UMKM Verification | `src/pages/umkm/UMKMVerificationPage.tsx` |
| Orders | `src/pages/orders/OrdersPage.tsx` |
| Disputes | `src/pages/disputes/DisputesPage.tsx` |
| Audit Logs | `src/pages/audit/AuditLogsPage.tsx` |

---

## 5. Font

**File:** `index.html` (line 11)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**File:** `src/index.css` (line 24)
```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

---

## 6. Icon

Menggunakan **Lucide React**. Contoh penggunaan:
```tsx
import { Users, Store, ShoppingCart } from 'lucide-react'

<Users className="w-5 h-5" />
```

Browse semua icon: https://lucide.dev/icons

---

## Tips Kustomisasi

1. **Ubah warna:** Edit CSS variables di `src/index.css`
2. **Ubah icon:** Import icon lain dari `lucide-react`
3. **Ubah layout:** Edit `MainLayout.tsx`, `Sidebar.tsx`, `Header.tsx`
4. **Ubah tampilan tabel:** Edit file page yang bersangkutan
5. **Tambah komponen baru:** Buat file di `src/components/ui/`
