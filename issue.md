# Project Setup: Bun + ElysiaJS + Drizzle + MySQL

## Tujuan
Menginisialisasi proyek backend baru menggunakan Bun sebagai runtime, ElysiaJS sebagai web framework, Drizzle sebagai ORM, dan MySQL sebagai database.

## Instruksi Tingkat Tinggi (High-Level Plan)

1. **Inisialisasi Proyek**
   - Lakukan inisialisasi proyek menggunakan perintah bawaan dari Bun di direktori ini.

2. **Instalasi Dependency**
   - Tambahkan dependency utama yang dibutuhkan: `elysia` untuk server, `drizzle-orm` untuk ORM, beserta `drizzle-kit` (untuk keperluan migrasi) dan driver MySQL yang didukung.

3. **Konfigurasi Database (Drizzle & MySQL)**
   - Siapkan file `.env` yang memuat kredensial dan URL koneksi ke MySQL.
   - Buat instansiasi koneksi Drizzle ke MySQL.
   - Atur konfigurasi migrasi menggunakan `drizzle.config.ts`.
   - Buat contoh skema tabel sederhana (misalnya tabel `users`) untuk memverifikasi bahwa Drizzle dapat berinteraksi dengan database.

4. **Pembuatan Web Server (ElysiaJS)**
   - Setup file utama (misal `index.ts`) untuk menjalankan server ElysiaJS di port default (atau port 3000).
   - Buat route dasar (`GET /`) yang mencoba mengakses database menggunakan Drizzle ORM untuk membuktikan bahwa integrasi berhasil.

5. **Verifikasi**
   - Jalankan server dan pastikan tidak ada error.
   - Uji route yang telah dibuat untuk memastikan respon dari web server dan database sesuai harapan.
