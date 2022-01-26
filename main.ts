radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Ezkerreko_intermitentea()
    }
    if (receivedNumber == 0) {
        Eskuineko_intermitentia()
    }
    if (receivedNumber == 0) {
        Limpiaparabrisas()
    }
})
function Limpiaparabrisas () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P0, 180)
}
function Eskuineko_intermitentia () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(60)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(60)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.clearScreen()
    }
}
function Ezkerreko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(60)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(60)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.clearScreen()
    }
}
radio.setGroup(3)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
})
