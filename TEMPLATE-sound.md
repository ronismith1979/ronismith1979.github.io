---
# Salin ke src/sounds/<nama>.md. Satu file = satu item di halaman Sounds.
title: "Nama Project"
type: project          # project | collab | writing | scene
year: 2024
draft: false           # true = disembunyikan saat launch

# --- project & collab (tampil sebagai card + punya halaman sendiri) ---
genre: "Post-rock"
role: "Songwriter, producer"   # peranmu
with: "Nama kolaborator"       # opsional, khusus collab
summary: "Satu kalimat tentang project ini."
cover: nama-project/cover.jpg  # file di src/assets/img/projects/nama-project/ (kosong = placeholder)
images:                        # opsional: gambar dan video .mp4 sesuai urutan
  - nama-project/01.jpg
tracks:                        # opsional: audio yang bisa diputar langsung (pakai MP3)
  - { title: "Judul Lagu", file: "nama-project/lagu-01.mp3" }
  - { title: "Lagu dari link luar", url: "https://..." }
order: 1                       # opsional: urutan manual (angka kecil tampil duluan)
links:                         # tombol dengar/tonton
  - { label: "Listen on Spotify", url: "https://..." }
  - { label: "Watch on YouTube", url: "https://..." }

# --- writing & scene (tampil sebagai daftar, tanpa halaman sendiri) ---
# org: "Nama media / venue / event"
# link: "https://..."          # opsional
# role: "Pembicara"            # untuk scene
---
Cerita singkat (opsional, hanya untuk project & collab). Bisa beberapa paragraf.
