/* =========================================
   DATA SKILL KEPEMIMPINAN
========================================= */

const skills = [

    ["01","Komunikasi",
        "Menyampaikan pesan secara jelas, singkat, sopan, dan terarah."],

    ["02","Mendengar Aktif",
        "Fokus memahami pesan sebelum memberikan respons."],

    ["03","Public Speaking",
        "Berlatih berbicara secara terstruktur di depan regu."],

    ["04","Empati",
        "Memahami sudut pandang dan kebutuhan anggota."],

    ["05","Kerja Tim",
        "Mengutamakan tujuan bersama dan saling membantu."],

    ["06","Delegasi",
        "Memberikan tugas sesuai kemampuan dengan instruksi jelas."],

    ["07","Manajemen Waktu",
        "Menentukan prioritas dan menghindari penundaan."],

    ["08","Problem Solving",
        "Mencari akar masalah dan alternatif solusi."],

    ["09","Pengambilan Keputusan",
        "Memilih tindakan berdasarkan fakta, nilai, dan risiko."],

    ["10","Manajemen Konflik",
        "Menyelesaikan perbedaan secara tenang dan adil."],

    ["11","Perencanaan",
        "Mengubah tujuan menjadi langkah kerja yang terukur."],

    ["12","Evaluasi",
        "Menilai hasil untuk menemukan perbaikan berikutnya."],

    ["13","Inisiatif",
        "Peka terhadap kebutuhan tanpa selalu menunggu perintah."],

    ["14","Adaptasi",
        "Menyesuaikan strategi ketika situasi berubah."],

    ["15","Kreativitas",
        "Menghasilkan cara baru yang relevan dan aman."],

    ["16","Disiplin",
        "Konsisten menjalankan aturan dan kesepakatan."],

    ["17","Integritas",
        "Jujur, konsisten, dan dapat dipercaya."],

    ["18","Tanggung Jawab",
        "Berani memiliki tugas, hasil, dan konsekuensinya."],

    ["19","Motivasi",
        "Mendorong semangat tim dengan tujuan dan apresiasi."],

    ["20","Feedback",
        "Memberikan masukan spesifik yang membantu berkembang."],

    ["21","Membangun Kepercayaan",
        "Menepati janji dan menjaga konsistensi perilaku."],

    ["22","Negosiasi",
        "Mencari kesepakatan yang adil bagi pihak terkait."],

    ["23","Berpikir Kritis",
        "Memeriksa informasi sebelum membuat kesimpulan."],

    ["24","Manajemen Risiko",
        "Mengenali potensi masalah dan menyiapkan mitigasi."],

    ["25","Fasilitasi",
        "Membantu diskusi agar semua anggota dapat berkontribusi."],

    ["26","Keteladanan",
        "Menunjukkan standar perilaku melalui tindakan."],

    ["27","Kerendahan Hati",
        "Mau belajar, mengakui kekurangan, dan menerima masukan."],

    ["28","Ketegasan",
        "Menyampaikan batas dan keputusan dengan hormat."],

    ["29","Orientasi Pelayanan",
        "Menggunakan peran untuk membantu tim mencapai tujuan."],

    ["30","Refleksi Diri",
        "Mengevaluasi sikap, keputusan, dan dampak secara rutin."]
];


/* =========================================
   MENAMPILKAN 30 SKILL
========================================= */

const skillsGrid = document.getElementById("skillsGrid");

skillsGrid.innerHTML = skills.map(skill => {

    return `
        <article class="skill">

            <span class="skill-num">
                ${skill[0]}
            </span>

            <h3>
                ${skill[1]}
            </h3>

            <p>
                ${skill[2]}
            </p>

        </article>
    `;

}).join("");



/* =========================================
   TAB MATERI
========================================= */

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabPanels =
    document.querySelectorAll(".tab-panel");


tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.tab;


        tabButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        tabPanels.forEach(panel => {

            panel.classList.remove("active");

        });


        button.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});



/* =========================================
   LEADERSHIP CHALLENGE
========================================= */

const challengeButtons =
    document.querySelectorAll(
        ".challenge-options button"
    );

const challengeFeedback =
    document.getElementById(
        "challengeFeedback"
    );


challengeButtons.forEach(button => {

    button.addEventListener("click", () => {

        challengeButtons.forEach(btn => {

            btn.classList.remove(
                "correct",
                "wrong"
            );

        });


        if(button.dataset.correct === "true"){

            button.classList.add("correct");

            challengeFeedback.textContent =
                "✓ Tepat! Pemimpin perlu menenangkan situasi, mencari hambatan, lalu mengatur prioritas dan pembagian tugas.";

        }else{

            button.classList.add("wrong");

            challengeFeedback.textContent =
                "✗ Belum tepat. Hindari reaksi emosional atau mengambil alih semua pekerjaan. Coba pikirkan cara yang membuat seluruh tim tetap berfungsi.";

        }

    });

});



/* =========================================
   DATA QUIZ
========================================= */

const questions = [

[
"Dasar",
"Kepemimpinan paling tepat dipahami sebagai kemampuan untuk...",
[
"Mendominasi anggota",
"Menggerakkan diri dan orang lain menuju tujuan bersama secara bertanggung jawab",
"Mendapat jabatan tertinggi",
"Selalu memberi perintah"
],
1
],

[
"Karakter",
"Contoh integritas dalam kegiatan Pramuka adalah...",
[
"Mengubah laporan agar terlihat bagus",
"Jujur tentang hasil kegiatan meskipun ada kekurangan",
"Menyalahkan anggota lain",
"Menutupi kesalahan"
],
1
],

[
"Komunikasi",
"Ketika memberi instruksi, pemimpin sebaiknya...",
[
"Menggunakan istilah yang membingungkan",
"Berbicara secepat mungkin",
"Menyampaikan pesan dengan jelas dan memastikan anggota memahami",
"Tidak memberi kesempatan bertanya"
],
2
],

[
"Tim",
"Delegasi yang baik berarti...",
[
"Melempar semua pekerjaan",
"Memberi tugas jelas sesuai kemampuan dan tetap memantau",
"Tidak mau ikut bekerja",
"Memberi tugas tanpa menjelaskan tujuan"
],
1
],

[
"Keputusan",
"Langkah awal yang tepat ketika menghadapi masalah adalah...",
[
"Panik",
"Menyalahkan orang",
"Mendefinisikan masalah dan mengumpulkan fakta relevan",
"Langsung menghukum"
],
2
],

[
"Konflik",
"Saat dua anggota berbeda pendapat, pemimpin sebaiknya...",
[
"Memihak teman dekat",
"Mendengarkan kedua sisi dan mencari solusi bersama",
"Mempermalukan salah satu pihak",
"Mengabaikan konflik"
],
1
],

[
"Etika",
"Wewenang pemimpin seharusnya digunakan untuk...",
[
"Menekan anggota",
"Mencari keuntungan pribadi",
"Melayani tujuan kelompok secara bertanggung jawab",
"Membuktikan siapa yang paling kuat"
],
2
],

[
"Disiplin",
"Disiplin paling terlihat dari...",
[
"Banyak bicara",
"Konsisten menjalankan kesepakatan dan tanggung jawab",
"Datang hanya saat diperintah",
"Menghindari tugas sulit"
],
1
],

[
"Empati",
"Mendengarkan aktif berarti...",
[
"Menunggu giliran bicara sambil bermain ponsel",
"Berusaha memahami pesan dan perasaan sebelum merespons",
"Selalu setuju",
"Memotong pembicaraan"
],
1
],

[
"Visi",
"Hubungan visi dan rencana yang tepat adalah...",
[
"Visi menentukan arah, rencana menjelaskan langkah menuju tujuan",
"Visi dan rencana sama saja",
"Rencana tidak memerlukan tujuan",
"Visi hanya untuk ketua"
],
0
],

[
"Keteladanan",
"Mengapa keteladanan penting?",
[
"Anggota cenderung belajar dari perilaku nyata pemimpin",
"Agar pemimpin tidak perlu bekerja",
"Agar semua takut",
"Supaya tugas bisa diberikan ke orang lain"
],
0
],

[
"Evaluasi",
"Pertanyaan evaluasi yang baik adalah...",
[
"Siapa yang harus disalahkan?",
"Bagaimana agar tidak perlu mengulang kegiatan?",
"Apa yang berhasil, apa yang kurang, dan apa yang diperbaiki?",
"Mengapa semuanya salah?"
],
2
],

[
"Inisiatif",
"Contoh inisiatif adalah...",
[
"Menunggu instruksi untuk hal sederhana",
"Melihat kebutuhan regu dan menawarkan bantuan yang sesuai",
"Mengambil alih semua tugas",
"Meninggalkan tugas"
],
1
],

[
"Risiko",
"Manajemen risiko bertujuan untuk...",
[
"Menghilangkan semua kegiatan",
"Mengenali bahaya dan mengurangi kemungkinan atau dampaknya",
"Membuat anggota takut",
"Menghindari keputusan"
],
1
],

[
"Motivasi",
"Cara memotivasi tim yang sehat adalah...",
[
"Mengancam anggota",
"Memberi tujuan yang jelas, apresiasi, dan dukungan",
"Membandingkan anggota",
"Memaksa semua sama"
],
1
],

[
"Feedback",
"Umpan balik yang konstruktif sebaiknya...",
[
"Menyerang kepribadian",
"Spesifik pada tindakan dan memberi arah perbaikan",
"Diberikan dengan ejekan",
"Disampaikan lewat gosip"
],
1
],

[
"Adaptasi",
"Jika rencana kegiatan berubah karena kondisi lingkungan, pemimpin sebaiknya...",
[
"Tetap memaksakan rencana",
"Mengevaluasi situasi dan menyesuaikan rencana secara aman",
"Membubarkan tim tanpa penjelasan",
"Menyalahkan keadaan"
],
1
],

[
"Kerendahan Hati",
"Pemimpin yang rendah hati akan...",
[
"Menolak semua masukan",
"Mengakui kekurangan dan mau belajar",
"Tidak pernah mengambil keputusan",
"Membiarkan orang lain memimpin"
],
1
],

[
"Pelayanan",
"Orientasi pelayanan berarti...",
[
"Menggunakan posisi untuk membantu tim mencapai tujuan",
"Selalu mengalah",
"Mengerjakan semua tugas sendiri",
"Tidak memiliki pendapat"
],
0
],

[
"Refleksi",
"Manfaat refleksi diri bagi pemimpin adalah...",
[
"Membuktikan diri selalu benar",
"Mengenali pola perilaku dan menentukan perbaikan",
"Menghindari evaluasi",
"Menyalahkan keadaan"
],
1
]

];



/* =========================================
   QUIZ ENGINE
========================================= */

let currentQuestion = 0;

let selectedAnswers =
    Array(questions.length).fill(null);


const questionText =
    document.getElementById(
        "questionText"
    );

const answersContainer =
    document.getElementById(
        "answers"
    );

const questionCount =
    document.getElementById(
        "questionCount"
    );

const questionCategory =
    document.getElementById(
        "questionCategory"
    );

const quizProgress =
    document.getElementById(
        "quizProgress"
    );

const scoreText =
    document.getElementById(
        "scoreText"
    );

const quizResult =
    document.getElementById(
        "quizResult"
    );



function renderQuiz(){

    const question =
        questions[currentQuestion];


    questionText.textContent =
        question[1];


    questionCount.textContent =
        `Soal ${currentQuestion + 1} / ${questions.length}`;


    questionCategory.textContent =
        question[0];


    quizProgress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    answersContainer.innerHTML =
        question[2]
        .map((answer,index)=>{

            return `
                <button
                    class="answer ${
                        selectedAnswers[currentQuestion] === index
                        ? "selected"
                        : ""
                    }"
                    data-index="${index}"
                >
                    ${String.fromCharCode(65 + index)}.
                    ${answer}
                </button>
            `;

        })
        .join("");


    document
        .querySelectorAll(".answer")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectedAnswers[
                        currentQuestion
                    ] =
                        Number(
                            button.dataset.index
                        );

                    renderQuiz();

                }
            );

        });


    document.getElementById(
        "prevBtn"
    ).disabled =
        currentQuestion === 0;


    document.getElementById(
        "nextBtn"
    ).textContent =
        currentQuestion === questions.length - 1
        ? "Lihat Hasil →"
        : "Berikutnya →";


    updateScore();

}



function updateScore(){

    let correct = 0;

    selectedAnswers.forEach(
        (answer,index) => {

            if(
                answer !== null &&
                answer === questions[index][3]
            ){

                correct++;

            }

        }
    );


    const percentage =
        Math.round(
            (correct / questions.length) * 100
        );


    scoreText.textContent =
        `${percentage}%`;


    const completed =
        selectedAnswers.filter(
            answer => answer !== null
        ).length;


    if(
        completed === questions.length
    ){

        let message = "";

        if(percentage >= 90){

            message =
                "🏆 Luar biasa! Kemampuan leadership kamu sangat baik.";

        }else if(percentage >= 75){

            message =
                "⭐ Bagus! Pemahaman leadership kamu sudah kuat.";

        }else if(percentage >= 60){

            message =
                "👍 Cukup baik! Terus latih kemampuan kepemimpinanmu.";

        }else{

            message =
                "📚 Tetap semangat! Pelajari kembali materi dan coba lagi.";

        }


        quizResult.textContent =
            `${message} Skor: ${correct}/${questions.length}.`;

    }

}



document.getElementById(
    "nextBtn"
).addEventListener(
    "click",
    () => {

        if(
            currentQuestion <
            questions.length - 1
        ){

            currentQuestion++;

            renderQuiz();

        }else{

            updateScore();

            quizResult.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        }

    }
);



document.getElementById(
    "prevBtn"
).addEventListener(
    "click",
    () => {

        if(
            currentQuestion > 0
        ){

            currentQuestion--;

            renderQuiz();

        }

    }
);



renderQuiz();



/* =========================================
   DARK MODE
========================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const darkMode =
            document.body.classList.contains(
                "dark"
            );


        themeToggle.textContent =
            darkMode
            ? "☀"
            : "☾";


        localStorage.setItem(
            "pramukaTheme",
            darkMode
            ? "dark"
            : "light"
        );

    }
);


if(
    localStorage.getItem(
        "pramukaTheme"
    ) === "dark"
){

    document.body.classList.add(
        "dark"
    );

    themeToggle.textContent =
        "☀";

}



/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const mainNav =
    document.getElementById(
        "mainNav"
    );


menuToggle.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "open"
        );

    }
);


mainNav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

            }
        );

    });



/* =========================================
   REFLEKSI
========================================= */

const reflectionText =
    document.getElementById(
        "reflectionText"
    );

const savedNote =
    document.getElementById(
        "savedNote"
    );


const savedReflection =
    localStorage.getItem(
        "pramukaReflection"
    );


if(savedReflection){

    reflectionText.value =
        savedReflection;

}



document.getElementById(
    "saveReflection"
).addEventListener(
    "click",
    () => {

        const text =
            reflectionText.value.trim();


        if(!text){

            savedNote.textContent =
                "⚠️ Tulis refleksi terlebih dahulu.";

            return;

        }


        localStorage.setItem(
            "pramukaReflection",
            text
        );


        savedNote.textContent =
            "✓ Refleksi berhasil disimpan di perangkat ini.";

    }
);



/* =========================================
   SCROLL PROGRESS
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;


        const scroll =
            window.scrollY;


        const percentage =
            documentHeight > 0
            ? (scroll / documentHeight) * 100
            : 0;


        document.getElementById(
            "progressBar"
        ).style.width =
            `${percentage}%`;


        document.getElementById(
            "backTop"
        ).classList.toggle(
            "show",
            scroll > 500
        );

    }
);



/* =========================================
   BACK TO TOP
========================================= */

document.getElementById(
    "backTop"
).addEventListener(
    "click",
    () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }
);