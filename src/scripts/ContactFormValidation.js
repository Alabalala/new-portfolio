import { boolean } from "zod/v4";
import { validateEmail, validateMessage, validateName } from "../utils/validators";

export default function validateForm() {
  const form = document.getElementById("contactForm");
  const errors = document.getElementById("errors");
  let errorList = [];
  errors.style.display = "hidden";

  if (form && errors) {
    errors.innerHTML = "";
    form.addEventListener("submit", (e) => {
      const formData = Object.fromEntries(new FormData(form));

      console.log("name: ", formData.name, " ", "email: ", formData.email, " ", "message: ", formData.message);

      errorList = [
        validateName(formData.name),
        validateEmail(formData.email),
        validateMessage(formData.message),
      ].filter(boolean);

      if (errorList.length > 0) {
        e.preventDefault();
        errors.style.display = "block";
        errorList.forEach((err) => {
          const li = document.createElement("li");
          li.textContent = err;
          errors.appendChild(li);
        });
      } else {
        console.log("Validation passed, form will submit");
      }
    });
  }
}

