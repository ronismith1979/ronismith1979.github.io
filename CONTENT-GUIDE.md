# Panduan Konten (untuk pemilik situs)

Catatan kerja untuk mengelola situs ini. README.md dibuat untuk pengunjung repo; file ini untuk kamu sendiri.

## Mode Preview vs Launch

Satu saklar di `src/_data/site.json`:

```json
"previewMode": true
```

- `true` (sekarang): semua halaman muncul di nav (yang belum siap diberi label "soon"), project `draft: true` tetap tampil dengan label "Draft", seluruh situs `noindex` (tidak diindeks Google), dan ada banner kuning di atas.
- `false` (saat launch): halaman `show: false` hilang dari nav dan sitemap, project draft disembunyikan, banner hilang, `noindex` dicabut.

## Mengaktifkan / menonaktifkan halaman di nav

Di `site.json`, array `nav`:

```json
{ "label": "Downloads", "url": "/downloads/", "show": false }
```

- `show: false` = disembunyikan saat launch (tampil "soon" saat preview).
- Saat halaman sudah siap: ubah jadi `show: true` **dan** hapus baris `status: soon` di bagian atas file halamannya (misal `src/downloads.njk`), supaya halaman itu ikut diindeks Google.
- `"collection": "downloads"` (dipakai Downloads dan Ready-Made) = item nav **muncul otomatis** begitu ada minimal satu item yang `draft: false`, dan hilang otomatis kalau kosong. Halaman kosongnya juga otomatis `noindex`. Jadi tidak perlu ubah `show` secara manual.
- `"dropdown": "categories"` = tampilkan dropdown kategori (dipakai di Portfolio).
- `"cta": true` = tampil sebagai tombol beraksen (dipakai di Contact).
- Urutan nav = urutan di array.

## Menambah project portfolio

1. Upload gambar/video ke `src/assets/img/projects/<nama-project>/`.
2. Salin `TEMPLATE-project.md` ke `src/projects/<nama-project>.md`, lalu isi.
3. Commit, situs update sendiri sekitar 1 menit.

Field penting:

| Field | Isi |
|---|---|
| `client` | Klien sebenarnya (misal "STIE Ekuitas") |
| `source` | Tampil sebagai **Via**: MUNclab / Direct / 48hourslogo / Fiverr / dll. Kosongkan kalau tidak perlu |
| `role` | Peranmu di project |
| `scope` | Cakupan kerja / deliverables |
| `year` | Tahun pengerjaan |
| `cover` | Gambar untuk kartu di grid |
| `images` | Daftar gambar **dan video `.mp4`** sesuai urutan tampil |
| `featured` | `true` = tampil di Home |
| `draft` | `true` = disembunyikan saat launch (tampil berlabel "Draft" saat preview) |

**Catatan:** `draft: true` hanya menyembunyikan dari situs. File-nya tetap terlihat di repo karena repo ini publik. Jangan upload materi rahasia/NDA.

## Halaman Sounds (Sonic Journey)

Satu file di `src/sounds/<nama>.md` = satu item. Salin dari `TEMPLATE-sound.md`. Field `type` menentukan tampilannya:

| `type` | Tampil sebagai |
|---|---|
| `project` | Card di seksi **Projects**, punya halaman sendiri (band/proyek musikmu) |
| `collab` | Card di seksi **Collaborations & Scoring**, punya halaman sendiri |
| `writing` | Baris daftar di seksi **Writing** (judul, media, tahun, link) |
| `scene` | Baris daftar di seksi **Scene & Community** (talks, workshop, gigs) |

- Cover kosong = placeholder abu-abu. Taruh gambar di `src/assets/img/projects/<nama>/` seperti project portfolio.
- Tombol dengar/tonton diisi lewat `links:` (Spotify, Bandcamp, YouTube, dll.).
- 6 item awal (My Violainé Morning, Pop at Summer, Dream Cloud Cherries, Sonetique, Smi7h, Empat Musim Pertiwi) masih `draft: true` dengan deskripsi placeholder. Edit isinya, lalu ubah jadi `draft: false`.
- Seksi yang kosong otomatis hilang saat launch. Nama dan intro tiap seksi diatur di `src/_data/sound.json`.

## Downloads (gratis)

Satu file di `src/downloads/<nama>.md` = satu item. Salin dari `TEMPLATE-download.md`.

- `category`: fonts, prompt-packs, documents, images, video, audio (daftar dan intro seksi ada di `src/_data/downloads.json`).
- Sumber file, pilih salah satu:
  - `url:` link ke GitHub Releases atau Google Drive (disarankan untuk file besar).
  - `file:` nama file yang kamu upload ke `src/assets/downloads/`. Upload lewat browser GitHub dibatasi **25 MB** per file, dan hindari file besar di repo.
- GitHub Releases: tab **Releases** di repo, **Create a new release**, lampirkan file (sampai 2 GB), salin link download-nya ke `url:`.
- `license` wajib diisi jelas (personal use, commercial, CC0, dll). Untuk font buatan sendiri ini penting.
- `images:` untuk preview, boleh gambar, video `.mp4`, atau audio `.mp3`.

## Ready-Made (produk)

Satu file di `src/readymade/<nama>.md` = satu produk. Salin dari `TEMPLATE-readymade.md`.

- `category`: brand-identity, collateral-social, asset-sets, video-sets, ai-prompts, audio (diatur di `src/_data/readymade.json`).
- Tombol otomatis: kalau `buy:` diisi (link Gumroad, Lynk.id, Fiverr, dll), tampil **Buy now** + **Ask on WhatsApp**. Kalau kosong, tampil **Inquire on WhatsApp** + **Email** dengan pesan yang sudah terisi nama produknya.
- `status: soon` = tampil "Coming soon" dan tombol beli dimatikan.
- `priceValue` + `currency` (opsional) membuat Google bisa membaca harga produk (schema Product).
- Teks ajakan di bawah halaman ("Need something customized...") bisa diubah di `readymade.json` (`note`).

## Panduan gambar dan video

- Gambar: JPG/WebP, lebar maksimal 1600px, di bawah 400 KB per file (kompres di squoosh.app).
- Video: MP4 (H.264), idealnya di bawah 10 MB. File besar jangan ditaruh di repo, pakai YouTube/Vimeo atau GitHub Releases.

## Kategori portfolio

Diatur di `site.json` (`categories`). Di nav dan tab, kategori kosong otomatis disembunyikan saat launch.

## Konten lain

- Bio, jasa, pengalaman, tools: `src/_data/about.json`
- Identitas, tagline, kontak, sosial media, nav: `src/_data/site.json`
- Halaman Sounds: `src/_data/sound.json`
- Warna: bagian atas `src/assets/css/style.css` (`--accent` dan `--on-accent`, ada versi terang dan gelap)
- Favicon dan OG image: `src/assets/img/favicon.svg` dan `og-default.png` (upload dengan nama sama untuk mengganti)

## Pakai domain sendiri (nanti)

1. Beli domain di registrar mana saja. Domain **tidak perlu dipindah/transfer**, cukup diarahkan.
2. Di GitHub: Settings, Pages, Custom domain, isi domain-nya.
3. Di DNS registrar, arahkan sesuai petunjuk GitHub Pages (record A untuk domain utama dan/atau CNAME untuk `www`). Cek dokumentasi resmi GitHub Pages untuk nilai terbaru.
4. Aktifkan **Enforce HTTPS**.
5. Ubah `"url"` di `site.json` ke domain baru (supaya canonical, sitemap dan metadata ikut benar).
