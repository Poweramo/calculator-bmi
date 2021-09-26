const app = document.querySelector(".app");
const bmi = document.createElement("p");

const calculateBmi = (weight3, size3) => {
  parseInt(weight3);
  parseInt(size3);

  let imc = weight3 / Math.pow(size3, 2);

  app.appendChild(bmi);
  bmi.setAttribute(
    "style",
    `
    position: absolute;
    top: 85%;
    left: 55%;
    transform: translate(-85%, -55%);
    `,
  );
  bmi.textContent = `Votre IMC est : ${imc.toFixed(2)}`;

  setTimeout(() => bmi.remove(), 5000);
};

calculate.addEventListener("click", () => {
  if (weight.value === "" || size.value === "" || (weight.value === "" && size.value === "")) {
    alert("Erreur : Ce que vous avez rempli est invalide !");
    return;
  } else if (!weight.value.match(/^[0-9]+$/) || !size.value.match(/^[0-9]{1,2}([.][0-9]{1,2})?$/) || (!weight.value.match(/^[0-9]+$/) && !size.value.match(/^[0-9]{1,2}([.][0-9]{1,2})?$/))) {
    alert("Erreur : Ce que vous avez rempli est invalide !");
    return;
  } else {
    calculateBmi(weight.value, size.value);
  }
});
