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
                    <h3>Temel Stata</h3>
                    <p>Stata arayüzüne ve günlük veri analizi işlerine giriş.</p>
                    <ul>
                        <li>Ders 1: Stata Arayüzüne Giriş (Command, Results, Variables, Do-file Editor)</li>
                        <li>Ders 2: Veri İçe Aktarma (import excel, import delimited, use)</li>
                        <li>Ders 3: Değişken Türleri, Etiketleme ve Biçimlendirme (label variable, label define)</li>
                        <li>Ders 4: Temel Betimsel İstatistikler (summarize, tabulate, tabstat)</li>
                        <li>Ders 5: Veri Temizleme (drop, keep, replace, recode, missing values)</li>
                        <li>Ders 6: Basit Grafikler (histogram, scatter, graph export)</li>
                    </ul>
                `;
                break;
            case "ileri-duzey-stata":
                icerik = `
                    <h3>İleri Düzey Stata</h3>
                    <p>Regresyon tabanlı ve panel/zaman serisi analiz teknikleri.</p>
                    <ul>
                        <li>Ders 1: Çoklu Doğrusal Regresyon (regress, standartlaştırılmış katsayılar, artık analizi)</li>
                        <li>Ders 2: Kategorik Bağımlı Değişken Modelleri (logit, probit, margins)</li>
                        <li>Ders 3: Panel Veri Analizi (xtset, xtreg, sabit/rassal etkiler)</li>
                        <li>Ders 4: Zaman Serisi Analizi (tsset, arima, temel durağanlık testleri)</li>
                        <li>Ders 5: Do-dosyası ile İş Akışı Otomasyonu ve Yeniden Üretilebilirlik</li>
                        <li>Ders 6: Kayıp Veri ve Çoklu Atama (mi impute, mi estimate)</li>
                    </ul>
                `;
                break;
            case "ozel-konular":
                icerik = `
                    <h3>Özel Konular</h3>
                    <p>Daha ileri düzey kullanıcılar için makro yazımı, benzetim ve programlama.</p>
                    <ul>
                        <li>Makro ve Döngü Yazımı (local/global makrolar, foreach, forvalues)</li>
                        <li>Program Yazımı (program define, syntax, args)</li>
                        <li>Monte Carlo Benzetimi (simulate, postfile)</li>
                        <li>Bootstrap ve Yeniden Örnekleme Yöntemleri (bootstrap, jackknife)</li>
                        <li>Büyük Veri Setleriyle Çalışma (frames, çoklu veri setini bellekte tutma)</li>
                    </ul>
                `;
                break;
            default:
                icerik = "<p>Lütfen yukarıdan bir kurs kategorisi seçin.</p>";
                break;
        }

        kursIcerik.innerHTML = icerik;
    }

    // İlk Yüklemede Boş İçerik Göster
    kursIceriginiYukle("");
});
