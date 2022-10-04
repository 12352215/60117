radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(520)
})
radio.setGroup(7)
basic.forever(function () {
	
})
