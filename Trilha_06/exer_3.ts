class ContactValidator {
    isValidContact(email: string): boolean {
        return email.includes("@");
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(email: string): string {
        if (this.contactValidator.isValidContact(email)) {
            return `Email sent to: ${email}`;
        } else {
            return `Invalid contact: ${email}`;
        }
    }
}
