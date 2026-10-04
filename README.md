# ronismith1979.github.io

Portfolio Smith1979 (Roni Tresnawan). Dibangun dengan Eleventy, di-deploy otomatis ke GitHub Pages.

## Setup (sekali saja)

1. Buat repo **public** di GitHub bernama persis `ronismith1979.github.io` (harus sama dengan username GitHub: ronismith1979).
2. Upload semua isi folder ini ke repo (termasuk folder `.github`). Branch: `main`.
3. Repo > **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. Buka tab **Actions**, tunggu workflow "Deploy to GitHub Pages" hijau (sekitar 1 menit).
5. Situs live di `https://ronismith1979.github.io`.

## Tambah project baru

1. Buat folder gambar: `src/assets/img/projects/<nama-project>/` lalu upload `cover.jpg`, `01.jpg`, `02.jpg`, dst.
2. Salin `TEMPLATE-project.md` ke `src/projects/<nama-project>.md`, isi datanya.
3. Commit. Situs update sendiri dalam sekitar 1 menit.

Edit project lama = edit file `.md`-nya. Sembunyikan sementara = `draft: true`.

## Panduan gambar

- Format JPG/WebP, lebar maksimal 1600px, ukuran di bawah 400 KB per file (kompres di squoosh.app).
- `cover`: rasio bebas, otomatis di-crop 4:3 di grid. Halaman project menampilkan gambar utuh.
- Isi `images:` urut sesuai tampilan.

## Kategori

Diatur di `src/_data/site.json` (`categories`). Kategori kosong otomatis disembunyikan dari menu dan sitemap.

## Edit konten lain

- Bio, jasa, pengalaman, tools: `src/_data/about.json`
- Identitas, tagline, kontak, sosial media: `src/_data/site.json`
- Halaman Sound: `src/_data/sound.json`

## Jalankan lokal (opsional)

```
npm install
npm start
```
