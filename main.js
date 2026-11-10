/**
 * GaluraSwara Landing Page
 * Menggunakan Croot.js / JSCroot untuk manipulasi DOM dan konsumsi GitHub API
 */

import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/api.js";
import { setInner, onClick } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/element.js";

// Endpoint GitHub Releases untuk repository AndroidApp
const REPO_OWNER = "GaluraSwara";
const REPO_NAME = "AndroidApp";
const GITHUB_RELEASE_API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;
const DEFAULT_FALLBACK_DOWNLOAD = `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases`;

/**
 * Inisialisasi saat window dimuat
 */
window.addEventListener("DOMContentLoaded", () => {
    fetchLatestRelease();
    setupInteractivePreview();
});

/**
 * Mengambil informasi release APK terbaru dari GitHub Releases
 */
function fetchLatestRelease() {
    setInner("release-tag", "Memeriksa rilis terbaru...");
    
    getJSON(GITHUB_RELEASE_API, (response) => {
        // Cek response HTTP
        if (response && response.status === 200 && response.data) {
            const release = response.data;
            const tagName = release.tag_name || "v1.0.0";
            const publishedAt = release.published_at 
                ? new Date(release.published_at).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })
                : "Terbaru";

            // Cari asset APK
            let apkDownloadUrl = null;
            let apkSize = "";

            if (Array.isArray(release.assets)) {
                const apkAsset = release.assets.find(asset => asset.name && asset.name.endsWith(".apk"));
                if (apkAsset) {
                    apkDownloadUrl = apkAsset.browser_download_url;
                    const sizeInMB = (apkAsset.size / (1024 * 1024)).toFixed(1);
                    apkSize = ` (${sizeInMB} MB)`;
                }
            }

            // Jika tidak ada file APK spesifik di release assets, gunakan direct download zipball atau release link
            const targetDownloadUrl = apkDownloadUrl || release.html_url || DEFAULT_FALLBACK_DOWNLOAD;

            // Update UI dengan Croot.js setInner
            setInner("release-tag", `Versi ${tagName} • Dirilis ${publishedAt}`);
            setInner("release-notes-brief", release.name || `GaluraSwara Release ${tagName}`);

            // Update tombol unduh hero & section
            updateDownloadButtons(targetDownloadUrl, tagName + apkSize);
        } else {
            // Fallback jika belum ada release rilis atau API limit
            setInner("release-tag", "Versi Terbaru (GitHub Release)");
            updateDownloadButtons(DEFAULT_FALLBACK_DOWNLOAD, "APK");
        }
    });
}

/**
 * Mengatur link pada tombol download
 */
function updateDownloadButtons(url, label) {
    const heroBtn = document.getElementById("btn-download-hero");
    const ctaBtn = document.getElementById("btn-download-cta");

    if (heroBtn) {
        heroBtn.setAttribute("href", url);
        heroBtn.setAttribute("target", "_blank");
        heroBtn.setAttribute("rel", "noopener");
    }

    if (ctaBtn) {
        ctaBtn.setAttribute("href", url);
        ctaBtn.setAttribute("target", "_blank");
        ctaBtn.setAttribute("rel", "noopener");
    }
}

/**
 * Interaksi simulasi preview player di mockup
 */
function setupInteractivePreview() {
    let isPlaying = false;
    const playBtn = document.getElementById("mockup-play-btn");

    if (playBtn) {
        onClick("mockup-play-btn", () => {
            isPlaying = !isPlaying;
            setInner("mockup-play-btn", isPlaying ? "⏸" : "▶");
            const trackStatus = document.getElementById("track-status");
            if (trackStatus) {
                trackStatus.textContent = isPlaying ? "Sedang Memutar..." : "GaluraSwara Player";
            }
        });
    }
}
