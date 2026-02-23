# Privacy Policy

**Last updated: 19 February 2026**

Siftr ("we", "our", or "us") is a mobile application operated by Jonas Persson, Sweden ("the data controller"). This policy explains what personal data we collect, the legal basis for processing it, how it is used, and your rights under applicable law.

---

## 1. Data Controller

**Jonas Persson**
Sweden
Email: jonas@iamjonas.se

---

## 2. Data We Collect and Legal Basis

### Email address

- **Purpose:** Authentication via one-time passcode (OTP).
- **Legal basis:** Performance of a contract (GDPR Art. 6(1)(b)) — your email is required to create and access your account.

### Dietary restrictions and cuisine preferences

- **Purpose:** Filtering recipes and personalising your experience.
- **Legal basis:** Performance of a contract (GDPR Art. 6(1)(b)) — this data is the core of the service you have requested.

### Allergy information

- **Purpose:** Safety-critical filtering to exclude recipes containing ingredients you are allergic to.
- **Legal basis:** Explicit consent (GDPR Art. 9(2)(a)) — allergy data may constitute health data under GDPR. By entering this information in the app, you give explicit consent for us to process it for recipe filtering only. You may withdraw consent at any time by removing your allergy data from your profile.

### Camera and photos

- **Purpose:** Photographing fridge contents to detect food ingredients via AI.
- **Legal basis:** Performance of a contract (GDPR Art. 6(1)(b)) — scanning is the primary function of the app. Photos are converted to base64 and sent to third-party AI services (see Section 4). Photos are **never** stored on our servers.

### Scan count

- **Purpose:** Enforcing free-tier weekly usage limits.
- **Legal basis:** Legitimate interests (GDPR Art. 6(1)(f)) — we have a legitimate interest in managing service capacity.

---

## 3. How We Use Your Data

We use your data exclusively to provide and improve Siftr. We do not sell, rent, or share your personal data with third parties for advertising or marketing purposes.

---

## 4. Third-Party Services and International Data Transfers

Your data is processed by the following third-party services. Where data is transferred outside the European Economic Area (EEA), the transfer is protected by Standard Contractual Clauses (SCCs) approved by the European Commission under GDPR Art. 46.

### Supabase

Authentication and database. Your email address, profile preferences, and scan count are stored on Supabase's EU (Paris, eu-west-3) data centre. No international transfer takes place.
Privacy policy: https://supabase.com/privacy
**Transfer mechanism:** Data stored within the EEA — no transfer mechanism required.

### Google Gemini (Google LLC, USA)

Photos you scan may be processed by Google's Gemini API to detect food ingredients. Your confirmed ingredient list is also sent to Gemini to generate personalised recipes. According to Google's API terms of service at the time of writing, inputs submitted via the API are not used to train models and are not retained beyond the request. We cannot guarantee this will not change.
Privacy policy: https://policies.google.com/privacy
**Transfer mechanism:** Standard Contractual Clauses.

### OpenAI (OpenAI LLC, USA)

Photos you scan may alternatively be processed by OpenAI's GPT-4o API to detect food ingredients. Your confirmed ingredient list may also be sent to OpenAI as a fallback for recipe generation. According to OpenAI's API terms of service at the time of writing, API inputs and outputs are not used to train models and are not retained beyond 30 days for abuse monitoring purposes.
Privacy policy: https://openai.com/policies/privacy-policy
**Transfer mechanism:** Standard Contractual Clauses.

### Pexels (Pexels GmbH, Germany)

A short food-description search query (e.g. "pasta dish") derived from generated recipe titles is sent to the Pexels API to retrieve a relevant food photograph. No personal data is included in this query.
Privacy policy: https://www.pexels.com/privacy-policy/
**Transfer mechanism:** Data controller established within the EEA — no transfer mechanism required.

---

## 5. Data Retention

| Data                  | Retention period                           |
| --------------------- | ------------------------------------------ |
| Email address         | Until account deletion                     |
| Profile & preferences | Until account deletion                     |
| Allergy data          | Until withdrawn or account deletion        |
| Photos                | Never stored — processed in real time only |
| Scan count            | Until account deletion                     |

To request deletion of your account and all associated data, contact us at the address in Section 1.

---

## 6. Security

All data in transit between the app and our services is encrypted using HTTPS/TLS. Data stored in Supabase is encrypted at rest. We take reasonable technical and organisational measures to protect your personal data, though no system is entirely secure.

---

## 7. Children's Privacy

Siftr is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can delete it.

---

## 8. Your Rights (GDPR)

If you are located in the EEA, you have the following rights:

- **Access** — request a copy of the personal data we hold about you.
- **Rectification** — request correction of inaccurate data.
- **Erasure** — request deletion of your data ("right to be forgotten").
- **Restriction** — request that we limit processing of your data.
- **Objection** — object to processing based on legitimate interests.
- **Portability** — receive your data in a machine-readable format.
- **Withdraw consent** — where processing is based on consent (allergy data), you may withdraw it at any time without affecting the lawfulness of prior processing.

To exercise any of these rights, contact us at the address in Section 1. We will respond within 30 days.

You also have the right to **lodge a complaint** with the Swedish data protection authority:

**Integritetsskyddsmyndigheten (IMY)**
https://www.imy.se
imy@imy.se
+46 8 657 61 00

---

## 9. Changes to This Policy

We may update this policy to reflect changes in the app or in applicable law. When we make material changes, we will notify you via an in-app notice before the changes take effect. The "last updated" date at the top of this page will always reflect the current version.
