// const arr = [1, 2, 3];
// console.log(arr === [1, 2, 3]);

const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

// container.style.display = "none";
messageContainer.innerHTML = "<h3>D-day를 입력해주세요</h3>";
// messageContainer.textContent = "D-day를 입력해주세요";

const dateFormMaker = function () {
  console.log(messageContainer);
  //   console.log(document.querySelector("#target-year-input"));
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // console.log(inputYear, inputMonth, inputDate);

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000; //남은 기간(초단위)

  // if remaining == 0, 타이머 종료 메세지
  if (remaining <= 0) {
    console.log("타이머종료");
    messageContainer.innerHTML = "<h3>타이머 종료</h3>";
  } else if (isNaN(remaining)) {
    //잘못된 날짜 -> 유효한 시간대가 아닙니다
    console.log("유효한 시간대가 아닙니다");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  const timekeys = Object.keys(remainingObj);
  const dockeys = Object.keys(documentObj);
  console.log(timekeys, dockeys);

  for (let i = 0; i < timekeys.length; i = i + 1) {
    documentObj[dockeys[i]].textContent = remainingObj[timekeys[i]];
  }

  //   documentObj["days"].textContent = remainingObj["remainingDate"];
  //   documentObj["hours"].textContent = remainingObj["remainingHours"];
  //   documentObj["min"].textContent = remainingObj["remainingMin"];
  //   documentObj["sec"].textContent = remainingObj["remainingSec"];

  //   console.log(remainingDate, remainingHours, remainingMin, remainingSec);

  for (let key in documentObj) {
    console.log(key);
  }
};
