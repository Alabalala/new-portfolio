export function validateEmail(email: string) {
    if (!email ||email.trim() === "") {
        return "Email is required"
    }
    if (/^\S+@\S+\.\S+$/.test(email)) {
        return "Add a correct email, please"
    }
    return null
}

export function validateName(name: string) {
    if (!name ||name.trim() === "") {
        return "Name is required"
    }
    if (name.length < 3) {
        return "Name must be at least 4 characters"
    }
    return null
}

export function validateMessage(message: string) {
  if (!message || message.trim() === "") return "Message is required";
  if (message.length < 10) return "Message must be longer than 10 characters";
  return null;
}