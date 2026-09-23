# Bun + ElysiaJS + Drizzle + MySQL Starter

Proyek backend modern dan berkinerja tinggi menggunakan Bun, ElysiaJS, Drizzle ORM, dan database MySQL.

## Tech Stack
- **Runtime**: [Bun](https://bun.com)
- **Web Framework**: [ElysiaJS](https://elysiajs.com)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Database Driver**: [MySQL2](https://github.com/sidorares/node-mysql2)

---

## Memulai Proyek

### 1. Instalasi Dependensi
```bash
bun install
```

### 2. Konfigurasi Database (.env)
Salin `.env.example` menjadi `.env` lalu sesuaikan koneksi database MySQL:
```bash
cp .env.example .env
```
Contoh isi `.env`:
```env
DATABASE_URL="mysql://root:password@localhost:3306/learn_vibe_db"
PORT=3000
```

### 3. Migrasi Database (Drizzle ORM)
Generate file migrasi SQL:
```bash
bun run db:generate
```
Push schema langsung ke database:
```bash
bun run db:push
```
Buka Drizzle Studio:
```bash
bun run db:studio
```

### 4. Menjalankan Server
Mode pengembangan (watch mode):
```bash
bun run dev
```

Mode produksi:
```bash
bun run start
```

---

## Endpoint API

- `GET /`: Health check & informasi status server.
- `GET /users`: Mengambil daftar pengguna dari database.
- `POST /users`: Menambahkan pengguna baru (body JSON: `{ "name": "string", "email": "string" }`).
