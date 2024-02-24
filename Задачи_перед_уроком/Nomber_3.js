class Сar {
    constructor(name, color) {
        this.name = name
        this.color = color     
        
    }

    newcolor(C) {
        this.color = C
        console.log("Машина была перекрашена в " + C)
    }

    bip() {
        console.log(this.name)
    }

}
let auto = new Сar("BMW", "Зелёный")
auto.newcolor("Чёрный")
auto.bip()
