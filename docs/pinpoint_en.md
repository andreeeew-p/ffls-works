# pinpoint

> **Superfast On-Demand NAS Search Indexer**
> 
> Pinpoint is a high-performance file search utility designed to instantaneously search through massive volumes of files on local drives and shared network storage (NAS) without any lag. Its highly efficient, background-resource-friendly architecture provides a snappy search experience without putting stress on either the client PC or the shared server.

---

## ■ Why Pinpoint?

Conventional file search tools continuously monitor the file system (MFT) in real-time or send constant queries to shared drives, causing recurring overhead on Document Management Systems (DMS) and NAS servers.

Instead of real-time active tracking, Pinpoint introduces a **server-friendly, on-demand indexing structure** that securely preserves your shared server's CPU utilization and network bandwidth.

---

## ■ Key Features

*   **Shared Server Load Prevention (Zero MFT overhead)**
    Pinpoint does not actively monitor or trace the entire file system in the background. This completely prevents unnecessary network traffic and disk I/O from overloading your shared drives and document servers.
*   **Server-Friendly On-Demand Indexing**
    Designed to update index databases only when synchronization is requested. It avoids large-scale network congestion, leaving your coworkers' server access speeds unaffected.
*   **Smart Background Memory Optimization**
    A memory trimmer automatically engages the moment the application is minimized. It constricts physical RAM usage to a bare minimum, ensuring the background app does not monopolize resources.
*   **Custom Indexing & Exclusion Paths**
    Selectively specify local folders or network drive paths to scan, keeping index databases lightweight. Easily exclude specific temporary directories or file extensions.
*   **Snappy Korean Choseung (Initial Consonant) Search**
    Instantly matches filenames by typing only initial Korean consonants, drastically cutting down document lookup times (e.g., typing `'ㅂㄱㅅ'` instantly matches `'보고서'`).
*   **Strict Enterprise Information Security (Zero Telemetry)**
    A 100% offline, standalone architecture with absolutely no telemetry or data harvesting. Furthermore, all indexed file paths are securely encrypted using SQLCipher on your local machine, fully meeting strict corporate security guidelines.

---

## ■ System Requirements

*   **OS**: Windows 10 Version 17763.0 or higher (64-bit)
*   **Platforms**: Windows PC (x64 / ARM64)

---

## ■ Changelog

### v1.1.26 *(2026-06-19)*
*   Optimized search performance and UI virtualization to view large query results seamlessly without lag.
*   Enhanced database transaction processing efficiency and indexing synchronization stability.
*   Optimized taskbar icon assets for Windows design guidelines to render naturally across dark and light system themes.
*   Refined default exclusion filters to significantly expand the searchable file scope.
*   Added real-time query result counts in the status bar for intuitive status tracking.
*   Resolved potential race conditions in background multi-threaded indexing to bolster stability.
