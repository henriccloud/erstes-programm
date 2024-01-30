input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
})
input.onGesture(Gesture.Shake, function () {
    basic.setLedColor(0x00ff00)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.soundLevel() > 200) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
