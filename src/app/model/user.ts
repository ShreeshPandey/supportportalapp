export class User {
    id: number
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    profileImageUrl: string;
    lastLoginDate: Date;
    lastLoginDateDisplay: Date
    joinDate: Date
    role: string;
    authorities: [];
    active: boolean
    notLocked: boolean

    constructor() {
        this.id = 0;
        this.userId = '';
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.profileImageUrl = null
        this.lastLoginDate = null
        this.lastLoginDateDisplay = null
        this.joinDate = null
        this.active = false;
        this.notLocked = false;
        this.role = '';
        this.authorities = [];
    }
}
