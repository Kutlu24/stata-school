document.addEventListener("DOMContentLoaded", function() {
    // Stata Komutları Arka Planı Oluşturma
    const stataCommandsBg = document.querySelector(".stata-commands-bg");
    const stataKomutlari = [
        "summarize", "regress", "graph twoway scatter", "generate", "replace",
        "list", "sort", "by", "merge", "append", "reshape", "xi", "test",
        "predict", "margins", "logistic", "probit", "poisson", "xtreg",
        "arima", "pca", "factor", "cluster", "table", "tabstat", "ttest",
        "anova", "bootstrap", "simulate", "program define", "end"
    ];

    for (let i = 0; i < 50; i++) {
        const komut = stataKomutlari[Math.floor(Math.random() * stataKomutlari.length)];
        const komutElemani = document.createElement("div");
        komutElemani.classList.add("stata-command");
        komutElemani.textContent = komut;
        komutElemani.style.top = Math.random() * 100 + "%";
        komutElemani.style.left = Math.random() * 100 + "%";
        komutElemani.style.animationDuration = (Math.random() * 15 + 10) + "s";
        komutElemani.style.animationDelay = -(Math.random() * 20) + "s";
        stataCommandsBg.appendChild(komutElemani);
    }

    // Kurs İçeriği Yükleme
    const kursKategorileri = document.querySelector(".kurs-kategorileri");
    const kursIcerik = document.getElementById("kurs-icerik");

    kursKategorileri.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const kurs = event.target.dataset.kurs;
            kursIceriginiYukle(kurs);
        }
    });

    function kursIceriginiYukle(kurs) {
        let icerik = "";

        switch (kurs) {
            case "temel-stata":
                icerik = `
                    <h3>Stata Basics</h3>
                    <p>An introduction to the Stata interface and everyday data-analysis work.</p>
                    <ul>
                        <li>Lesson 1: Introduction to the Stata Interface (Command, Results, Variables, Do-file Editor)</li>
                        <li>Lesson 2: Importing Data (import excel, import delimited, use)</li>
                        <li>Lesson 3: Variable Types, Labeling and Formatting (label variable, label define)</li>
                        <li>Lesson 4: Core Descriptive Statistics (summarize, tabulate, tabstat)</li>
                        <li>Lesson 5: Cleaning Data (drop, keep, replace, recode, missing values)</li>
                        <li>Lesson 6: Basic Plots (histogram, scatter, graph export)</li>
                    </ul>
                `;
                break;
            case "ileri-duzey-stata":
                icerik = `
                    <h3>Advanced Stata</h3>
                    <p>Regression-based techniques plus panel and time-series analysis.</p>
                    <ul>
                        <li>Lesson 1: Multiple Linear Regression (regress, standardized coefficients, residual analysis)</li>
                        <li>Lesson 2: Categorical Dependent-Variable Models (logit, probit, margins)</li>
                        <li>Lesson 3: Panel Data Analysis (xtset, xtreg, fixed/random effects)</li>
                        <li>Lesson 4: Time-Series Analysis (tsset, arima, basic stationarity tests)</li>
                        <li>Lesson 5: Workflow Automation and Reproducibility with Do-files</li>
                        <li>Lesson 6: Missing Data and Multiple Imputation (mi impute, mi estimate)</li>
                    </ul>
                `;
                break;
            case "ozel-konular":
                icerik = `
                    <h3>Special Topics</h3>
                    <p>Macro writing, simulation, and programming for more advanced users.</p>
                    <ul>
                        <li>Macros and Loops (local/global macros, foreach, forvalues)</li>
                        <li>Writing Programs (program define, syntax, args)</li>
                        <li>Monte Carlo Simulation (simulate, postfile)</li>
                        <li>Bootstrap and Resampling Methods (bootstrap, jackknife)</li>
                        <li>Working with Large Datasets (frames, holding multiple datasets in memory)</li>
                    </ul>
                `;
                break;
            default:
                icerik = "<p>Pick a course category above to get started.</p>";
                break;
        }

        kursIcerik.innerHTML = icerik;
    }

    // İlk Yüklemede Boş İçerik Göster
    kursIceriginiYukle("");
});
