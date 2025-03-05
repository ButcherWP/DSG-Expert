// Объект с названием и описанием услуг
const servicesInfo = {
  service1: {
    title: "Ремонт АКПП",
    description:
      "test Комплексный ремонт автоматической коробки передач с гарантией качества.",
  },
  service2: {
    title: "Ремонт DSG",
    description: "Профессиональный ремонт коробок передач DSG любой сложности.",
  },
  service3: {
    title: "Установка Kinergo",
    description:
      "Качественная установка оборудования Kinergo квалифицированными специалистами.",
  },
  service4: {
    title: "Замена сцепления DSG",
    description:
      "Замена комплекта сцепления DSG с соблюдением всех технических норм и требований.",
  },
  service5: {
    title: "Ремонт мехатроника",
    description:
      "Профессиональный ремонт мехатроника DSG и устранение любых неисправностей.",
  },
  service6: {
    title: "Замена масла DSG",
    description: "Качественная и быстрая замена масла в коробке DSG.",
  },
  service7: {
    title: "Замена масла в мехатронике",
    description: "Замена масла и сервис мехатроника коробок передач DSG.",
  },
  service8: {
    title: "Диагностика DSG",
    description:
      "Компьютерная диагностика коробки передач DSG с использованием профессионального оборудования.",
  },
  service9: {
    title: "Горит ключик напанели приборов",
    description:
      "Полная диагностика и устранение причины индикации ключика на приборной панели.",
  },
  service10: {
    title: "Обслуживание автомобилей группы VAG",
    description:
      "Полный комплекс профессионального обслуживания автомобилей Volkswagen, Skoda, Audi, Seat.",
  },
  // добавьте аналогично остальные услуги
};

// Элементы модального окна
const modal = document.getElementById("serviceModal");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-description");
const closeBtn = modal.querySelector(".close-btn");
const appointmentBtn = modal.querySelector(".appointment-btn");

// Открытие модального окна
document
  .querySelector(".services-list")
  .addEventListener("click", function (e) {
    const service = e.target.dataset.service;
    if (service && servicesInfo[service]) {
      modalTitle.textContent = servicesInfo[service].title;
      modalDesc.textContent = servicesInfo[service].description;
      modal.style.display = "block";
    }
  });

// Закрытие окна по клику на крестик
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Закрытие окна при клике вне модального окна
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// кнопка записи
appointmentBtn.onclick = function () {
  alert(
    `Вы записались на услугу "${modalTitle.textContent}". Наш менеджер скоро свяжется с вами.`
  );
  modal.style.display = "none";
};
