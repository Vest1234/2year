let car = {
    name: "BMV",
    color: "Синый",
    speed: "60",
    Newcolor: function (C) {
        this.color = C
        console.log("Машина была перекрашена в " + C)
    },
    Drive: function() {
        console.log(this.color + " " + this.name + " поехала со скоростью " + this.speed + " км/ч")
    }
}

car.Newcolor("Чёрный")
car.Drive()