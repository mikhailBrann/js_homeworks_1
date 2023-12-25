class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(time == null || typeof callback != 'function') {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const alarmIsExist = this.alarmCollection.some(elem => elem.time == time);

        if(alarmIsExist) {
            console.warn('Уже присутствует звонок на это же время');
        }

        let newAlarm =  {
            callback: callback,
            time: time,
            canCall: true
        }

        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.time != time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {hour: "2-digit", minute: "2-digit"});
    }

    start() {
        if(this.intervalId != null) {
            return;
        }

        this.intervalId = setInterval(()=> {
            this.alarmCollection.forEach(elem => {
                if(elem.time == this.getCurrentFormattedTime() && elem.canCall == true) {
                    elem.canCall = false;
                    elem.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(elem => elem.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}