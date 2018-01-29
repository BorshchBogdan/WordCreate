var box = document.querySelector(".box");
var surname = document.querySelector(".surname");
var origin = document.querySelector(".origin");
var way = document.querySelector(".way");
var statistic = document.querySelector(".statistic");
var baza = document.querySelector(".baza");
var similar = document.querySelector(".similar");
var text = document.querySelector(".text");
var search = document.querySelector(".search");
var toponim = document.querySelector(".toponim");

var textToponim = document.querySelector(".textToponim");
var searchToponim = document.querySelector(".searchToponim");
var toponimTable = document.querySelector(".toponimTable");
var tableToponim = document.querySelector(".tableToponim");

var table = document.querySelector(".table");
var error = document.querySelector(".error");

var boxToponim = document.querySelector(".boxToponim");
var surnameToponim = document.querySelector(".surnameToponim");
var originToponim = document.querySelector(".originToponim");
var wayToponim = document.querySelector(".wayToponim");
var similarToponim = document.querySelector(".similarToponim");

searchToponim.addEventListener("click", function () {
    if (textToponim.value == "Чорна") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧОРНА</h2><br><br> гідронім (потамонім),  оронім, спелеонім</b>";
        originToponim.innerHTML = "<b><h3><h3>ПОЯСНЕННЯ</h3><br><br>Чорна— </b>1) річки (18), потоки (27); 2) карст, печера в Гірсько-Кримській карст, обл., на Ай-Петринській яйлі; 3)  означення в складених гідронімах (ЗО), оронімах (22), відор. назві бот. заказника держ. значення Чорна Гора у Виноградів, p-ні Закарпат. обл. тощо.<br><b style='font-size:11px;'>— Лучик В. В. Етимологічний словник топонімів України. – К. : ВЦ 'Академія', 2014. – 544 с.</b> ";
        wayToponim.innerHTML = "<b><h3><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Чорн-а</b><br> морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3><h3>МОДЕЛЬ</h3><br> Руда , Рижувата , Жовта , Біла</b>";

    } else if (textToponim.value == "Чорний") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧОРНИЙ</h2> <br><br> гідронім (потамонім),  оронім, спелеонім </b>";
        originToponim.innerHTML = "<b><h3><h3>ПОЯСНЕННЯ</h3><br><br>Чорний— </b>1) річки (18), потоки (27); 2) карст, печера в Гірсько-Кримській карст, обл., на Ай-Петринській яйлі; 3)  означення в складених гідронімах (ЗО), оронімах (22), відор. назві бот. заказника держ. значення Чорна Гора у Виноградів, p-ні Закарпат. обл. тощо. <br><b style='font-size:11px;'>— Лучик В. В. Етимологічний словник топонімів України. – К. : ВЦ 'Академія', 2014. – 544 с.</b> ";
        wayToponim.innerHTML = "<b><h3><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Чорн-ий </b><br> морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3><h3>МОДЕЛЬ</h3><br> Білий  </b>";

    } else if (textToponim.value == "Чорниш") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧОРНИШ </h2> <br><br> гідронім (лімнонім)  </b>";
        originToponim.innerHTML = "<b><h3><h3>ПОЯСНЕННЯ</h3><br><br>Чорниш — </b>заплавне оз. на лівому бер. Десни, Мен. р-н Чернігів, обл.. <br><b style='font-size:11px;'>— Лучик В. В. Етимологічний словник топонімів України. – К. : ВЦ 'Академія', 2014. – 544 с.</b> ";
        wayToponim.innerHTML = "<b><h3><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Чорн-иш </b><br> морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3><h3>МОДЕЛЬ</h3><br> Білий  </b>";

    } else if (textToponim.value == "Чорногора") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧОРНОГОРА</h2>  <br><br> гідронім (лімнонім)  </b>";
        originToponim.innerHTML = "<b><h3><h3>ПОЯСНЕННЯ</h3><br><br>Чорногора   — </b>1) найвищий гірський масив Укр. Карпат, у межах Закарпат. та Івано-Франків. обл.; 2) окремі гори (4) в Івано-Франків, обл. .</b> ";
        wayToponim.innerHTML = "<b><h3><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Чорн-о-гора</b><br>основоскладання.";
        similarToponim.innerHTML = "<b><h3><h3>МОДЕЛЬ</h3><br> Білосток, Білокурякине, Червоноград, Білоус   </b>";

    } else if (textToponim.value == "Чорноморське") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧОРНОМОРСЬКЕ</h2>   <br><br> ойконім</b>";
        originToponim.innerHTML = "<b><h3><h3>ПОЯСНЕННЯ</h3><br><br>Чорноморське — </b>1) с-ща міськ. типу: 1) у Криму; з XVI ст. до 1944 р. — Ак-Мечеть, Черноморское, до 1945 — Ак-Мечеть; 2) Комінтерн, р-н. Одес. обл.; засн. у 2-й пол. XIX ст., до 1945 — Чабанка, 1945—1988 — Гвардійське, Слоб. Немецкая (1826), Чебанка (1855), хут. Немецкая балка (Чабанка, Графская) (1859). </b> ";
        wayToponim.innerHTML = "<b><h3><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Чорномор-ськ-е</b><br>морфологічний – суфіксація, суфікс  - ськ-е.";
        similarToponim.innerHTML = "<b><h3><h3>МОДЕЛЬ</h3><br>   </b>";

    } else if (textToponim.value == "Чорнява") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧОРНЯВА  </h2>  <br><br>гідронім (потамонім) </b>";
        originToponim.innerHTML = "<b><h3><h3>ПОЯСНЕННЯ</h3><br><br>Чорнява  — </b>1) річки: 1) л. Пруту л. Дунаю в Івано-Франків, обл; Чорнява (1957), Czerniawa (1880); 2) пр. Дністра в Івано-Франків. обл.; Czerniawa (1881).  </b> ";
        wayToponim.innerHTML = "<b><h3><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Чорн-ява</b><br>морфологічний – суфіксація, суфікс  - ава.";
        similarToponim.innerHTML = "<b><h3><h3>МОДЕЛЬ</h3><br>   </b>";

    } else if (textToponim.value == "Червоне") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧЕРВОНЕ</h2>   <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Червоне  — </b>с-ще міськ. типу: 1) Андрушів. р-н Житомир, обл.; відоме з 1737 р.; 2) Глухів р-н Сум. обл.; відоме з 1615 р., до 1957 — Есмань. Житомир, ойконім виник унаслідок субстантивації та онімізації форми сер. роду прикм. червоний, що вказував на колір ґрунту; пор. рр. Червона Руда і Червднка в Житомир, обл.. </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Червон-е</b><br>морфологічний – суфіксація, суфікс  - е.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Зелене , Срібне </b>";

    } else if (textToponim.value == "Червоновільський") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧЕРВОНОВІЛЬСЬКИЙ </h2>   <br><br>оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Червоновільський   — </b>гід рол. заказник держ. значення, Новгород-Волинськ. р-н Житомир, обл..  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br> Червоновіль-ськ-ий </b><br>морфологічний – суфіксація, суфікс  - ськ-ий.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білоріченський  </b>";

    } else if (textToponim.value == "Червоноград") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧЕРВОНОГРАД </h2>    <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Червоноград    — </b>місто, Львів, обл..  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Червон-о-град </b><br>основоскладання";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білосток, Білокурякине, Чорногора, Білоус   </b>";

    } else if (textToponim.value == "Червонозаводське") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЧЕРВОНОЗАВОДСЬКЕ </h2>     <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Червонозаводське     — </b>місто, Лохвиц. р-н Полтав. обл.; засн. 1928 р., Червонозаводское (1981).  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Червонозавод-ськ-е</b><br>морфологічний – суфіксація, суфікс  - ськ-е.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Зеленогірське , Червонозаводське   </b>";

    } else if (textToponim.value == "Синиця") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>СИНИЦЯ</h2>  <br><br>гідронім (потамонім) </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Синиця  — </b>річки: 1) л. Лд. Бугу (1967); Синица (1917), Sinica (1889); пор. cc. Синиця й Синицівка на річці; 2) п. Росі п. Дніпра; Sinica (1746), Sieni- ca (1789), Синица (1864), Синйця (1974); 3) потік, п. Чорного Черемошу л. Черемошу п. Пруту л. Дунаю; Synucia (1950), Синица (1979). </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Син-иця</b><br>морфологічний – суфіксація, суфікс  - иц(я).";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Рудниця , Зелениця </b>";

    } else if (textToponim.value == "Синя") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>СИНЯ</h2>  <br><br>оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Синя — </b>вершина на зх. Приазовської височини, у межах Запоріз. обл., на пн. від верхів’я р. Токмачки; Токмак-Могила .  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Син-я </b><br>морфологічний – суфіксація, суфікс  -я.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> </b>";
    } else if (textToponim.value == "Синяк") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>СИНЯК</h2>  <br><br>оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Синяк — </b>гірський масив Вулканічного хребта Укр. Карпат, Закарпат. обл.. </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Син-як  </b><br>морфологічний – суфіксація, суфікс  - як.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> </b>";
    } else if (textToponim.value == "Синевир") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>СИНЕВИР</h2>  <br><br>оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Синевир - </b>1) оз. завального походження, побл. с. Синевир Міжгір. p-ну Закар- пат. обл.; місц. Морське око; 2) прир. нац. парк у центр, частині Укр. Карпат, у верхів’ї Тереблі та Ріки, у Міжгір. р-ні Закарпат. обл..  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Синевир  </b><br>Композит на основі «вир» та означення «синій».";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> </b>";
    } else if (textToponim.value == "Зелене") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЗЕЛЕНЕ</h2>   <br><br>оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Зелене  - </b>с-ще міськ. типу, Дзерджинська р / р м. Кривого Рога Дніпропетров. обл. . </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Зелен-е   </b><br>морфологічний – суфіксація, суфікс  - е.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> Срібне , Червоне </b>";
    } else if (textToponim.value == "Зелениця") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЗЕЛЕНИЦЯ</h2> <br><br>оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Зелениця - </b>річки: 1) п. Бистриці-Надвірнянської п. Бистриці п. Дністра в Іва- но-Франків. обл. (1957); Зеленицау Zielenica (1917), Zielonica (1915), Zelenycje (1880); 2) у смт Верховина Івано-Франків. обл..  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Зелен-иц-я </b><br>морфологічний – суфіксація, суфікс  - иц(я).";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> Рудниця , Синиця </b>";
    } else if (textToponim.value == "Зеленївка") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЗЕЛЕНЇВКА</h2>  <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Зеленївка  - </b>с-ще міськ. типу, Дніпровська р / р м. Херсона Херсон, обл.; засн. в 2-й пол. XIX ст.. </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Зелен-ївка </b><br>морфологічний – суфіксація, суфікс  - івка.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> Білогорівка </b>";
    } else if (textToponim.value == "Зеленогірське") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЗЕЛЕНОГІРСЬКЕ</h2>   <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Зеленогірське - </b>— с-ще міськ. типу, Любошів. р-н Одес. обл.; засн. 1957 р., Зеленогірськ; пор. Зеленогдрск у Ленінград, обл. Росії. </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Зеленогір-ськ-е </b><br>морфологічний – суфіксація, суфікс  - ськ-е.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>   </b>";
    } else if (textToponim.value == "Золота") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЗОЛОТА </h2>  <br><br>гідронім (потамонім) </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Золота- </b>1) річки в бас. Дніпра (3), Вісли, Сіверськ. Дінця; 2) балки (2) в бас. Дніпра і Сіверськ. Дінця; 3) потік, Закарпат. обл..  </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Золота </b><br>морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Руда , Рижувата , Біла  , Чорна , Жовта</b>";
    } else if (textToponim.value == "Золотуха ") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЗОЛОТУХА</h2>    <br><br>гідронім (потамонім),оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Золотуха - </b>1) горб на лівому схилі дол. р. Сули, побл. с. Пустовійтівки Ромен, р-ну Сум. обл.; 2) річка, л. Тетерева п. Дніпра в Житомир, обл.; Золотуха (1979); 3) балка, пр. Кам’янки л. Інгульця п. Дніпра в Кіровоград. обл.; Золотуха (1876). </b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Золот-ух-а </b><br>морфологічний – суфіксація, суфікс  - ух-а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br></b>";
    } else if (textToponim.value == "Серебрянка") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>СЕРЕБРЯНКА</h2><br><br>гідронім (потамонім),оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Серебрянка- </b>річки (4) в бас. Інгульця п. Дніпра, Тясмину п. Дніпра, Інгулу л. Пд. Бугу, Прип’яті п. Дніпра, балка в бас. Самари л. Дніпра.</b> ";
        wayToponim.innerHTML = "<b><h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Серебрян-ка  </b><br>морфологічний – суфіксація, суфікс  - ка.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білогородка , Рудка , Білозерка </b>";
    } else if (textToponim.value == "Срібне") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>СРІБНЕ</h2><br><br>гідронім (потамонім),оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Срібне - </b> с-ще міськ. типу, Чернігів, обл.; відоме з 1174 р.; Серебряный (1174), д.рус. вар. Сребной, Srebne (XVII ст.), Сребряный (1656), Срібное (1659), Срібне (XX ст.); с-ще лежить на р. Сріблянці; пор. нп Срібне в Донец. і Рівн. обл., а також рр. Сріблянка, Срібна (2), б. Срібна, ур. Срібне, потік Срібник, Срібнянка побл. с-ща, Срібнянський гідрологічний заказник і Срібнянський парк у смт Срібне.  </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Срібн-е</b><br>морфологічний – суфіксація, суфікс  - е.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Червоне , Зелене </b>";
    } else if (textToponim.value == "Жовта") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЖОВТА </h2>  <br><br>гідронім (потамонім),оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Жовта - </b>річки (7) та означення в складених гідронімах перев. Сх. та Центр. України. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Жовт-а </b><br>морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Руда , Рижувата , Біла  , Чорна , Золота  </b>";
    } else if (textToponim.value == "Жовта") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>ЖОВТА </h2>  <br><br>гідронім (потамонім),оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Жовта - </b>річки (7) та означення в складених гідронімах перев. Сх. та Центр. України. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Жовт-а </b><br>морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Руда , Рижувата , Біла  , Чорна , Золота  </b>";
    } else if (textToponim.value == "Білий") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛИЙ</h2>  <br><br>гідронім (потамонім),оронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білий - </b>назва річок, балок, населених пунктів, гір та ін. або компоненти в складі геогр. назв. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Біл-ий </b><br>морфологічний – суфіксація, суфікс  - ий.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Чорний </b>";
    } else if (textToponim.value == "Біла") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛА</h2> <br><br>гідронім (потамонім)</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Біла - </b>назва річок, балок, населених пунктів, гір та ін. або компоненти в складі геогр. назв. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Біл-а  </b><br>морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Руда , Рижувата , Жовта , Чорна , Золота </b>";
    } else if (textToponim.value == "Біленьке") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛЕНЬКЕ </h2> <br><br>гідронім (потамонім)</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Біленьке - </b>с-ще міськ. типу, Краматорська м / р Донец, обл.; засн. 1697 р., лежить на р. Біленькій у бас. Сіверськ. Дінця, Былинкой (1773), Беленькое (1981). </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Біленьке </b><br>морфологічний – суфіксація, суфікс  - еньк-е.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>  </b>";
    } else if (textToponim.value == "Білогорівка") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОГОРІВКА</h2> <br><br>гідронім (потамонім)</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білогорівка - </b>с-ще міськ. типу, Лисичанськ. р-н Луган. обл.; засн. 1785 р. (нині це Попасн. р-н).</b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Біленьке </b><br>морфологічний – суфіксація, суфікс  -івка.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Зеленївка </b>";
    } else if (textToponim.value == "Білогородка") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОГОРОДКА</h2> <br><br>гідронім (потамонім)</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білогородка - </b>3 села, з-поміж яких одне у Києво-Святошин. р-ні Київ. обл., яке було засн. князем Володимиром 991 р. як велике місто («градъ») для оборони Києва; БЪлъгородъ (1377), «соколо Білагорода» (згадано під 997), «приде к БЪлугороду» (під 1069).</b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Білогород-ка </b><br>морфологічний – суфіксація, суфікс  - ка.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Рудка , Серебрянка , Білозерка </b>";
    } else if (textToponim.value == "Білозерка") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОЗЕРКА</h2> <br><br>ойконім </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білозерка - </b>с-ще міськ. типу, Херсон, обл. [АТП, 463]; засн. у XVIII ст., Белозёрка (1981). </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Білозерка </b><br>морфологічний – суфіксація, суфікс  - ка.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білогородка, Серебрянка, Рудка</b>";
    } else if (textToponim.value == "Білозерське") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОЗЕРКА</h2> <br><br>ойконім </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білозерське  - </b>місто, Добропіл. р-н Донец. обл.; засн. 1913 р., Белозёрское (1981).  </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Білозерське </b><br>морфологічний – суфіксація, суфікс  - ське.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br></b>";
    } else if (textToponim.value == "Білокам’янськ") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОКАМ'ЯНСЬК</h2> <br><br>ойконім </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білокам’янськ -</b>місто, Балаклав. р / р м. Севастополя в Криму; утворено як м. Білокам*янськ 1976 р. з частини Балаклав. р-ну, що має істор. назву Інкерман, рос. Инкерман, яка стосувалася окремого поселення ще в VI ст. н. е., де тривалий час існувала відома Каламітпа фортеця (руїни XV ст.). </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Білокам’ян-ськ  </b><br>морфологічний – суфіксація, суфікс  - ськ.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Більськ </b>";
    } else if (textToponim.value == "Білокурякине") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОКУРЯКИНЕ</h2> <br><br>ойконім </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білокурякине - </b>с-ще міськ. типу, Луган. обл.; засн. на поч. XVIII ст.; Белокуракино (1981).  </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Білокурякине</b><br>основоскладання";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білосток, Червоноград, Чорногора, Білоус  </b>";
    } else if (textToponim.value == "Білоріченський") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОРІЧЕНСЬКИЙ</h2> <br><br>гідронім (потамонім) </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білоріченський - </b>річка, л. Зх. Бугу п. Вісли; Białystok, Biały Stok, Komarowski, Młynówka — у верх, течії (1965); пор. укр., блр. Белосток — топоніми на Волині, Поділлі, в кол. Гродненськ. губ., пол. Białystok. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Білорічен-ський  </b><br>морфологічний – суфіксація, суфікс  - ський.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Червоновільський , Білоріченський  </b>";
    } else if (textToponim.value == "Білосток") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОРІЧЕНСЬКИЙ</h2> <br><br>ойконім </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білосток- </b>с-ще міськ. типу, Лутугин. р-н Луган. обл.; засн. 1951 р., рос. Белореченский. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Біл-о-сток  </b><br>основоскладання";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білокурякине, Червоноград, Чорногора, Білоус</b>";
    } else if (textToponim.value == "Білоус") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛОУС</h2> <br><br>гідронім (потамонім)  </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Білоус - </b>річка, п. Десни л. Дніпра; Боловесь (1147), Боловосъ, Боловесъ, Бово- лосъ (1147), Білоусь (1764—1769), Бшоусъ (1742), Біловесь (XIX ст.). </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Біл-о-ус </b><br>основоскладання";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білосток, Білокурякине, Червоноград, Чорногора </b>";
    } else if (textToponim.value == "Більськ") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>БІЛЬСЬК</h2> <br><br>гідронім (потамонім)  </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Більськ - </b>село, Рокитн. р-н Рівн. обл.; БЬльскъ (1253), «до Більска» (1289), як м. Бєльськ-Подляський у Польщі.  </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Більськ</b><br>морфологічний – суфіксація, суфікс  - ськ.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білокам’янськ  </b>";
    } else if (textToponim.value == "Рижувата") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>РИЖУВАТА</h2> <br><br>гідронім (потамонім)  </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Рижувата - </b>гора, с. Вуркут Верховин, p-ну Івано-Франків, обл.; Рижовата, Riżowaty (1932), Рыжоваты (2002). </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Рижуват-а </b><br>морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Руда , Чорна, Жовта , Біла , Золота </b>";
    } else if (textToponim.value == "Руда") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>РУДА</h2> <br><br>мікрогідронім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Руда - </b>балки (8), річки (38) в різних регіонах України, крім півдня. </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Руд-а </b><br>морфологічний – суфіксація, суфікс  - а.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Чорна, Рижувата , Жовта , Біла , Золота </b>";
    } else if (textToponim.value == "Рудка") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>РУДКА</h2> <br><br>гідронім (потамонім)  </b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Рудка  - </b>їхнє походження від д.перс. rautah «ріка».Рудка — потоки, річки, ручаї, балки, струмки (69) у різних рігіонах України, крім південного.</b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Руд-ка </b><br>морфологічний – суфіксація, суфікс  - ка.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br>Білогородка, Серебрянка, Білозерка  </b>";
    } else if (textToponim.value == "Рудне") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>РУДНЕ</h2> <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Рудне - </b>с-ще міськ. типу, Залізнична р / р м. Львова; відоме з XIV ст., Rudno (1888).</b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Рудне </b><br>морфологічний – суфіксація, суфікс  - н.";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> </b>";
    } else if (textToponim.value == "Рудниця") {
        toponimTable.style.display = "none";
        box.style.display = "none";
        boxToponim.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        textToponim.value = "";
        surnameToponim.innerHTML = "<b><h2>РУДНИЦЯ</h2> <br><br>ойконім</b>";
        originToponim.innerHTML = "<b><h3>ПОЯСНЕННЯ</h3><br><br>Рудниця - </b>с-ще міськ. типу, Піщан. р-н Вінниц. обл.; засн. наприкін. XIX ст., Rudnica, Rudnicke (1888). </b> ";
        wayToponim.innerHTML = "<b><h3>ПОСІБ СЛОВОТВОРЕННЯ</h3><br><br>Рудн-иця </b><br>морфологічний – суфіксація, суфікс  - иц(я).";
        similarToponim.innerHTML = "<b><h3>МОДЕЛЬ</h3><br> Синиця, Зелениця</b>";
    } else {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        error.style.display = "block";
        table.style.display = "none";
        box.style.display = "none";
        text.value = "";
        textToponim.value = "";
    }
});

tableToponim.addEventListener("click", function () {
    boxToponim.style.display = "none";
    toponimTable.style.display = "block";
    table.style.display = "none";
    box.style.display = "none";
    error.style.display = "none";
    text.value = "";
    textToponim.value = "";
});

toponim.addEventListener("click", function () {
    boxToponim.style.display = "none";
    toponimTable.style.display = "none";
    table.style.display = "block";
    box.style.display = "none";
    error.style.display = "none";
    text.value = "";
    textToponim.value = "";
});

search.addEventListener("click", function () {

    if (text.value == "Білак") {
        boxToponim.style.display = "none";
        box.style.display = "block";
        toponimTable.style.display = "none";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білак</b><i> —від давньослов’янського імені, співвідносного з прикметником білий (грк 34).</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ак</b><br> морфологічний – суфіксація, суфікс  - ак.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br><b>3018</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2067</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis)'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> Рижак, Рудак<b>";

    } else if (text.value == "Білан") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАН</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білан</b><i> —від давньослов’янського імені, співвідносного з прикметником білий.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ан </b><br> морфологічний – суфіксація, суфікс  - ан.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>302 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>13383 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> Жовтан<b>";

    } else if (text.value == "Біланенко") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАНЕНКО</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Біланенко</b><i> —від антропоніма Білан (від давньослов’янського імені, співвідносного з прикметником білий).</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білан-енк-о</b><br> морфологічний – суфіксація, суфікс  - ан.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>18464 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>351 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> Зеленко , Зеленько<b>";

    } else if (text.value == "Біланик") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАНИК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Біланенко</b><i> — від антропоніма Білан (від давньослов’янського імені, співвідносного з прикметником білий ).</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білан-ик</b><br>морфологічний – суфіксація, суфікс  - ик.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>21440 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>299 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> Білуник  , Біланик<b>";

    } else if (text.value == "Біланчук") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАНЧУК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Біланчук</b><i> — від антропоніма. Білан ( від давньослов’янського імені, співвідносного з прикметником білий ).</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білан-чук </b><br>морфологічний – суфіксація, суфікс  - чук.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>15237 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>429 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білейчук<b>";

    } else if (text.value == "Біланюк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАНЮК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Біланюк</b><i> — від антропоніма Білан (від давньослов’янського імені, співвідносного з прикметником білий).</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білан -юк </b><br>морфологічний – суфіксація, суфікс  - юк.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>11668 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>565 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Зеленюк<b>";

    } else if (text.value == "Білас") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАС</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білас</b><i> —від давньослов’янського чоловічого імені, співвідносного з прикметником білий. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ас  </b><br>морфологічний – суфіксація, суфікс  - ас.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>302 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>13383 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Зеленюк<b>";

    } else if (text.value == "Білаш") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАШ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білас</b><i> —від від давньослов’янського імені, співвідносного з прикметником білий .</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-аш</b><br>морфологічний – суфіксація, суфікс  - аш.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>1323 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>4205 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Зеленюк<b>";

    } else if (text.value == "Білей") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛЕЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білей</b><i> —від давньослов’янського імені, співвідносного з прикметником білий. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ей</b><br>морфологічний – суфіксація, суфікс  - ей.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>9926 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>663 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Чорней<b>";

    } else if (text.value == "Білейчук") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛЕЙЧУК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білейчук</b><i> —від антропоніма Білей (від давньослов’янського імені, співвідносного з прикметником білий.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білей-чук</b><br>морфологічний – суфіксація, суфікс  - чук.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>13661 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>481 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Біланчук<b>";

    } else if (text.value == "Біленький") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛЕНЬКИЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Біленький, </b><i> -кого — від прикметника біленький.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-еньк-ий</b><br>морфологічний – суфіксація, суфікс  - еньк-ий.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>2776 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2216 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Білець") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛЕЦЬ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білець,  </b><i>-льця — від давньослов’янського імені, співвідносного з прикметником білий.  </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ець</b><br>морфологічний – суфіксація, суфікс  - ець.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>10684 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>617 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білинець<b>";

    } else if (text.value == "Білий") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛИЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білий,  </b><i>-лого — від давньослов’янського імені, яке давали світловолосим та світлошкірим дітям. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ий</b><br>морфологічний – суфіксація, суфікс  - ий.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>374 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>11336 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Рудий, Чорний, Зелений<b>";

    } else if (text.value == "Білик") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛИК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білик—</b><i>від давньослов’янського імені, утвореного від прикметника 'білий'.  </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704 с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ик</b><br>морфологічний – суфіксація, суфікс  - ик.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>2776 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2216 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білик, Білуник  <b>";

    } else if (text.value == "Білинець") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛИНЕЦЬ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білинець—</b><i>-иця —Від давнього антропоніма Біла або Біля. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-инець</b><br>морфологічний – суфіксація, суфікс  - инець.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>11414 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>578 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білець<b>";

    } else if (text.value == "Білинський") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛИНСЬКИЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білинський—</b><i>від прізвища Білин (від давньослов’янського імені, співвідносного з прикметником білий .  </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білин-ський</b><br>морфологічний – суфіксація, суфікс  - ськ-(ий).";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>14413 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>455 </b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Білич") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛИЧ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білич—</b><i>від давньослов’янського імені, співвідносного з прикметником білий. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ич</b><br>морфологічний – суфіксація, суфікс  - ич.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>4411 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>1449</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Білоус") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛОУС</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білоус—</b><i>від староукраїнського  прикметника 'білоусь — біловусий'. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-о-ус</b><br>мосновоскладання.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>50 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>40547</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Білун") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛУН</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білоус—</b><i>імовірно, від закарпатського апелятива — 'блондин'.  </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ун</b><br>морфологічний – суфіксація, суфікс  - ун.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>20206 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>318</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Білуник") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛУНЧИК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білуник—</b><i>від антропоніма Білун (імовірно, від закарпатського апелятива — 'блондин'). </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Білун-ик</b><br>морфологічний – суфіксація, суфікс  - ик.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>25043 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>253</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білик, Біланик  <b>";

    } else if (text.value == "Біляк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛЯК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Біляк—</b><i>-ка— від давньослов’янського імені, співвідносного з прикметником білий. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-як</b><br>морфологічний – суфіксація, суфікс  - як.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>1997 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2944</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Чорняк, Зеленяк, Жовтяк, Рудяк<b>";

    } else if (text.value == "Білай") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>БІЛАЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Білай—</b><i>від українського антропоніма 'Біла'.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Біл-ай</b><br>морфологічний – суфіксація, суфікс  - ай.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>7006 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>936</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Чорний") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЧОРНИЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Чорний—</b><i>від прикметника 'чорний'. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Чорний</b><br>морфологічний – суфіксація, суфікс  - ий.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>157 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>4205</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білий, Рудий, Зелений<b>";

    } else if (text.value == "Чорній") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЧОРНІЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Чорній—</b><i>від апелятива чорній — 'брюнет'. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Чорний</b><br>морфологічний – суфіксація, суфікс  - ій.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>1327 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>4205</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Чорней") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЧОРНЕЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Чорней—</b><i>від антропонім Чорна. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Чорн-ей </b><br>морфологічний – суфіксація, суфікс  - ей.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>1327 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>4205</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білей <b>";

    } else if (text.value == "Чорняк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЧОРНЯК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Чорняк—</b><i>від антрополексеми Чорний або Чорна.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Чорн-ей </b><br>морфологічний – суфіксація, суфікс  - як.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>9022 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>734</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Чорняк, Зеленяк, Жовтяк, Рудяк <b>";

    } else if (text.value == "Чорниш") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЧОРНИШ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Чорниш—</b><i>1.Від давньослов’янського імені Чорниш. 2. Від апелятив чорниш — 'чорний хліб'. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Чорн-иш  </b><br>морфологічний – суфіксація, суфікс  - иш.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>18105 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>364</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Зелений") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЗЕЛЕНИЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Зелений—</b><i>прізвище однозначно пов'язане з українською  лексемою зелений. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Зелен-ий</b><br>морфологічний – суфіксація, суфікс  - ий.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>3859 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>1651</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білий, Чорний, Рудий<b>";

    } else if (text.value == "Зеленко") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЗЕЛЕНКО</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Зелений—</b><i>від вл. ос. імені Зеленко, що з прикм. зелен, + -ко. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Зел-енк-о</b><br>морфологічний – суфіксація, суфікс  - енк-о.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>4435 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>1443</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білий, Чорний, Рудий<b>";

    } else if (text.value == "Зеленько") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЗЕЛЕНЬКО</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Зеленько—</b><i>Фонетична видозміна прізвища Зеленко. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Зел-еньк-о</b><br>морфологічний – суфіксація, суфікс  - еньк-о.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>2855 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2171</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Зеленко, Зелений, Зеленюк, Зеленяк<b>";

    } else if (text.value == "Зеленюк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЗЕЛЕНЮК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Зеленюк—</b><i>прізвище могло утворитися від антропоніма Зелений або до Зелень, якщо такі були в регіоні. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Зелен-юк   </b><br>морфологічний – суфіксація, суфікс  - юк.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>1260 </b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>4400</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Біланюк<b>";

    } else if (text.value == "Зеленяк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЗЕЛЕНЯК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Зеленяк—</b><i>прізвище могло утворитися від антропоніма Зелений або до Зелень, якщо такі були в регіоні.  </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Зелен-як   </b><br>морфологічний – суфіксація, суфікс  - як.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>8235</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>799</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Біланюк<b>";

    } else if (text.value == "Сірко") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>СІРКО</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Сірко—</b><i>правдоподібно, від бойківської клички коня сірої масті Сірко. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Сір-к-о</b><br>морфологічний – суфіксація, суфікс  -к-о.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>2794</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2210</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> <b>";

    } else if (text.value == "Рижак") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>РИЖАК</h2>";
        origin.innerHTML = "<h3> ПОХОДЖЕННЯ</h3><br><b>Рижак,</b><i>-ка — 1. Від бойківського прикметника рижий — 'темно-рудий'. 2. Від антропоніма Риж. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Риж-ак</b><br>морфологічний – суфіксація, суфікс  - ак.";
        statistic.innerHTML = "<h3>СТАТИСТИКА</h3><br> <b>1931</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>3042</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br> Рудак, Білак <b>";

    } else if (text.value == "Жовтан") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЖОВТАН</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Жовтан— </b><i>від карп, клички Жовтан,  уживаної для вола, коня чи барана жовтої масті.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Жовт-ан</b><br>морфологічний – суфіксація, суфікс  - ан.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>15081</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>435</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білан<b>";

    } else if (text.value == "Жовтяк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>ЖОВТЯК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Жовтяк— </b><i>від прикм. жовтий.</i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Жовт-як</b><br>морфологічний – суфіксація, суфікс  - як.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>6283</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>1046</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Біляк, Чорняк, Зеленяк, Рудяк<b>";

    } else if (text.value == "Рудий") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>РУДИЙ</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Руда, -дий— </b><i>від антропооснови Руд-, співвідносної з прикм. рудий. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Руд-ий</b><br>морфологічний – суфіксація, суфікс  - ий.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>664</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>7228</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білий, Чорний, Зелений<b>";

    } else if (text.value == "Рудак") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>РУДАК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Рудак-</b><i>від антропооснови Руд-, співвідносної з прикм. рудий.  </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Руд-ак</b><br>морфологічний – суфіксація, суфікс  - ак.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>5672</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>1157</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Білак, Рижак<b>";

    } else if (text.value == "Рудяк") {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        box.style.display = "block";
        table.style.display = "none";
        error.style.display = "none";
        text.value = "";
        surname.innerHTML = "<h2>РУДЯК</h2>";
        origin.innerHTML = " <h3> ПОХОДЖЕННЯ</h3><br><b>Рудяк-</b><i>від антропооснови Руд-, співвідносної з прикм. рудий. </i><br><br>— <b style='font-size:11px;'>Чучка П. П. Прізвища закарпатських українців: Історико-етимологічний словник. — Львів: Світ, 2005. — 704  с.</b>";
        way.innerHTML = "<h3>СПОСІБ СЛОВОТВОРЕННЯ</h3><br><b>Руд-як</b><br>морфологічний – суфіксація, суфікс  - ак.";
        statistic.innerHTML =
            "<h3>СТАТИСТИКА</h3><br> <b>2184</b> місце  серед найпоширеніших прізвищ в Україні (приблизно <b>2743</b> людей мають таке прізвище).";
        baza.innerHTML = "<b> <a style='font-size:11px;' href='https://sites.google.com/site/uaname/popularnist-prizvis  )'>База популярних прізвищ та імен України</a></b>";
        similar.innerHTML = "<b>МОДЕЛЬ <br><br>Біляк, Чорняк, Зеленяк, Жовтякк<b>";
    } else {
        boxToponim.style.display = "none";
        toponimTable.style.display = "none";
        error.style.display = "block";
        table.style.display = "none";
        box.style.display = "none";
        text.value = "";
        textToponim.value = "";
    }

});
