class TimerLeft {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
    }

    convertToTime() {
        if (minutes < 10) {
            this.minutes = '0' + this.minutes;
        }
        if (seconds < 10) {
            this.seconds = '0' + this.seconds;
        }
        return this.minutes + ':' + this.seconds;
    }
}