# sogon

> **Closed Workplace Tacit-Knowledge Sharing Web Service**
>
> **sogon** is a closed-access internal knowledge space designed to help teammates find practical workplace tips that never make it into official manuals—delivering **3-second lookup via Korean initial consonant (Choseung) search** and tracking-free anonymous sharing.

---

## ■ Why sogon?

Everyday operational know-how—*"Where is that approval form?", "Who handles this request?", "What should I attach so it doesn't get rejected?"*—rarely lives in formal policy documents, forcing newcomers and staff to ask around repeatedly.

Instead of a heavy corporate wiki or bloated forum, **sogon** pairs **instant client-side search with stateless email OTP verification**, making it effortless to look up and share practical tips without leaving user traces.

---

## ■ Key Features

*   **Zero-Tracking Stateless OTP Authentication**
    Verifies workplace membership via a 6-digit one-time passcode sent to an allowed corporate email domain, while **never storing email addresses, user accounts, or employee IDs** in the database or session cookies.
*   **Instant Korean Choseung & Full-Text Search**
    Supports real-time Korean initial consonant queries (e.g., `'ㅅㅇㅈ'` → `'사원증'`) alongside title, body, and tag matching, complete with keyword highlighting in matching cards.
*   **Hybrid Card & Modal Reading View**
    Keeps the main feed scannable with compact card previews, inline expand/collapse for medium notes, and a clean full-view modal for detailed guides.
*   **Anonymous Personas, Tip Submission & Live Talk**
    Lets members customize cute animal avatars and anonymous nicknames to submit new tips or ask quick questions in the live talk panel without social friction.
*   **Stale-Tip Review Badge & One-Click Fix Reports**
    Automatically flags tips untouched for 180 days so teams know when to double-check current policies, and allows anyone to submit an update request in one click.
*   **Closed-Access & Search-Engine Isolated**
    The live service runs strictly behind organization-only authentication with `noindex` protection against external crawlers and unauthenticated visitors.

---

## ■ About the Live Demo

*   **Public Access Scope**: Because the production service is strictly closed to internal members, FFLS Works provides only an interactive **Live Demo** populated with 100% fictional workplace sample data.
*   **Try in Demo**: Instant search & highlights, category pills, detail modal, local tip submission, anonymous persona switching, and live talk simulation (stored temporarily in browser memory only).
