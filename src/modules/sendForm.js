const resetInput = () => {
  const elementForm = document.querySelectorAll("input");
  elementForm.forEach(item => {
    if (item.name === 'user_phone' || item.name === 'user_name' || item.name === 'user_quest') {
      item.value = "";
    }
  });
};


const sendForm = (selector, funcResetInput, elem) => {
  const form = document.querySelector(selector);
  const loadMessage = "Загрузка....";
  const error = "Что то пошло не так!";
  const statusMessage = document.createElement("div");
  statusMessage.classList.add('status');
  statusMessage.style.fontSize = "20px";
  statusMessage.style.fontWeight = "500";
  const userQuestion = document.querySelector('.userQuestion');
  // получаем данные с калькулятора
  const calcResult = document.getElementById("calc-result");


  form.addEventListener("input", event => {
    let target = event.target;
    let text = target.value;

    if (target.name === "user_name") {
      target.value = text.replace(/[^а-яА-я]/g, "");
    }
    if (target.name === "user_phone") {
      target.value = text.replace(/[^\+0-9]/g, "");
    }
  });



  const successMessage = response => {
    if (response.status !== 200) {
      statusMessage.textContent = error;
      throw new Error("status network not 200");
    } else {
      statusMessage.textContent = "Спасибо, мы скоро свяжемся с вами!";
      funcResetInput();
      setTimeout(() => {
        statusMessage.remove();
      }, 3000);
    }
  };


  form.addEventListener("submit", event => {
    event.preventDefault();
    form.append(statusMessage);
    statusMessage.textContent = loadMessage;

    const formData = new FormData(form);

    let body = {};

    if (userQuestion.value) {
      body.userQuestion = userQuestion.value;
    }

    if (calcResult.value) {
      body.resultCalc = elem;
    }


    formData.forEach((item, value) => {
      body[value] = item;
    });

    postData(body)
      .then(successMessage)
      .catch();
  });

  const postData = body => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  };

};
export {
  sendForm,
  resetInput
};