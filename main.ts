function fireTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        theBright = brightsFire[light2]
        theColor = hueToLetter(huesFire[light2])
        if (togglesFire[light2] == 0) {
            if (theBright < 80) {
                brightsFire[light2] = theBright + 15
            } else if (theBright >= 80) {
                togglesFire[light2] = 1
            }
        } else if (togglesFire[light2] == 1) {
            if (theBright > 30) {
                brightsFire[light2] = theBright - 5
            } else if (theBright <= 30) {
                togglesFire[light2] = 0
                nextColor = colorsFire[randint(0, colorsFire.length - 1)]
                while (nextColor == theColor) {
                    nextColor = colorsFire[randint(0, colorsFire.length - 1)]
                }
                huesFire[light2] = letterToHue(nextColor)
                brightsFire[light2] = theBright - randint(0, 30)
            }
        }
    }
}
function glowTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        thisBrightness = brightsGlow[light2]
        if (thisBrightness < 150) {
            brightsGlow[light2] = thisBrightness + 1.7
        }
    }
}
function runParade () {
    for (let index = 0; index <= totalLights - 1; index++) {
        huesParade[index] = letterToHue(colorsParade[randint(0, colorsParade.length - 1)])
        saturationParade[index] = 100
        togglesParade[index] = randint(0, 1)
        brightsParade[index] = randint(10, 65)
    }
}
function letterToHue (letter: string) {
    if (letter == "R") {
        return 0
    } else if (letter == "O") {
        return 15
    } else if (letter == "Y") {
        return 40
    } else if (letter == "L") {
        return 85
    } else if (letter == "G") {
        return 110
    } else if (letter == "C") {
        return 170
    } else if (letter == "B") {
        return 240
    } else if (letter == "P") {
        return 265
    } else if (letter == "K") {
        return 310
    } else {
        return 280
    }
}
function runIdle () {
    for (let index = 0; index <= totalLights - 1; index++) {
        if (index % 2 == 0) {
            huesIdle[index] = 2
            togglesIdle[index] = 0
        } else {
            huesIdle[index] = 265
            togglesIdle[index] = 1
        }
    }
}
function doWalk () {
    setEffect("A", "Step")
    basic.pause(1000)
    doStep("B", "Step")
    basic.pause(1000)
    doStep("D", "Step")
    basic.pause(1000)
    doStep("E", "Step")
    basic.pause(1000)
    doStep("G", "Step")
    basic.pause(1000)
    doStep("I", "Step")
    basic.pause(1000)
    doStep("H", "Step")
    basic.pause(1000)
    doStep("H", "Win")
    basic.pause(1000)
    setEffect("X", "Off")
}
function runIndicate () {
    for (let index = 0; index <= totalLights - 1; index++) {
        if (index < 10) {
            brightsIndicate[index] = 50
            togglesIndicate[index] = 0
        } else {
            brightsIndicate[index] = 50
            togglesIndicate[index] = 1
        }
    }
}
function paradeTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        theBright = brightsParade[light2]
        theColor = hueToLetter(huesParade[light2])
        if (togglesParade[light2] == 0) {
            if (theBright < 65) {
                brightsParade[light2] = theBright + 15
            } else if (theBright >= 65) {
                togglesParade[light2] = 1
            }
        } else if (togglesParade[light2] == 1) {
            if (theBright > 10) {
                brightsParade[light2] = theBright - 5
            } else if (theBright <= 10) {
                togglesParade[light2] = 0
                nextColor = colorsParade[randint(0, colorsParade.length - 1)]
                while (nextColor == theColor) {
                    nextColor = colorsParade[randint(0, colorsParade.length - 1)]
                }
                huesParade[light2] = letterToHue(nextColor)
                brightsParade[light2] = theBright - randint(0, 10)
            }
        }
    }
}
function doStep (space: string, action: string) {
    if (space == "A") {
        setEffect("XJLMN", "Off")
        setEffect("A", "Step")
        setEffect("B", "Indicate")
        setEffect("C", "Indicate")
    } else if (space == "B") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("B", "Step")
            setEffect("D", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S7, 110)
            setEffect("B", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S7, 50)
        }
    } else if (space == "C") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("C", "Step")
            setEffect("E", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            setEffect("C", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
        }
    } else if (space == "D") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("D", "Step")
            setEffect("EF", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S5, 65)
            setEffect("D", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S5, 135)
        }
    } else if (space == "E") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("E", "Step")
            setEffect("DG", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            setEffect("E", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
        }
    } else if (space == "F") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("F", "Step")
            setEffect("H", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S3, 50)
            setEffect("F", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S3, 130)
        }
    } else if (space == "G") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("G", "Step")
            setEffect("I", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S2, 40)
            setEffect("G", "Mine")
            setEffect("L", "Step")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S2, 110)
            setEffect("L", "Idle")
        }
    } else if (space == "H") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("H", "Step")
            setEffect("I", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            setEffect("H", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
        } else if (action == "Win") {
            setEffect("X", "Off")
            setEffect("H", "Indicate")
        }
    } else if (space == "I") {
        if (action == "Step") {
            setEffect("X", "Off")
            setEffect("I", "Step")
            setEffect("H", "Indicate")
        } else if (action == "Mine") {
            setEffect("X", "Off")
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            setEffect("I", "Mine")
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
        } else if (action == "Win") {
            setEffect("X", "Off")
            setEffect("I", "Indicate")
        }
    }
}
function idleTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        thisH = huesIdle[light2]
        if (togglesIdle[light2] == 0) {
            if (thisH < 265) {
                huesIdle[light2] = thisH + 1
            } else if (thisH >= 265) {
                togglesIdle[light2] = 1
            }
        } else if (togglesIdle[light2] == 1) {
            if (thisH > 2) {
                huesIdle[light2] = thisH - 1
            } else if (thisH <= 2) {
                togglesIdle[light2] = 0
            }
        }
    }
}
function runFire () {
    for (let index = 0; index <= totalLights - 1; index++) {
        huesFire[index] = letterToHue(colorsFire[randint(0, colorsFire.length - 1)])
        saturationFire[index] = 100
        togglesFire[index] = randint(0, 1)
        brightsFire[index] = randint(30, 80)
    }
}
function runGlow () {
    for (let index = 0; index <= totalLights - 1; index++) {
        brightsGlow[index] = 0
    }
}
function setHues (regions: string, hue: number) {
    if (regions.includes("A")) {
        huesIndicate[8] = hue
        huesIndicate[9] = hue
        huesIndicate[10] = hue
        huesIndicate[11] = hue
    }
    if (regions.includes("B")) {
        huesIndicate[6] = hue
        huesIndicate[7] = hue
    }
    if (regions.includes("C")) {
        huesIndicate[12] = hue
        huesIndicate[13] = hue
    }
    if (regions.includes("D")) {
        huesIndicate[4] = hue
        huesIndicate[5] = hue
    }
    if (regions.includes("E")) {
        huesIndicate[14] = hue
        huesIndicate[15] = hue
    }
    if (regions.includes("F")) {
        huesIndicate[2] = hue
        huesIndicate[3] = hue
    }
    if (regions.includes("G")) {
        huesIndicate[16] = hue
        huesIndicate[17] = hue
    }
    if (regions.includes("H")) {
        huesIndicate[0] = hue
        huesIndicate[1] = hue
    }
    if (regions.includes("I")) {
        huesIndicate[18] = hue
        huesIndicate[19] = hue
    }
    if (regions.includes("J")) {
        huesIndicate[21] = hue
    }
    if (regions.includes("K")) {
        huesIndicate[22] = hue
        huesIndicate[23] = hue
    }
    if (regions.includes("L")) {
        huesIndicate[24] = hue
    }
    if (regions.includes("M")) {
        huesIndicate[25] = hue
    }
    if (regions.includes("N")) {
        huesIndicate[26] = hue
    }
    if (regions.includes("O")) {
        huesIndicate[20] = hue
        huesIndicate[27] = hue
    }
    if (regions.includes("P")) {
        huesIndicate[28] = hue
        huesIndicate[29] = hue
        huesIndicate[30] = hue
        huesIndicate[31] = hue
    }
    if (regions.includes("X")) {
        lightLoop = 0
        while (lightLoop <= 19) {
            huesIndicate[lightLoop] = hue
            lightLoop = lightLoop + 1
        }
    }
    if (regions.includes("Y")) {
        lightLoop = 20
        while (lightLoop <= 31) {
            huesIndicate[lightLoop] = hue
            lightLoop = lightLoop + 1
        }
    }
    if (regions.includes("Z")) {
        lightLoop = 0
        while (lightLoop <= 31) {
            huesIndicate[lightLoop] = hue
            lightLoop = lightLoop + 1
        }
    }
}
function glowTickBAK () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        thisBrightness = brightsGlow[light2]
        if (thisBrightness < 150) {
            brightsGlow[light2] = thisBrightness + 2.5
        } else if (thisBrightness >= 150) {
            brightsGlow[light2] = 0
        }
    }
}
function mineTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        thisBrightness = brightsMine[light2]
        if (togglesMine[light2] == 0) {
            if (thisBrightness < 200) {
                brightsMine[light2] = thisBrightness + 50
            } else if (thisBrightness >= 200) {
                togglesMine[light2] = 1
            }
        } else if (togglesMine[light2] == 1) {
            if (thisBrightness > 0) {
                brightsMine[light2] = thisBrightness - 50
            } else if (thisBrightness <= 0) {
                togglesMine[light2] = 0
            }
        }
    }
}
function setEffect (regions: string, effect: string) {
    if (regions.includes("A")) {
        stripEffects[8] = effect
        stripEffects[9] = effect
        stripEffects[10] = effect
        stripEffects[11] = effect
    }
    if (regions.includes("B")) {
        stripEffects[6] = effect
        stripEffects[7] = effect
    }
    if (regions.includes("C")) {
        stripEffects[12] = effect
        stripEffects[13] = effect
    }
    if (regions.includes("D")) {
        stripEffects[4] = effect
        stripEffects[5] = effect
    }
    if (regions.includes("E")) {
        stripEffects[14] = effect
        stripEffects[15] = effect
    }
    if (regions.includes("F")) {
        stripEffects[2] = effect
        stripEffects[3] = effect
    }
    if (regions.includes("G")) {
        stripEffects[16] = effect
        stripEffects[17] = effect
    }
    if (regions.includes("H")) {
        stripEffects[0] = effect
        stripEffects[1] = effect
    }
    if (regions.includes("I")) {
        stripEffects[18] = effect
        stripEffects[19] = effect
    }
    if (regions.includes("J")) {
        stripEffects[21] = effect
    }
    if (regions.includes("K")) {
        stripEffects[22] = effect
        stripEffects[23] = effect
    }
    if (regions.includes("L")) {
        stripEffects[24] = effect
    }
    if (regions.includes("M")) {
        stripEffects[25] = effect
    }
    if (regions.includes("N")) {
        stripEffects[26] = effect
    }
    if (regions.includes("O")) {
        stripEffects[20] = effect
        stripEffects[27] = effect
    }
    if (regions.includes("P")) {
        stripEffects[28] = effect
        stripEffects[29] = effect
        stripEffects[30] = effect
        stripEffects[31] = effect
    }
    if (regions.includes("X")) {
        lightLoop = 0
        while (lightLoop <= 19) {
            stripEffects[lightLoop] = effect
            lightLoop = lightLoop + 1
        }
    }
    if (regions.includes("Y")) {
        lightLoop = 20
        while (lightLoop <= 31) {
            stripEffects[lightLoop] = effect
            lightLoop = lightLoop + 1
        }
    }
    if (regions.includes("Z")) {
        lightLoop = 0
        while (lightLoop <= 31) {
            stripEffects[lightLoop] = effect
            lightLoop = lightLoop + 1
        }
    }
}
function fanVent () {
    if (pins.analogReadPin(AnalogReadWritePin.P0) < 10) {
        basic.pause(7000)
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 15)
        Kong.setServoAngel(Kong.ServoList.S0, 140)
        basic.pause(1000)
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 12)
        basic.pause(6000)
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 0)
        Kong.setServoAngel(Kong.ServoList.S0, 50)
    }
}
function hueToLetter (hue: number) {
    if (hue == 0) {
        return "R"
    } else if (hue == 15) {
        return "O"
    } else if (hue == 40) {
        return "Y"
    } else if ((0 as any) == (85 as any)) {
        return "L"
    } else if ((0 as any) == (110 as any)) {
        return "G"
    } else if ((0 as any) == (170 as any)) {
        return "C"
    } else if ((0 as any) == (240 as any)) {
        return "B"
    } else if ((0 as any) == (265 as any)) {
        return "P"
    } else if ((0 as any) == (310 as any)) {
        return "K"
    } else {
        return "Z"
    }
}
radio.onReceivedValue(function (name, value) {
    Connected.showUserText(3, "" + name + value)
    if (name.substr(0, btToken.length) == btToken) {
        position = name.substr(btToken.length, name.length - btToken.length)
        if (position.length > 1) {
            if (position == "Intro") {
                if (value > 50) {
                    Kong.ksetMotorSpeed(Kong.MotorList.M1, 12)
                    setEffect("Z", "Parade")
                    pulseFan = false
                    fogLevel = 3
                    Kong.setServoAngel(Kong.ServoList.S0, 50)
                } else if (value == 0) {
                    Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
                    runGlow()
                    setEffect("Z", "Glow")
                } else if (value == 1) {
                    basic.pause(1000)
                    setEffect("Z", "Fire")
                    setEffect("HI", "Step")
                } else if (value == 2) {
                    basic.pause(1500)
                    setEffect("X", "Off")
                    setEffect("HI", "Indicate")
                    basic.pause(2000)
                    setEffect("Z", "Off")
                    setEffect("HI", "Indicate")
                    basic.pause(3000)
                    setEffect("Z", "Off")
                    setEffect("K", "Indicate")
                    basic.pause(3000)
                    setEffect("Z", "Off")
                    setEffect("CE", "Indicate")
                } else if (value == 6) {
                    setEffect("Z", "Idle")
                } else if (value == 11) {
                    setEffect("Z", "Idle")
                    setEffect("A", "Indicate")
                } else if (value == 14) {
                    setEffect("X", "Off")
                    setEffect("A", "Indicate")
                } else if (value == 15) {
                    doWalk()
                } else if (value == 16) {
                    setEffect("A", "Indicate")
                } else if (value == 17) {
                    setEffect("A", "Step")
                } else if (value == 18) {
                    setEffect("X", "Off")
                    setEffect("X", "Indicate")
                    setEffect("A", "Off")
                } else if (value == 19) {
                    basic.pause(1000)
                    setEffect("X", "Off")
                } else if (value == 23) {
                    Kong.setServoAngel(Kong.ServoList.S7, 110)
                    setEffect("B", "Mine")
                } else if (value == 24) {
                    Kong.setServoAngel(Kong.ServoList.S2, 40)
                    setEffect("HI", "Mine")
                } else if (value == 25) {
                    Kong.setServoAngel(Kong.ServoList.S1, 85)
                    setEffect("C", "Mine")
                } else if (value == 26) {
                    setEffect("BCHI", "Off")
                    Kong.setServoAngel(Kong.ServoList.S7, 50)
                    Kong.setServoAngel(Kong.ServoList.S2, 110)
                    Kong.setServoAngel(Kong.ServoList.S1, 20)
                } else if (value == 27) {
                    setEffect("CE", "Indicate")
                } else if (value == 28) {
                    setEffect("K", "Indicate")
                } else if (value == 29) {
                	
                } else if (value == 30) {
                    setEffect("Z", "Off")
                    setEffect("Y", "Idle")
                    basic.pause(0)
                    setEffect("K", "Indicate")
                    basic.pause(2000)
                    setEffect("CE", "Indicate")
                    basic.pause(2000)
                    fanVent()
                    pulseFan = true
                    fogLevel = 1
                } else {
                	
                }
            } else if (position == "Sock") {
            	
            } else if (position == "Won") {
                if (value == 0) {
                    setEffect("Z", "Parade")
                } else if (value == 1) {
                	
                } else if (value == 2) {
                    Kong.ksetMotorSpeed(Kong.MotorList.M1, 10)
                } else if (value == 3) {
                	
                } else if (value == 4) {
                	
                } else if (value == 5) {
                    pins.digitalWritePin(DigitalPin.P12, 0)
                } else if (value == 6) {
                    Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
                } else if (value == 7) {
                	
                } else if (value == 8) {
                	
                } else if (value == 9) {
                    pins.digitalWritePin(DigitalPin.P12, 1)
                } else if (value == 10) {
                	
                }
            } else if (position == "Lost") {
                if (value == 0) {
                    fogLevel = 3
                    pulseFan = false
                    setEffect("Z", "Off")
                    setEffect("K", "Mine")
                } else if (value == 1) {
                    Kong.setServoAngel(Kong.ServoList.S6, 79)
                } else if (value == 2) {
                	
                } else if (value == 3) {
                    setEffect("M", "Mine")
                    setEffect("K", "Off")
                } else if (value == 4) {
                    setEffect("Z", "Bright")
                    basic.pause(350)
                    setEffect("Z", "Fire")
                } else if (value == 5) {
                	
                } else if (value == 6) {
                    Kong.setServoAngel(Kong.ServoList.S6, 90)
                } else if (value == 7) {
                    pins.digitalWritePin(DigitalPin.P12, 0)
                } else if (value == 8) {
                	
                } else if (value == 9) {
                	
                } else if (value == 10) {
                    pins.digitalWritePin(DigitalPin.P12, 1)
                    fogLevel = 0
                    fanVent()
                    setEffect("Z", "Off")
                    fogLevel = 0
                    pulseFan = false
                }
            } else if (position == "Turn") {
            	
            } else if (position.charAt(0) == "m") {
                Connected.showUserText(8, position)
            } else {
            	
            }
        } else {
            if (value == 1) {
                doStep(position, "Step")
            } else if (value == 2) {
                doStep(position, "Indicate")
            } else if (value == 3) {
                doStep(position, "Mine")
            } else if (value == 4) {
                doStep(position, "Win")
            } else {
            	
            }
        }
    }
})
function runMine () {
    for (let index = 0; index <= totalLights - 1; index++) {
        brightsMine[index] = 50
        togglesMine[index] = 0
    }
}
function indicateTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        thisBrightness = brightsIndicate[light2]
        if (togglesIndicate[light2] == 0) {
            if (thisBrightness < 80) {
                brightsIndicate[light2] = thisBrightness + 15
            } else if (thisBrightness >= 80) {
                togglesIndicate[light2] = 1
            }
        } else if (togglesIndicate[light2] == 1) {
            if (thisBrightness > 25) {
                brightsIndicate[light2] = thisBrightness - 5
            } else if (thisBrightness <= 25) {
                togglesIndicate[light2] = 0
            }
        }
    }
}
let thisBright = 0
let thisSaturation = 0
let thisHue = 0
let thisEffect = ""
let buttonPress = ""
let buttonRaw = 0
let position = ""
let togglesMine: number[] = []
let brightsMine: number[] = []
let lightLoop = 0
let saturationFire: number[] = []
let thisH = 0
let togglesIndicate: number[] = []
let brightsIndicate: number[] = []
let togglesIdle: number[] = []
let huesIdle: number[] = []
let brightsGlow: number[] = []
let thisBrightness = 0
let nextColor = ""
let togglesFire: number[] = []
let huesFire: number[] = []
let theColor = ""
let brightsFire: number[] = []
let theBright = 0
let colorsFire: string[] = []
let huesIndicate: number[] = []
let totalLights = 0
let togglesParade: number[] = []
let huesParade: number[] = []
let saturationParade: number[] = []
let brightsParade: number[] = []
let stripEffects: string[] = []
let colorsParade: string[] = []
let fogLevel = 0
let pulseFan = false
let btToken = ""
basic.showIcon(IconNames.Heart)
basic.pause(200)
led.enable(false)
pins.setAudioPinEnabled(false)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
let btGroup = 171
btToken = "KC$"
radio.setGroup(btGroup)
let fogOn = true
pulseFan = false
fogLevel = 0
let nextColor2 = 0
colorsParade = []
stripEffects = []
brightsParade = []
let brightnessLast: number[] = []
saturationParade = []
let saturationLast: number[] = []
huesParade = []
let huesLast: number[] = []
togglesParade = []
totalLights = 20 + 8 + 4
let brightMinParade = 0
let brightMaxParade = 0
let attackParade = 0
let retreatParade = 0
let brightnessCutoff = 0
let stripOnParade = false
let effectStagger = false
let colorNoRepeat = false
Connected.showUserText(1, "goodbye, daisy")
let placeStrip = kongpixel.create(DigitalPin.P14, 20, KongPixelMode.RGB)
let brickStrip = kongpixel.create(DigitalPin.P15, 8, KongPixelMode.RGB)
let kongStrip = kongpixel.create(DigitalPin.P16, 4, KongPixelMode.RGB)
for (let index = 0; index < totalLights; index++) {
    brightsParade.push(50)
    brightnessLast.push(50)
    togglesParade.push(0)
    huesParade.push(50)
    huesIndicate.push(0)
    huesLast.push(50)
    saturationParade.push(100)
    stripEffects.push("Indicate")
}
Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
Kong.ksetMotorSpeed(Kong.MotorList.M2, 0)
Kong.setServoAngel(Kong.ServoList.S0, 50)
Kong.setServoAngel(Kong.ServoList.S1, 20)
Kong.setServoAngel(Kong.ServoList.S2, 110)
Kong.setServoAngel(Kong.ServoList.S3, 130)
Kong.setServoAngel(Kong.ServoList.S4, 65)
Kong.setServoAngel(Kong.ServoList.S5, 135)
Kong.setServoAngel(Kong.ServoList.S6, 90)
Kong.setServoAngel(Kong.ServoList.S7, 50)
colorsParade = "R,O,Y,C,B,P".split(",")
colorsFire = "R,R,R,R,O,O,O,O,O,Y".split(",")
let lightsOn = true
runParade()
runFire()
runIdle()
runMine()
runIndicate()
setHues("A", letterToHue("R"))
setHues("B", letterToHue("Y"))
setHues("C", letterToHue("B"))
setHues("D", letterToHue("O"))
setHues("E", letterToHue("C"))
setHues("F", letterToHue("K"))
setHues("G", letterToHue("P"))
setHues("H", letterToHue("C"))
setHues("I", letterToHue("G"))
setHues("K", letterToHue("Y"))
loops.everyInterval(10000, function () {
    if (pulseFan && pins.analogReadPin(AnalogReadWritePin.P0) < 10) {
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 15)
        basic.pause(500)
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 10)
        basic.pause(300)
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 8)
        basic.pause(500)
        Kong.ksetMotorSpeed(Kong.MotorList.M2, 0)
    }
})
loops.everyInterval(500, function () {
    if (pins.analogReadPin(AnalogReadWritePin.P0) > 10) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        if (fogLevel == 1) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else if (fogLevel == 2) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else if (fogLevel == 3) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P13, 1)
        }
    }
})
loops.everyInterval(500, function () {
    buttonRaw = pins.analogReadPin(AnalogReadWritePin.P1)
    if (buttonRaw < 10) {
        buttonPress = "A"
    } else if (buttonRaw < 60) {
        buttonPress = "B"
    } else if (buttonRaw < 110) {
        buttonPress = "C"
        Kong.ksetMotorSpeed(Kong.MotorList.M1, 20)
        runParade()
    } else if (buttonRaw < 200) {
        buttonPress = "D"
        runParade()
    } else if (buttonRaw < 700) {
        buttonPress = "E"
        Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
        runParade()
    }
    Connected.showUserText(5, "button: " + buttonPress)
    basic.pause(500)
})
control.inBackground(function () {
    while (lightsOn) {
        paradeTick()
        fireTick()
        idleTick()
        mineTick()
        glowTick()
        indicateTick()
        for (let lightIndex = 0; lightIndex <= totalLights - 1; lightIndex++) {
            thisEffect = stripEffects[lightIndex]
            thisHue = huesLast[lightIndex]
            thisSaturation = saturationLast[lightIndex]
            thisBright = brightnessLast[lightIndex]
            if (thisEffect == "Steady") {
            	
            } else if (thisEffect == "Parade") {
                thisHue = huesParade[lightIndex]
                thisBright = brightsParade[lightIndex]
                thisSaturation = saturationParade[lightIndex]
                if (thisBright > 50 && thisBright < 100) {
                    thisBright = 50
                } else if (thisBright < 0) {
                    thisBright = 0
                }
            } else if (thisEffect == "Off") {
                thisHue = 0
                thisBright = 0
                thisSaturation = 0
            } else if (thisEffect == "Idle") {
                thisHue = huesIdle[lightIndex]
                thisBright = 50
                thisSaturation = 100
            } else if (thisEffect == "Step") {
                thisBright = 100
            } else if (thisEffect == "Mine") {
                thisHue = letterToHue("R")
                thisSaturation = 100
                thisBright = Math.min(50, brightsMine[lightIndex])
            } else if (thisEffect == "Indicate") {
                thisBright = Math.min(brightsIndicate[lightIndex], 50)
                thisSaturation = 100
                thisHue = huesIndicate[lightIndex]
            } else if (thisEffect == "Fire") {
                thisHue = huesFire[lightIndex]
                thisBright = brightsFire[lightIndex]
                thisSaturation = saturationFire[lightIndex]
                if (thisBright > 50 && thisBright < 100) {
                    thisBright = 50
                } else if (thisBright < 0) {
                    thisBright = 0
                }
            } else if (thisEffect == "Glow") {
                thisBright = Math.min(brightsGlow[lightIndex], 100)
                thisSaturation = 0
            } else if (thisEffect == "Bright") {
                thisBright = 100
                thisSaturation = 0
            }
            huesLast[lightIndex] = thisHue
            saturationLast[lightIndex] = thisSaturation
            brightnessLast[lightIndex] = thisBright
            if (lightIndex < 20) {
                placeStrip.setPixelColor(lightIndex, kongpixel.hsl(thisHue, thisSaturation, thisBright))
            } else if (lightIndex < 28) {
                brickStrip.setPixelColor(lightIndex - 20, kongpixel.hsl(thisHue, thisSaturation, thisBright))
            } else if (lightIndex < 32) {
                kongStrip.setPixelColor(lightIndex - 28, kongpixel.hsl(thisHue, thisSaturation, thisBright))
            }
        }
        placeStrip.show()
        brickStrip.show()
        kongStrip.show()
        basic.pause(40)
    }
})
