class EmailNotification {
    sendNotification(email: string): string {
        return `Notification sent to: ${email}`;
    }
}

class UserManager {
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(email: string): string {
        const userCreationMessage = `User created: ${email}`;
        const notificationMessage = this.emailNotification.sendNotification(email);
        return `${userCreationMessage}\n${notificationMessage}`;
    }
}
