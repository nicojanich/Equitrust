document.addEventListener("DOMContentLoaded", () => {
    const sectorDropdown = document.getElementById("sector-dropdown");
    const criteriaInputs = document.getElementById("criteria-inputs");
    const resultsTableBody = document.querySelector("#results-table tbody");
    const finalDecision = document.getElementById("final-decision");

    // Kontrollwerte für alle Branchen
    // Kontrollwerte für alle Branchen
const controlValues = {
    "Industrie": {
        "Umsatzwachstum": "5–10 %",
        "Reingewinn-wachstum": "5–12 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "20–30 %",
        "Rein/Umsatz (%)": "5–10 %",
        "Kosten/EK": "< 2,0",
        "Rein/Kosten (%)": "5–10 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "1,5–3 %",
        "KGV": "15–20",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Gesundheit": {
        "Umsatzwachstum": "6–12 %",
        "Reingewinn-wachstum": "8–15 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "25–35 %",
        "Rein/Umsatz (%)": "10–20 %",
        "Kosten/EK": "< 1,5",
        "Rein/Kosten (%)": "10–15 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "1–2,5 %",
        "KGV": "18–25",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Nicht-Basiskonsum": {
        "Umsatzwachstum": "7–14 %",
        "Reingewinn-wachstum": "10–18 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "15–25 %",
        "Rein/Umsatz (%)": "7–12 %",
        "Kosten/EK": "< 2,5",
        "Rein/Kosten (%)": "8–12 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "1–2 %",
        "KGV": "20–25",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Basiskonsumgüter": {
        "Umsatzwachstum": "3–7 %",
        "Reingewinn-wachstum": "4–8 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "25–35 %",
        "Rein/Umsatz (%)": "5–8 %",
        "Kosten/EK": "< 1,8",
        "Rein/Kosten (%)": "5–8 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "2–4 %",
        "KGV": "15–20",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Finanzen": {
        "Umsatzwachstum": "5–8 %",
        "Reingewinn-wachstum": "7–12 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "30–40 %",
        "Rein/Umsatz (%)": "15–20 %",
        "Kosten/EK": "< 2,0",
        "Rein/Kosten (%)": "10–15 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "3–5 %",
        "KGV": "12–18",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Versorger": {
        "Umsatzwachstum": "2–5 %",
        "Reingewinn-wachstum": "3–6 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "35–45 %",
        "Rein/Umsatz (%)": "10–15 %",
        "Kosten/EK": "< 1,5",
        "Rein/Kosten (%)": "8–12 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "4–6 %",
        "KGV": "10–15",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Energie": {
        "Umsatzwachstum": "5–10 %",
        "Reingewinn-wachstum": "8–15 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "20–30 %",
        "Rein/Umsatz (%)": "8–12 %",
        "Kosten/EK": "< 2,5",
        "Rein/Kosten (%)": "7–10 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "3–5 %",
        "KGV": "10–18",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Technologie": {
        "Umsatzwachstum": "15–25 %",
        "Reingewinn-wachstum": "20–30 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "50–60 %",
        "Rein/Umsatz (%)": "15–25 %",
        "Kosten/EK": "< 3,0",
        "Rein/Kosten (%)": "12–18 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "0–2 %",
        "KGV": "25–35",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Telekommunikation": {
        "Umsatzwachstum": "3–6 %",
        "Reingewinn-wachstum": "5–10 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "40–50 %",
        "Rein/Umsatz (%)": "10–15 %",
        "Kosten/EK": "< 2,0",
        "Rein/Kosten (%)": "8–12 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "3–5 %",
        "KGV": "15–20",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Grundstoffe": {
        "Umsatzwachstum": "4–8 %",
        "Reingewinn-wachstum": "6–12 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "30–40 %",
        "Rein/Umsatz (%)": "8–12 %",
        "Kosten/EK": "< 2,5",
        "Rein/Kosten (%)": "7–10 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "2–4 %",
        "KGV": "10–15",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    },
    "Immobilien": {
        "Umsatzwachstum": "3–6 %",
        "Reingewinn-wachstum": "4–8 %",
        "2 Jahre Drops": "Nein",
        "Rein/Bruttogewinn": "60–70 %",
        "Rein/Umsatz (%)": "20–30 %",
        "Kosten/EK": "< 2,0",
        "Rein/Kosten (%)": "15–20 %",
        "Freecashflow > Profit": "Ja",
        "Cashflow steigt": "Ja",
        "Dividenden-rendite (%)": "4–6 %",
        "KGV": "8–12",
        "KGV < Konkurrenz": "Ja",
        "KGV < 5 Jahre": "Ja",
        "CEO verkauft Shares": "Nein",
        "Profit >> Cashflow": "Nein"
    }
};

    sectorDropdown.addEventListener("change", () => {
        const sector = sectorDropdown.value;
        criteriaInputs.innerHTML = ""; // Vorherige Eingaben entfernen

        if (sector && controlValues[sector]) {
            const criteria = controlValues[sector];
            for (const [key, value] of Object.entries(criteria)) {
                const inputGroup = document.createElement("div");
                inputGroup.innerHTML = `
                    <label>${key} (Kontrollwert: ${value})</label>
                    <input type="text" name="${key}" placeholder="Echtwert eingeben">
                `;
                criteriaInputs.appendChild(inputGroup);
            }
        }
    });

    document.getElementById("criteria-form").addEventListener("submit", (event) => {
        event.preventDefault();
        resultsTableBody.innerHTML = ""; // Vorherige Ergebnisse entfernen

        const sector = sectorDropdown.value;
        const criteria = controlValues[sector];
        const formData = new FormData(event.target);

        let positiveCount = 0;
        let totalCount = 0;
        let disqualify = false;

        for (const [key, controlValue] of Object.entries(criteria)) {
            const userValue = formData.get(key);
            let result = "Nein"; // Standard: Nicht erfüllt

            // Bewertung der Kriterien
            if (key === "CEO verkauft Shares" && userValue === "Ja") {
                disqualify = true;
            } else if (key === "Profit >> Cashflow" && userValue === "Ja") {
                disqualify = true;
            } else if (userValue === controlValue || userValue > controlValue) {
                result = "Ja";
                positiveCount++;
            }

            totalCount++;

            // Ergebnis in die Tabelle einfügen
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${key}</td>
                <td>${userValue || "Keine Eingabe"}</td>
                <td>${controlValue}</td>
                <td>${result}</td>
            `;
            resultsTableBody.appendChild(row);
        }

        if (disqualify) {
            finalDecision.textContent = "Entscheidung: Nicht kaufen (Disqualifiziert durch Schlüssel-Kriterium)";
        } else if (positiveCount / totalCount >= 0.8) {
            finalDecision.textContent = "Entscheidung: Kaufen";
        } else {
            finalDecision.textContent = "Entscheidung: Nicht kaufen";
        }
    });
});