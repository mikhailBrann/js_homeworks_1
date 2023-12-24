class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(time == null && typeof callback == 'function') {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        this.alarmCollection.find((elem) => {
            if(elem.time == time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        });

        let newAlarm =  {
            callback: callback,
            time: time,
            canCall: callback() ?? true
        }

        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.time != time);
    }

    getCurrentFormattedTime() {
        let currentDate = new Date(Date.now());
        return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    }

    start() {
        if(this.intervalId === null) {
            return;
        }

        const alarmObj = this;
        const currentTime = alarmObj.getCurrentFormattedTime();
        const newInterval = setInterval(() => {
            alarmObj.alarmCollection.forEach(elem => {
                if(elem.time == currentTime && elem.time == true) {
                    elem.canCall = false;
                    elem.callback();
                }
            });
        }, 1000);

        this.intervalId = newInterval;
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