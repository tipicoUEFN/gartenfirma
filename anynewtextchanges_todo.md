LIVING CHECKLIST - New Text Localization QA

Use this file whenever new user-facing text is added.
Goal: keep wording natural per locale and technically safe (no key/logic changes).

How to use:
1. Add/modify text.
2. Run all steps in this checklist.
3. Only then commit/push.

---

TASK: Automatically audit and improve localization quality across the entire project repository.

Goal
Ensure all translations across the project are natural, grammatically correct, and culturally appropriate for each supported country while preserving code functionality.

Supported languages / regions:

AT – Austrian German
SL – Slovenian
HR – Croatian
HU – Hungarian
EN – English

---

STEP 1 — Scan the entire repository

Search all project files for user-facing text:

* translation JSON/YAML files
* language dictionaries
* UI components
* HTML templates
* form labels
* validation messages
* button text
* menu items
* service names
* summaries
* email templates

Do NOT modify:

* variable names
* function names
* import paths
* API endpoints
* keys used for translation lookup

Only update the **translated values**.

---

STEP 2 — Verify encoding support

Ensure the project uses UTF-8 everywhere.

Check that the system properly supports special characters.

AT (Austrian German) must support:

ä
ö
ü
ß

Examples:

Correct
Rasenmähen
Grünflächenpflege
Außenanlagen
Heckenschnitt

Incorrect
Rasenmaehen
Gruenflaechenpflege

---

STEP 3 — Country-specific spelling validation

Ensure correct characters for each language.

AT (Austrian German)
ä ö ü ß

SL (Slovenian)
č š ž

HR (Croatian)
č ć đ š ž

HU (Hungarian)
á é í ó ö ő ú ü ű

EN (English)
standard English spelling

Ensure all characters render correctly in UI.

---

STEP 4 — Linguistic quality check

Review translations for:

* unnatural phrasing
* literal machine translations
* grammar errors
* spelling mistakes
* inconsistent terminology

Rewrite text to sound like a **native local company website**, not a translated website.

Example:

Bad
"Service selection"

Better (AT)
"Service-Auswahl"

---

STEP 5 — Industry terminology research

For each country:

Research at least **5–10 local companies** offering similar services:

* lawn mowing
* hedge trimming
* garden maintenance
* landscaping
* window cleaning

Extract common wording used for:

* service names
* form labels
* request forms
* contact sections
* pricing descriptions

Replace unnatural phrases with wording used by local companies.

---

STEP 6 — Consistency validation

Ensure each service has exactly the same meaning across all languages.

Example mapping:

Rasenmähen / Grünflächenpflege
Heckenschnitt
Laubarbeiten
Fensterreinigung
Gartenpflege

Ensure these appear consistently everywhere in the project.

---

STEP 7 — Form field validation

Ensure request form labels are natural for each language.

Example for AT:

Vorname
Nachname
E-Mail
Telefon
Adresse (optional)

Service-Auswahl

Rasenmähen / Grünflächenpflege
Heckenschnitt
Laubarbeiten
Fensterreinigung

Häufigkeit der Ausführung

Objektart auswählen

Nachricht (optional)

Anfrage senden

---

STEP 8 — Localization QA automation

Automatically detect:

* missing translations
* duplicated translations
* mixed languages
* broken placeholders
* encoding problems

Generate a report listing:

* files modified
* translations corrected
* spelling fixes
* inconsistencies resolved

---

STEP 9 — Safety rules

Do not:

* rename translation keys
* change variable names
* modify logic
* modify price estimation code
* break existing imports

Only update translation values.

---

STEP 10 — Output

Produce:

1. Updated translation files
2. A localization report
3. A list of corrected phrases
4. A list of potential improvements

Goal:

The website should read as if written by a **native company in each country** while keeping the project technically stable.
