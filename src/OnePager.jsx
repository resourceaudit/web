import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OnePager() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState("audit");

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const pastelBlues = [
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
  ];

  const mains = [
    {
      title: "Ми Ефективні",
      text: 'В нас працюють знахідки як з "Big Four" так і з другого ешелону. Наша команда молода — а тому ефективна. Нас цікавить результат, а не маржа. Ми працюємо з неприбутковим сегментом і підтримуємо "work-life balance", що підвищує ефективність.',
      img: "src/assets/main/main2.jpg",
    },
    {
      title: "Ми Швидкі",
      text: "Ми швидше інтегрували штучний інтелект, ніж регулятори визнали його інструментом. Тривіальну роботу тепер виконує ШІ — це означає швидший відгук і результати.",
      img: "src/assets/main/main3.jpg",
    },
    {
      title: "Ми Прямі та Чесні",
      text: "Вас цікавить результат, а нас — гідна платня за досвід. Якщо ви чогось не знаєте — ми навчимо. Ми не приховуємо істину: навчаємо створювати звітність, яка приносить реальну користь.",
      img: "src/assets/main/main4.jpeg",
    },
    {
      title:
        "Наші працівники, партнери та підрядники - всі мають гуманітарну місію!",
      text: 'Коли Ви звертаєтесь до "Ресурс-аудит", ми знаходимо ресурс, ефективний, швидкий, прямий. І ми розуміємо всі ваші візії. Наша діяльність - благодійна там, де ми можемо прикласти наш досвід та навички. Це там де ми корисні. Коли фінансист гукає "Так а як я здам річний звіт" - Ресурс аудит готовий бути поряд, бо ми розуміємо.',
      img: "src/assets/main/main5.jpg",
    },
  ];

  const team = [
    {
      name: "Нікіфоренко Микола",
      role: "Генеральний директор",
      text: "Понад 25 років стажу. Присяжний член IFAC, один із творців Аудиторської палати України. Почесний член ФПБАУ та САУ.",
      img: "src/assets/about/about1.png",
    },
    {
      name: "Гаврилова Олена",
      role: "Менеджерка з аудиту",
      text: "Понад 20 років стажу в аудиті. Спеціаліст з податкового обліку, емітентів та неприбуткових організацій. Почесна членкиня САУ та ФПБАУ.",
      img: "src/assets/about/about2.png",
    },
    {
      name: "Воят Олександр",
      role: "Директор департаменту аудиту",
      text: "Понад 10 років досвіду. Почесний член ФПБАУ та САУ. Сертифікований член АССА (FCCA).",
      img: "src/assets/about/about3.png",
      cert: "src/assets/about/fcca-certificate.png",
    },
    {
      name: "Кузь Анастасія",
      role: "Головна аудиторка",
      text: "Понад 15 років стажу. Сертифікації CPA, DIPIFR (ACCA), SIMA.",
      img: "src/assets/about/about4.png",
    },
    {
      name: "Голуб Сергій",
      role: "Контролер якості",
      text: "Більше 20 років досвіду у сфері фінансів та аудиту, включаючи керуючий досвід у «Великій Четвірці». Сертифікат FCCA.",
      img: "src/assets/about/about5.png",
    },
  ];

  const services = [
    {
      id: "audit",
      title: "Аудит",
      text: `Ми спеціалізуємося у проведенні ініціативного аудиту.
Наше бачення — регулятор не здатний і не має візії.
Тільки власники бізнесу та користувачі фінансової звітності можуть бажати неупередженого аудиту.
Поки аудиторські фірми третього та четвертого реєстру переслідують вимог регуляторів —
ми стоїмо на захисті приватного бізнесу, бо наша ціль не збір паперу, а об’єктивна оцінка та чесне висловлення думки.`,
    },
    {
      id: "business",
      title: "Ініціативний аудит бізнесу",
      text: `Ви можете бути прибутковими і ні, емітентами та ні — нам байдуже, якщо наше завдання — неупереджений аудит.
Ми пропонуємо пакет послуг — ініціативний аудит та due-diligence.
Хай Ваш власник буде спокійним: поки “основний” аудитор збирає папір — ми робимо об’єктивний аудит.`,
    },
    {
      id: "nonprofit",
      title: "Ініціативний аудит неприбуткового сегменту",
      text: `Хочете секрет? Всі наші працівники так чи інакше працювали в неприбутковій сфері.
Нас об’єднала місія: служити людям, щоб на планеті всі жили краще.
Якщо ви Організація із неприбуткового сегменту - ви не зможете знайти кращий професіоналів у цій справі. Щонайменше шість наших самих досвідчених фахівців - працювали або досі працюють у неприбутковому сегменті.
Досить терпіти стандартний підхід - Ви та Ваші донори варті кращого. Це розуміння`,
    },
    {
      id: "extra",
      title: "Додаткові послуги",
      text: `Нехай інші заробляють, ми будемо допомагати.
Наші спеціалісти також вправні у консолідації фінансової звітності, підготовці звітності у таксономії xbrl, due-dilligance та оглядах
у податкових ревізіях (перед проведенням інспекції).
Ми також продаємо потужні цукерки! Жартуємо. Але можна домовитись!`,
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header with mobile burger menu */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
        <img
          src="src/assets/logo.svg"
          alt="Ресурс-Аудит логотип"
          className="h-12 w-auto"
        />
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">
            Про нас
          </a>
          <a href="#services" className="hover:text-blue-600">
            Послуги
          </a>
          <a href="#portfolio" className="hover:text-blue-600">
            Портфоліо
          </a>
          <a href="#contacts" className="hover:text-blue-600">
            Контакти
          </a>
        </nav>
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 space-y-3 shadow-md md:hidden">
            <a
              href="#about"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Про нас
            </a>
            <a
              href="#services"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Послуги
            </a>
            <a
              href="#portfolio"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Портфоліо
            </a>
            <a
              href="#contacts"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Контакти
            </a>
          </div>
        )}
      </header>

      {/* Section 1: Головна */}
      <section className="relative py-36 md:py-56 px-6 text-center flex flex-col justify-center items-center">
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/main/main1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-white max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-semibold mb-10">
            Чому ми?
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed mb-12">
            Ви можете задатись питанням — маю понад 10 пропозицій від аудиторів.
            Вони члени міжнародних організацій, сертифіковані члени АССА, CPA,
            SIMA. Чому ж обрати саме нас?
          </p>
          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            href="#services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-all"
          >
            Бо ми молоді!
          </motion.a> */}
          <motion.a whileHover={{ scale: 1.05 }} href="#main">
            {" "}
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 text-2xl font-medium transition-all text-gray-900">
              {" "}
              Бо ми молоді!
            </div>{" "}
          </motion.a>
        </div>
      </section>

      {/* Section 2: Наша візія */}
      <section id="main" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-10">Наша візія</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["Ефективність", "Швидкість", "Прямота", "Благодійність"].map(
            (value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`${pastelBlues[i]} rounded-2xl p-6 shadow-md transition-all`}
              >
                <h3 className="text-2xl font-semibold mb-2">{value}</h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Section 2.1–2.4 */}
      <section className="py-16 px-2 md:px-6 lg:px-12 bg-gray-50 space-y-10">
        {mains.map((block, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`flex flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center bg-white rounded-2xl shadow-md overflow-hidden transition-all lg:max-w-[calc(100%-100px)] md:max-w-[calc(100%-40px)] sm:mx-auto mx-[20px]`}
          >
            <img
              src={block.img}
              alt={block.title}
              className={`w-full md:w-1/2 ${
                i === 3 ? "h-96 md:h-[460px]" : "h-64 md:h-72"
              } object-cover object-center`}
            />
            <div className="p-6 md:w-1/2 text-center md:text-left md:px-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                {block.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                {block.text}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Final Message */}
        <div className="text-center text-2xl md:text-3xl font-semibold mt-16 text-gray-800">
          НАШІ ЗНАННЯ ЦІННІ ТІЛЬКИ ТАМ - ДЕ ЛЮДСЬКА ЦІННІСТЬ ПЕРЕВАЖАЄ ГРОШОВУ
        </div>
      </section>

      <section
        id="about"
        className="py-20 px-4 md:px-8 bg-white text-center overflow-x-hidden"
      >
        <h2 className="text-4xl font-semibold mb-8">Про нас</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
          Сьогодні ми маємо найкращу нагоду сказати — на короткому дзвінку у нас
          десятки спеціалістів, готових долучитись до Вашого завдання! Але, про
          всяк випадок — ми знаємо, що ви справді бажаєте знати. А чи є у нас
          реальні фахівці з міжнародним досвідом? Так і ще раз так!
        </p>

        <h3 className="text-2xl font-semibold mb-10">Наші ключові обличчя</h3>

        {/* Scrollable gallery */}
        {/* <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory justify-start md:justify-center px-2"> */}
        <div
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-8 lg:px-10 lg:justify-center"
          style={{ scrollPadding: "0 2rem" }}
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="relative w-72 h-[420px] flex-shrink-0 snap-center group"
              style={{
                perspective: "1200px",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-2/3 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">{person.name}</h4>
                    <p className="text-sm text-gray-600">{person.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-blue-50 rounded-2xl shadow-lg p-4 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-gray-800 text-base mb-3">{person.text}</p>
                  {person.cert && (
                    <a
                      href={person.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Переглянути сертифікат
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
display: none;
}
.scrollbar-hide {
-ms-overflow-style: none;
scrollbar-width: none;
}
.group:hover > div {
transform: rotateY(180deg);
}
`}</style>
      </section>

      <section
        id="services"
        className="py-20 px-6 md:px-12 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Graphics */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-2xl opacity-60" />
            <div className="relative z-10 flex flex-col space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white shadow-lg rounded-2xl p-4 w-56"
              >
                <p className="text-gray-500 text-sm">Загальний досвід</p>
                <p className="text-xl font-bold text-gray-800">20+ років</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white shadow-lg rounded-2xl p-4 w-56"
              >
                <p className="text-gray-500 text-sm">
                  Проєктів успішно завершено
                </p>
                <p className="text-xl font-bold text-gray-800">100+</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white shadow-lg rounded-2xl p-4 w-56"
              >
                <p className="text-gray-500 text-sm">Клієнти з довірою</p>
                <p className="text-xl font-bold text-gray-800">87% повторних</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <h2 className="text-4xl font-semibold mb-2">Послуги</h2>
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-8">
              наш професійний підхід та досвід
            </p>

            {services.map((item) => (
              <div key={item.id} className="border-b border-gray-200 mb-4 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggle(item.id)}
                >
                  <span className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-2xl text-blue-500">
                    {open === item.id ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {open === item.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-700 leading-relaxed"
                    >
                      {item.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-6">Контакти</h2>
        <p className="text-lg mb-6">
          Зв’яжіться з нами, щоб дізнатися більше про наші послуги або почати
          співпрацю.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all">
          Написати нам
        </button>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-300">
        <p>© {new Date().getFullYear()} Ресурс-Аудит. Всі права захищено.</p>
      </footer>
    </div>
  );
}
