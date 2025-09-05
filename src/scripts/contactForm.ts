import { z } from 'zod';


const contactSchema = z.object({
  name: z.string().trim().min(3, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById("contactForm") as HTMLFormElement | null;
const errors = document.getElementById("errors") as HTMLUListElement | null;

if (errors) {
    errors.style.display = "none";
}

if (form && errors) {
    errors.innerHTML = ""
  form.addEventListener("submit", (e) => {
    const formData = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      e.preventDefault();
      errors.style.display = "block";
      result.error.errors.forEach((err) => {
        const li = document.createElement("li");
        li.textContent = err.message;
        errors.appendChild(li);
      });
    } else {
      console.log("Validation passed, form will submit");
    }
  });
}
});