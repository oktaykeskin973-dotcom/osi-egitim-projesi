// ==========================================
// 1. ARKAPLAN PARÇACIK ANİMASYONU
// ==========================================
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#58a6ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#58a6ff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        }
    }
});

// ==========================================
// 2. OSI KATMANLARI VE SENARYO VERİTABANI
// ==========================================
const osiLayers = [
    {
        title: "7. Uygulama Katmanı (Application)",
        scenarioTitle: "Senaryo: PUBG'de Ateş Etme Emri",
        desc: "Düşmanı gördün ve farenin sol tıkına bastın. İşte ağ üzerindeki yolculuk tam bu saniye başlar!",
        detail: "<strong>Ne oluyor?</strong> Uygulama katmanı, kullanıcının ağ ile doğrudan temas kurduğu tek yerdir. PUBG GameLoop emülatörü veya PC istemcisi, 'ateş etme' komutunu alır ve ağ üzerinden sunucuya gönderilecek bir dijital veriye (payload) dönüştürür.",
        protocol: "<strong>Kullanılan Protokoller:</strong> Oyunun kendi özel API ve iletişim protokolleri.",
        nextBtn: "6. Katmana (Sunum) Geç"
    },
    {
        title: "6. Sunum Katmanı (Presentation)",
        scenarioTitle: "Senaryo: Veriyi Şifreleme ve Sıkıştırma",
        desc: "Ateş etme emri oluşturuldu, peki bu veri yolda hacklenirse veya çok büyükse ne olacak?",
        detail: "<strong>Ne oluyor?</strong> Bu katman çevirmen gibi çalışır. Senin ateş etme verini PUBG sunucularının anlayacağı ortak formata çevirir. Ayrıca hilecilere karşı (Anti-Cheat) şifreler ve sıkıştırır.",
        protocol: "<strong>Kullanılan Teknolojiler:</strong> SSL/TLS, JPEG/MPEG.",
        nextBtn: "5. Katmana (Oturum) Geç"
    },
    {
        title: "5. Oturum Katmanı (Session)",
        scenarioTitle: "Senaryo: Sunucu ile Bağlantıyı Açık Tutmak",
        desc: "Şifrelenmiş paketimiz hazır. Şimdi karşı tarafla bir 'iletişim kanalı' açmalıyız.",
        detail: "<strong>Ne oluyor?</strong> Bilgisayarın ile PUBG sunucusu arasında bir oturum başlatılır. Maç boyunca pingin çıksa bile oyundan düşmemeni bu katman sağlar.",
        protocol: "<strong>Kullanılan Protokoller:</strong> NetBIOS, RPC, Sockets.",
        nextBtn: "4. Katmana (Taşıma) Geç"
    },
    {
        title: "4. Taşıma Katmanı (Transport)",
        scenarioTitle: "Senaryo: Gecikmesiz Taşıma (UDP Kullanımı)",
        desc: "Veriyi karşıya nasıl göndereceğiz? Eksiksiz ama yavaş mı (TCP), yoksa kayıpları umursamadan çok hızlı mı (UDP)?",
        detail: "<strong>Ne oluyor?</strong> Online oyunlarda hız her şeydir! Mermi bilgisi yolda kaybolursa oyun durup o mermiyi tekrar istemez. Bu yüzden veriler TCP yerine 'UDP' ile fırlatılır.",
        protocol: "<strong>Kullanılan Protokoller:</strong> UDP, TCP.",
        nextBtn: "3. Katmana (Ağ) Geç"
    },
    {
        title: "3. Ağ Katmanı (Network)",
        scenarioTitle: "Senaryo: IP Adresi ve Rota Belirleme",
        desc: "Segmentlerimiz hazır ama PUBG sunucusu nerede? Yol tarifi lazım!",
        detail: "<strong>Ne oluyor?</strong> Veriye 'Kaynak IP' ve 'Hedef IP' eklenir. Router'lar sayesinde en kısa ve en az pingli rota hesaplanır.",
        protocol: "<strong>Kullanılan Protokoller:</strong> IP, ICMP.",
        nextBtn: "2. Katmana (Veri Bağlantısı) Geç"
    },
    {
        title: "2. Veri Bağlantısı Katmanı (Data Link)",
        scenarioTitle: "Senaryo: MAC Adresleri ve Yerel Ağ",
        desc: "Paketimiz Almanya'ya gidecek ama önce odandaki PC'den modeme ulaşması lazım.",
        detail: "<strong>Ne oluyor?</strong> Pakete bilgisayarının ve modemin fiziksel (MAC) adresleri eklenir. Böylece veri doğru cihaza gider.",
        protocol: "<strong>Kullanılan Teknolojiler:</strong> Ethernet, Wi-Fi, MAC Adresleme.",
        nextBtn: "1. Katmana (Fiziksel) Geç"
    },
    {
        title: "1. Fiziksel Katman (Physical)",
        scenarioTitle: "Senaryo: Verinin Elektriğe / Işığa Dönüşmesi",
        desc: "Dijital dünyanın sonu, fiziksel dünyanın başlangıcı. Paketimiz kablolara çıkıyor!",
        detail: "<strong>Ne oluyor?</strong> O farenin sol tıkıyla başlayan 'ateş et' komutu, 0 ve 1'lerden oluşan elektrik/ışık sinyallerine dönüşür ve kablolara akar.",
        protocol: "<strong>Kullanılan Donanımlar:</strong> Fiber Optik, CAT6 Kablolar.",
        nextBtn: "Eğitimi Tamamla (Teste Gir)"
    }
];

// ==========================================
// 3. BOSS FIGHT SORU HAVUZU
// ==========================================
const bossQuestions = [
    { question: "PUBG'de ateş etme komutu verildiğinde, bu verinin ağa çıkmadan önce oyun motorunun kendi özel API'leri ile işlendiği ve kullanıcıya en yakın olan katman hangisidir?", options: ["Sunum Katmanı", "Oturum Katmanı", "Uygulama Katmanı"], correctIndex: 2 },
    { question: "Oyun verisinin hilecilere karşı şifrelenmesi ve daha hızlı iletilmesi için sıkıştırılması hangi katmanda gerçekleşir?", options: ["Sunum Katmanı", "Taşıma Katmanı", "Veri Bağlantısı Katmanı"], correctIndex: 0 },
    { question: "Anlık ping yükselmelerinde bile oyundan düşmemeni sağlayan, PUBG sunucusuyla bağlantıyı açık tutan katman hangisidir?", options: ["Ağ Katmanı", "Oturum Katmanı", "Uygulama Katmanı"], correctIndex: 1 },
    { question: "Veri kaybı umursanmadan paketlerin en hızlı şekilde fırlatılmasını sağlayan UDP protokolü hangi katmanda çalışır?", options: ["Fiziksel Katman", "Ağ Katmanı", "Taşıma Katmanı"], correctIndex: 2 },
    { question: "PUBG sunucusunun yerini bulmak için veriye 'Hedef IP' eklendiği ve Router'lar ile rota çizildiği katman hangisidir?", options: ["Ağ Katmanı", "Veri Bağlantısı Katmanı", "Oturum Katmanı"], correctIndex: 0 },
    { question: "Verinin evindeki modeme ulaşabilmesi için paketlere 'MAC Adresleri'nin eklendiği katman hangisidir?", options: ["Taşıma Katmanı", "Fiziksel Katman", "Veri Bağlantısı Katmanı"], correctIndex: 2 },
    { question: "Tüm dijital verilerin elektrik sinyallerine veya ışıklara dönüştürülüp kablolara aktarıldığı son katman hangisidir?", options: ["Fiziksel Katman", "Sunum Katmanı", "Ağ Katmanı"], correctIndex: 0 }
];

// ==========================================
// 4. TEMEL DEĞİŞKENLER VE HTML SEÇİMLERİ
// ==========================================
let currentLayer = 0; 

const dashboardCard = document.querySelector(".dashboard");
const dashboardTitle = document.querySelector(".dashboard h2"); // Ana menüdeki başlık
const dashboardDesc = document.querySelector(".dashboard p"); // Ana menüdeki açıklama
const educationPanel = document.getElementById("education-panel");

const startBtn = document.getElementById("start-btn");
const backToDashBtn = document.getElementById("back-to-dash-btn");
const nextBtn = document.getElementById("next-layer-btn");

const titleEl = document.getElementById("layer-title");
const scenarioTitleEl = document.getElementById("scenario-title");
const descEl = document.getElementById("scenario-desc");
const detailEl = document.getElementById("scenario-detail");
const protocolEl = document.getElementById("scenario-protocol");

const modal = document.getElementById("boss-modal");
const skipBtn = document.getElementById("skip-btn");
const closeBtn = document.querySelector(".close-btn");
const feedbackText = document.getElementById("feedback-text");
const questionBox = document.querySelector(".question-box");

// ==========================================
// 5. SAYFA GEÇİŞLERİ VE EKRAN GÜNCELLEME
// ==========================================
function updateLayerScreen() {
    const data = osiLayers[currentLayer];
    titleEl.innerText = data.title;
    scenarioTitleEl.innerText = data.scenarioTitle;
    descEl.innerText = data.desc;
    detailEl.innerHTML = data.detail;
    protocolEl.innerHTML = data.protocol;
    nextBtn.innerText = data.nextBtn;
    
    // Ana menüdeki yazıyı da bulunduğumuz katmana göre güncelliyoruz
    dashboardTitle.innerText = data.title;
    dashboardDesc.innerText = "Bu katmanın eğitimine başlayabilir veya doğrudan boss fight ile atlayabilirsin.";
}

startBtn.onclick = function() {
    dashboardCard.style.display = "none";
    educationPanel.style.display = "block";
    updateLayerScreen(); 
}

backToDashBtn.onclick = function() {
    educationPanel.style.display = "none";
    dashboardCard.style.display = "block";
}

nextBtn.onclick = function() {
    if (currentLayer < osiLayers.length - 1) {
        currentLayer++; 
        updateLayerScreen(); 
    } else {
        alert("Tebrikler! Tüm katmanları bitirdin. (Genel test ekranı eklenecek)");
        currentLayer = 0; 
        updateLayerScreen();
        educationPanel.style.display = "none";
        dashboardCard.style.display = "block";
    }
}

// ==========================================
// 6. DİNAMİK BOSS FIGHT MANTIĞI
// ==========================================
// ==========================================
// 6. DİNAMİK BOSS FIGHT MANTIĞI
// ==========================================
skipBtn.onclick = function() {
    const currentQ = bossQuestions[currentLayer];
    
    // YENİ EKLENEN KISIM: Başlığı bulunduğumuz katmana göre otomatik değiştiriyoruz
    const bossTitle = document.querySelector(".modal-content h2");
    bossTitle.innerText = "BOSS FIGHT: " + osiLayers[currentLayer].title;

    questionBox.innerHTML = `
        <p><strong>Soru:</strong> ${currentQ.question}</p>
        <button class="answer-btn" onclick="checkAnswer(0)">${currentQ.options[0]}</button>
        <button class="answer-btn" onclick="checkAnswer(1)">${currentQ.options[1]}</button>
        <button class="answer-btn" onclick="checkAnswer(2)">${currentQ.options[2]}</button>
    `;
    feedbackText.innerText = ""; 
    modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// CEVAP KONTROLÜ (Doğruysa sonraki katmana geçirir)
window.checkAnswer = function(selectedIndex) {
    const currentQ = bossQuestions[currentLayer];
    
    if (selectedIndex === currentQ.correctIndex) {
        feedbackText.innerText = "SİSTEM MESAJI: Başarılı! Doğru bildin, bu katmanı atlıyorsun...";
        feedbackText.style.color = "#2ea043";
        
        setTimeout(() => {
            modal.style.display = "none";
            if (currentLayer < osiLayers.length - 1) {
                currentLayer++;
                updateLayerScreen();
            } else {
                alert("Tüm katmanları başarıyla atladın!");
                currentLayer = 0;
                updateLayerScreen();
            }
        }, 1500);
        
    } else {
        feedbackText.innerText = "SİSTEM MESAJI: Yanlış cevap! Altyapın yetersiz. Eğitime yönlendiriliyorsun.";
        feedbackText.style.color = "#f85149";
        
        setTimeout(() => {
            modal.style.display = "none";
            startBtn.click(); // Kullanıcıyı zorla eğitim paneline atar
        }, 1500);
    }
}

// ==========================================
// 7. YAPAY ZEKA SOHBET ARAYÜZÜ
// ==========================================
const chatBtn = document.getElementById("ai-chat-btn");
const chatWindow = document.getElementById("ai-chat-window");
const closeChatBtn = document.getElementById("close-chat-btn");
const sendMsgBtn = document.getElementById("send-msg-btn");
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

chatBtn.onclick = () => { chatWindow.style.display = chatWindow.style.display === "none" ? "flex" : "none"; };
closeChatBtn.onclick = () => { chatWindow.style.display = "none"; };

function sendMessage() {
    const userText = chatInput.value.trim();
    if (userText === "") return;

    const userMsgDiv = document.createElement("div");
    userMsgDiv.className = "message user-message";
    userMsgDiv.innerText = userText;
    chatBody.appendChild(userMsgDiv);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        const aiMsgDiv = document.createElement("div");
        aiMsgDiv.className = "message ai-message";
        aiMsgDiv.innerText = "Sistem Mesajı: Arayüz testi başarılı. Python entegrasyonu yapılınca sorularını gerçek yapay zekaya ileteceğim!";
        chatBody.appendChild(aiMsgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

sendMsgBtn.onclick = sendMessage;
chatInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});