# 🌐 galuraswara.github.io — Landing Page GaluraSwara

Landing page resmi aplikasi pemutar musik dan playlist tradisional **GaluraSwara**.

- 🔗 **Live Web**: [https://galuraswara.github.io/](https://galuraswara.github.io/)
- 📱 **Android App**: [GaluraSwara/AndroidApp](https://github.com/GaluraSwara/AndroidApp)
- ⚙️ **Backend**: [GaluraSwara/Backend](https://github.com/GaluraSwara/Backend)
- 📄 **API Docs**: [GaluraSwara/apidocs](https://galuraswara.github.io/apidocs/)

---

## 🎨 Karakteristik & Desain
- **Tema Tradisional Nusantara**: Menggunakan palet warna kayu jati tua (`#4A2E18`), tembaga/kuningan emas (`#D4A373`), serta aksen etnik.
- **Micro-framework Croot.js**: Memanfaatkan modul `getJSON`, `setInner`, dan `onClick` dari `https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/` tanpa instalasi dependensi atau konfigurasi bundler (*Zero-Build / Zero-Install*).
- **Auto Link Download APK**: Secara dinamis mengecek rilis terbaru dari GitHub Releases repository `GaluraSwara/AndroidApp` dan mengarahkan tombol unduh langsung ke file binary APK yang tersedia.
- **Interaktif Mockup Player**: Preview interaktif pemutar lagu tradisional langsung di layar desktop maupun mobile.

---

## 📁 Struktur Berkas
```
galuraswara.github.io/
├── index.html       # Struktur HTML5 semantik & UI landing page
├── style.css        # Desain gaya etnik / tradisional responsif
├── main.js          # Skrip ES Module menggunakan Croot.js untuk fetch release GitHub
├── README.md
└── LICENSE
```

---

## 💻 Menjalankan Secara Lokal
Cukup buka berkas `index.html` menggunakan web server lokal:

```bash
# Menggunakan Python
python -m http.server 8000

# Buka pada browser
http://localhost:8000
```
