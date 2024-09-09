let SurahsContainer = document.querySelector('.surahsContainer');
getsurahs()
function getsurahs(){

    fetch("http://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data=>{
        let surahs = data.data.surahs.references;

       let numbersurahs = 114;
       SurahsContainer.innerHTML +="";
       for (let i = 0; i< numbersurahs; i++ ){





        SurahsContainer.innerHTML +=`
        <div class="surah">
        <p>${surahs[i].name}</p>
        <p>${surahs[i].englishName}</p> 
       </div>
       
       `
       }


       let SurahsTitlels = document.querySelectorAll('.surah');
       let popup = document.querySelector('.surha-popup'),
       AyatContainer = document.querySelector('.ayat');

       SurahsTitlels.forEach((title,index) =>{

       
        title.addEventListener('click', ()=>{

            fetch(`http://api.alquran.cloud/v1/surah/${index + 1}`)
             .then(response => response .json())
             .then(data=>{

                AyatContainer.innerHTML = "";

                let Ayat = data.data.ayahs;
                Ayat.forEach(aya=>{


                    popup.classList.add('active');

                    AyatContainer.innerHTML+=`
                    
                    
                    <P>( ${aya.numberInSurah}) - ${aya.text}</p>
                    
                    
                    
                    `
                })
             })


        })



       })

       let closePoupup = document.querySelector('.close-popup');

       closePoupup.addEventListener('click', ()=>{


        popup.classList.remove('active');
       })
    
    })
}



















document.addEventListener('DOMContentLoaded', () => {
    const hadiths = [
        "قال رسول الله ﷺ: «إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى»",
        "قال رسول الله ﷺ: «مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ»",
        "قال رسول الله ﷺ: «الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ»"
    ];

    const hadithContainer = document.getElementById('hadith-container');

    // دالة لإضافة حديث إلى الصفحة
    function addHadith(text) {
        const hadithDiv = document.createElement('div');
        hadithDiv.className = 'hadith';
        hadithDiv.textContent = text;
        hadithContainer.appendChild(hadithDiv);
    }

    // إضافة الأحاديث الموجودة في المصفوفة عند التحميل
    hadiths.forEach(hadith => addHadith(hadith));

    // إضافة زر لإضافة حديث جديد
    document.getElementById('addHadithButton').addEventListener('click', () => {
        const newHadith = prompt('أدخل نص الحديث الجديد:');
        if (newHadith) {
            addHadith(newHadith);
        }
    });
});





























// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelectorAll('.slide');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');
//     const counter = document.getElementById('counter');
//     let currentSlide = 0;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? 'flex' : 'none';
//         });
//         counter.textContent = `${index + 1} / ${slides.length}`;
//     }

//     prevButton.addEventListener('click', () => {
//         currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
//         showSlide(currentSlide);
//     });

//     nextButton.addEventListener('click', () => {
//         currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
//         showSlide(currentSlide);
//     });

//     showSlide(currentSlide);
// });














// document.addEventListener('DOMContentLoaded', function() {
//     const prayerTimes = {
//         Fajr: '04:30 AM',
//         Dhuhr: '12:15 PM',
//         Asr: '03:45 PM',
//         Maghrib: '07:20 PM',
//         Isha: '08:50 PM'
//     };

//     const prayerTimesContainer = document.getElementById('prayer-times');

//     for (const [prayer, time] of Object.entries(prayerTimes)) {
//         const row = document.createElement('tr');
//         const prayerCell = document.createElement('td');
//         const timeCell = document.createElement('td');

//         prayerCell.textContent = prayer;
//         timeCell.textContent = time;

//         row.appendChild(prayerCell);
//         row.appendChild(timeCell);
//         prayerTimesContainer.appendChild(row);
//     }
// });







// document.getElementById('displayButton').addEventListener('click', function() {
//     var content = document.getElementById('content');
//     if (content.style.display === 'none') {
//         content.style.display = 'block';
//     } else {
//         content.style.display = 'none';
//     }
// });


































// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
    
//     // يمكنك هنا إضافة الكود اللازم لإرسال البيانات إلى الخادم (Server) باستخدام AJAX مثلًا
//     // لكن سنقوم بعرض رسالة تأكيد فقط لأغراض هذا المثال
    
//     document.getElementById('responseMessage').innerText = 'تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا.';
    
//     // إعادة تعيين النموذج
//     document.getElementById('contactForm').reset();
// });




// document.getElementById('toggleMode').addEventListener('click', function() {
//     if (document.body.classList.contains('day')) {
//         document.body.classList.remove('day');
//         document.body.classList.add('night');
//     } else {
//         document.body.classList.remove('night');
//         document.body.classList.add('day');
//     }
// });

// // تعيين الوضع الافتراضي ليكون النهار
// document.body.classList.add('day');














// // script.js
// document.addEventListener('DOMContentLoaded', (event) => {
//     const toggleButton = document.getElementById('toggleButton');
//     const body = document.body;

//     toggleButton.addEventListener('click', () => {
//         if (body.classList.contains('day-mode')) {
//             body.classList.remove('day-mode');
//             body.classList.add('night-mode');
//         } else {
//             body.classList.remove('night-mode');
//             body.classList.add('day-mode');
//         }
//     });

//     // تحديد الوضع الافتراضي ليكون النهاري
//     body.classList.add('day-mode');
// });



















document.addEventListener('DOMContentLoaded', () => {
    const times = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const adhanSound = document.getElementById('adhan-sound');
    const adhanSelect = document.getElementById('adhan-select');

    // تحميل الأوقات المحفوظة
    times.forEach(time => {
        const savedTime = localStorage.getItem(`${time}-time`);
        if (savedTime) {
            document.getElementById(`${time}-time`).value = savedTime;
        }
    });

    // حفظ الأوقات واختيار المؤذن عند الضغط على الزر
    document.getElementById('save-times').addEventListener('click', () => {
        times.forEach(time => {
            const timeValue = document.getElementById(`${time}-time`).value;
            localStorage.setItem(`${time}-time`, timeValue);
        });
        localStorage.setItem('selected-adhan', adhanSelect.value);
        alert('تم حفظ أوقات الصلاة واختيار المؤذن بنجاح!');
    });

    // تحميل اختيار المؤذن المحفوظ
    const savedAdhan = localStorage.getItem('selected-adhan');
    if (savedAdhan) {
        adhanSelect.value = savedAdhan;
        adhanSound.src = savedAdhan;
    }

    // تشغيل صوت المؤذن عند الضغط على الخيار داخل القائمة
    adhanSelect.addEventListener('click', () => {
        playSampleAdhan();
    });

    // تغيير المؤذن عند تغيير الاختيار وتشغيل الصوت لتجربته
    adhanSelect.addEventListener('change', () => {
        adhanSound.src = adhanSelect.value;
        playSampleAdhan();
    });

    // دالة لتشغيل صوت الأذان للتجربة
    function playSampleAdhan() {
        adhanSound.currentTime = 0; // إعادة الصوت للبداية
        adhanSound.play();
    }

    // دالة لتحديث الوقت الحالي والتحقق من الأوقات
    setInterval(checkPrayerTimes, 60000); // تحقق كل دقيقة

    function checkPrayerTimes() {
        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        times.forEach(time => {
            const prayerTime = document.getElementById(`${time}-time`).value;
            if (prayerTime === currentTime) {
                playAdhan();
            }
        });
    }

    // تشغيل صوت الأذان عند وقت الصلاة
    function playAdhan() {
        adhanSound.play();
    }

    // إيقاف الأذان عند الضغط على الزر
    document.getElementById('stop-adhan').addEventListener('click', () => {
        adhanSound.pause();
        adhanSound.currentTime = 0; // إعادة الصوت للبداية
    });
});









































let count = 0;
const dhikrText = document.getElementById('dhikr-text');
const dhikrCounter = document.getElementById('dhikr-counter');
const dhikrSelect = document.getElementById('dhikr-select');

function updateDhikr() {
    dhikrText.textContent = dhikrSelect.value;
}

function increaseCount() {
    count++;
    dhikrCounter.textContent = count;
    updateDhikr();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        dhikrCounter.textContent = count;
        updateDhikr();
    }
}

function resetCount() {
    count = 0;
    dhikrCounter.textContent = count;
    updateDhikr();
}

// Initial setup
updateDhikr();


















