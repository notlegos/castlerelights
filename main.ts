function runParade (event: string) {
    if (event == "stop") {
        stripOnParade = false
    } else {
        if (event == "win") {
            colorNoRepeat = true
            effectStagger = true
            stripMinBright = 10
            stripMaxBright = 65
            stripColors = "R,O,Y,C,B,P".split(",")
            stripAttack = 15
            stripRetreat = 5
            brightnessCutoff = 50
        } else if (event == "fire") {
            colorNoRepeat = true
            effectStagger = true
            stripMinBright = 30
            stripMaxBright = 80
            stripColors = "R,R,R,R,O,O,O,O,O,Y".split(",")
            stripAttack = 15
            stripRetreat = 5
            brightnessCutoff = 50
        } else if (event == "welcome") {
            colorNoRepeat = false
            effectStagger = false
            stripMinBright = 0
            stripMaxBright = 100
            stripColors = "R".split(",")
            stripAttack = 2
            stripRetreat = 1
            brightnessCutoff = 100
            for (let index2 = 0; index2 <= totalLights - 1; index2++) {
                saturationParade[index2] = 0
            }
        } else {
        	
        }
    }
    for (let index = 0; index <= totalLights - 1; index++) {
        huesParade[index] = letterToHue(stripColors[randint(0, stripColors.length - 1)])
        if (effectStagger) {
            saturationParade[index] = 100
            stripToggles[index] = randint(0, 1)
            brightsParade[index] = randint(stripMinBright, brightnessCutoff)
        } else {
            stripToggles[index] = 0
            brightsParade[index] = stripMinBright
        }
    }
    stripOnParade = true
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
function paradeTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        theBright = brightsParade[light2]
        theColor = hueToLetter(huesParade[light2])
        if (stripToggles[light2] == 0) {
            if (theBright < stripMaxBright) {
                brightsParade[light2] = theBright + stripAttack
            } else if (theBright >= stripMaxBright) {
                stripToggles[light2] = 1
            }
        } else if (stripToggles[light2] == 1) {
            if (theBright > stripMinBright) {
                brightsParade[light2] = theBright - stripRetreat
            } else if (theBright <= stripMinBright) {
                stripToggles[light2] = 0
                nextColor = stripColors[randint(0, stripColors.length - 1)]
                if (colorNoRepeat) {
                    while (nextColor == theColor) {
                        nextColor = stripColors[randint(0, stripColors.length - 1)]
                    }
                }
                huesParade[light2] = letterToHue(nextColor)
                if (effectStagger) {
                    brightsParade[light2] = theBright - randint(0, stripMinBright)
                } else {
                    brightsParade[light2] = theBright - stripMinBright
                }
            }
        }
    }
}
function stripString (theColors: string) {
    for (let index2 = 0; index2 <= totalLights - 1; index2++) {
        huesParade[index2] = letterToHue(theColors.charAt(index2))
    }
}
function breatheTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        theBright = brightsParade[light2]
        theColor = hueToLetter(huesParade[light2])
        if (stripToggles[light2] == 0) {
            if (theBright < stripMaxBright) {
                brightsParade[light2] = theBright + stripAttack
            } else if (theBright >= stripMaxBright) {
                stripToggles[light2] = 1
            }
        } else if (stripToggles[light2] == 1) {
            if (theBright > stripMinBright) {
                brightsParade[light2] = theBright - stripRetreat
            } else if (theBright <= stripMinBright) {
                stripToggles[light2] = 0
                nextColor = stripColors[randint(0, stripColors.length - 1)]
                if (colorNoRepeat) {
                    while (nextColor == theColor) {
                        nextColor = stripColors[randint(0, stripColors.length - 1)]
                    }
                }
                huesParade[light2] = letterToHue(nextColor)
                if (effectStagger) {
                    brightsParade[light2] = theBright - randint(0, stripMinBright)
                } else {
                    brightsParade[light2] = theBright - stripMinBright
                }
            }
        }
    }
}
function mineTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        theBright = brightsParade[light2]
        theColor = hueToLetter(huesParade[light2])
        if (stripToggles[light2] == 0) {
            if (theBright < stripMaxBright) {
                brightsParade[light2] = theBright + stripAttack
            } else if (theBright >= stripMaxBright) {
                stripToggles[light2] = 1
            }
        } else if (stripToggles[light2] == 1) {
            if (theBright > stripMinBright) {
                brightsParade[light2] = theBright - stripRetreat
            } else if (theBright <= stripMinBright) {
                stripToggles[light2] = 0
                nextColor = stripColors[randint(0, stripColors.length - 1)]
                if (colorNoRepeat) {
                    while (nextColor == theColor) {
                        nextColor = stripColors[randint(0, stripColors.length - 1)]
                    }
                }
                huesParade[light2] = letterToHue(nextColor)
                if (effectStagger) {
                    brightsParade[light2] = theBright - randint(0, stripMinBright)
                } else {
                    brightsParade[light2] = theBright - stripMinBright
                }
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
    } else if (regions.includes("B")) {
        stripEffects[6] = effect
        stripEffects[7] = effect
    } else if (regions.includes("C")) {
        stripEffects[12] = effect
        stripEffects[13] = effect
    } else if (regions.includes("D")) {
        stripEffects[4] = effect
        stripEffects[5] = effect
    } else if (regions.includes("E")) {
        stripEffects[14] = effect
        stripEffects[15] = effect
    } else if (regions.includes("F")) {
        stripEffects[2] = effect
        stripEffects[3] = effect
    } else if (regions.includes("G")) {
        stripEffects[16] = effect
        stripEffects[17] = effect
    } else if (regions.includes("H")) {
        stripEffects[0] = effect
        stripEffects[1] = effect
    } else if (regions.includes("I")) {
        stripEffects[18] = effect
        stripEffects[19] = effect
    } else if (regions.includes("J")) {
        stripEffects[21] = effect
    } else if (regions.includes("K")) {
        stripEffects[22] = effect
        stripEffects[23] = effect
    } else if (regions.includes("L")) {
        stripEffects[24] = effect
    } else if (regions.includes("M")) {
        stripEffects[25] = effect
    } else if (regions.includes("N")) {
        stripEffects[26] = effect
    } else if (regions.includes("O")) {
        stripEffects[20] = effect
        stripEffects[27] = effect
    } else if (regions.includes("P")) {
        stripEffects[28] = effect
        stripEffects[29] = effect
        stripEffects[30] = effect
        stripEffects[31] = effect
    } else if (regions.includes("X")) {
        lightLoop = 0
        while (lightLoop <= 19) {
            stripEffects[lightLoop] = effect
            lightLoop = lightLoop + 1
        }
    } else if (regions.includes("Y")) {
        lightLoop = 20
        while (lightLoop <= 31) {
            stripEffects[lightLoop] = effect
            lightLoop = lightLoop + 1
        }
    } else if (regions.includes("Z")) {
        lightLoop = 0
        while (lightLoop <= 31) {
            stripEffects[lightLoop] = effect
            lightLoop = lightLoop + 1
        }
    }
}
function toRGB (Color: string, RGB: string) {
    R = 0
    G = 0
    B = 0
    if (Color == "Red") {
        R = 255
        G = 0
        B = 0
    } else if (Color == "White") {
        R = 255
        G = 255
        B = 255
    } else if (Color == "Off") {
        R = 0
        G = 0
        B = 0
    } else if (Color == "Yellow") {
        R = 139
        G = 128
        B = 0
    } else if (Color == "Blue") {
        R = 0
        G = 0
        B = 255
    } else if (Color == "Green") {
        R = 0
        G = 255
        B = 0
    } else if (Color == "Orange") {
        R = 255
        G = 80
        B = 0
    } else if (Color == "Purple") {
        R = 102
        G = 0
        B = 255
    } else {
    	
    }
    if (RGB == "R") {
        return R
    } else if (RGB == "G") {
        return G
    } else {
        return B
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
function setBricks (WheelL: string, WheelR: string, DragonL: string, DragonR: string, Ghosts: string, Bomb: string, Shell: string, Cannon: string) {
    let brickLights: Connected.Strip = null
    if (WheelL != "") {
        brickLights.setPixelColor(7, Connected.rgb(toRGB(WheelL, "R"), toRGB(WheelL, "G"), toRGB(WheelL, "B")))
    }
    if (WheelR != "") {
        brickLights.setPixelColor(0, Connected.rgb(toRGB(WheelR, "R"), toRGB(WheelR, "G"), toRGB(WheelR, "B")))
    }
    if (DragonL != "") {
        brickLights.setPixelColor(3, Connected.rgb(toRGB(DragonL, "R"), toRGB(DragonL, "G"), toRGB(DragonL, "B")))
    }
    if (DragonR != "") {
        brickLights.setPixelColor(2, Connected.rgb(toRGB(DragonR, "R"), toRGB(DragonR, "G"), toRGB(DragonR, "B")))
    }
    if (Ghosts != "") {
        brickLights.setPixelColor(4, Connected.rgb(toRGB(Ghosts, "R"), toRGB(Ghosts, "G"), toRGB(Ghosts, "B")))
    }
    if (Bomb != "") {
        brickLights.setPixelColor(5, Connected.rgb(toRGB(Bomb, "R"), toRGB(Bomb, "G"), toRGB(Bomb, "B")))
    }
    if (Shell != "") {
        brickLights.setPixelColor(6, Connected.rgb(toRGB(Shell, "R"), toRGB(Shell, "G"), toRGB(Shell, "B")))
    }
    if (Cannon != "") {
        brickLights.setPixelColor(1, Connected.rgb(toRGB(Cannon, "R"), toRGB(Cannon, "G"), toRGB(Cannon, "B")))
    }
    brickLights.show()
}
function lightSpace (Space: string, Effect: string) {
    if (Space == "A") {
        if (Effect == "Step") {
            setStrip("White", "White", "Yellow", "Yellow", "Off", "Off", "Off", "Off", "Off", "Off")
        }
    } else if (Space == "B") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "White", "Off", "Yellow", "", "", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "Red", "", "", "", "", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S7, 110)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S7, 50)
            setStrip("", "", "Off", "", "", "", "", "", "", "")
        }
    } else if (Space == "C") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "White", "Off", "Yellow", "", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "Red", "", "", "", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
            setStrip("", "", "", "Off", "", "", "", "", "", "")
        }
    } else if (Space == "D") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "Off", "White", "Yellow", "Yellow", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "Red", "", "", "", "", "")
            setBricks("", "", "", "", "", "", "", "Yellow")
            Kong.setServoAngel(Kong.ServoList.S5, 65)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S5, 135)
            setBricks("", "", "", "", "", "", "", "Off")
            setStrip("", "", "", "", "Off", "", "", "", "", "")
        }
    } else if (Space == "E") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "Off", "Yellow", "White", "Off", "Yellow", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "Red", "", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
            setStrip("", "", "", "", "", "Off", "", "", "", "")
        }
    } else if (Space == "F") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "Off", "Off", "Off", "White", "Off", "Yellow", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "Red", "", "", "")
            setBricks("", "", "", "", "", "", "Blue", "")
            Kong.setServoAngel(Kong.ServoList.S3, 50)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S3, 120)
            setBricks("", "", "", "", "", "", "Off", "")
            setStrip("", "", "", "", "", "", "Off", "", "", "")
        }
    } else if (Space == "G") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "Off", "Off", "Off", "Off", "White", "Off", "Yellow")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "", "Red", "", "")
            setBricks("", "", "", "", "Blue", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S2, 40)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S2, 110)
            setBricks("", "", "", "", "Off", "", "", "")
            setStrip("", "", "", "", "", "", "", "Off", "", "")
        }
    } else if (Space == "H") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "White", "Yellow")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "", "", "Red", "")
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
            setStrip("", "", "", "", "", "", "", "", "Off", "")
        } else if (Effect == "Win") {
            setStrip("", "", "", "", "", "", "", "", "Blue", "")
            basic.pause(2000)
            setStrip("", "", "", "", "", "", "", "", "Off", "")
        }
    } else if (Space == "I") {
        if (Effect == "Step") {
            setStrip("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Yellow", "White")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "", "", "", "Red")
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
            setStrip("", "", "", "", "", "", "", "", "", "Off")
        } else if (Effect == "Win") {
            setStrip("", "", "", "", "", "", "", "", "", "Blue")
            basic.pause(2000)
            setStrip("", "", "", "", "", "", "", "", "", "Off")
        }
    }
}
radio.onReceivedValue(function (name, value) {
    Connected.showUserText(3, "" + name + value)
    if (name.substr(0, btToken.length) == btToken) {
        position = name.substr(btToken.length, name.length - btToken.length)
        if (position.length > 1) {
            if (position == "Intro") {
                if (value == 1) {
                    pulseFan = false
                    fogLevel = 3
                    Kong.setServoAngel(Kong.ServoList.S0, 50)
                    basic.pause(1500)
                    runParade("welcome")
                } else if (value == 1) {
                	
                } else if (value == 2) {
                    runParade("win")
                } else if (value == 3) {
                    setEffect("Z", "Off")
                } else if (value == 4) {
                	
                } else if (value == 5) {
                	
                } else if (value == 6) {
                	
                } else if (value == 7) {
                	
                } else if (value == 8) {
                	
                } else if (value == 9) {
                	
                } else if (value == 10) {
                	
                } else if (value == 11) {
                	
                } else if (value == 12) {
                	
                } else if (value == 13) {
                	
                } else if (value == 14) {
                	
                } else if (value == 15) {
                	
                } else if (value == 16) {
                	
                } else if (value == 17) {
                	
                } else if (value == 18) {
                	
                } else if (value == 19) {
                	
                } else if (value == 20) {
                	
                } else if (value == 21) {
                	
                } else if (value == 22) {
                	
                } else if (value == 23) {
                	
                } else if (value == 30) {
                    if (pins.analogReadPin(AnalogPin.P0) < 10) {
                        basic.pause(7000)
                        Kong.ksetMotorSpeed(Kong.MotorList.M2, 15)
                        Kong.setServoAngel(Kong.ServoList.S0, 140)
                        basic.pause(1000)
                        Kong.ksetMotorSpeed(Kong.MotorList.M2, 12)
                        basic.pause(6000)
                        Kong.ksetMotorSpeed(Kong.MotorList.M2, 0)
                        Kong.setServoAngel(Kong.ServoList.S0, 50)
                    }
                    pulseFan = true
                    fogLevel = 1
                } else if (false) {
                	
                } else if (false) {
                	
                }
            } else if (position == "Sock") {
            	
            } else if (position == "Win") {
                if (value == 0) {
                	
                } else if (value == 1) {
                	
                } else if (value == 2) {
                	
                } else if (value == 3) {
                	
                }
            } else if (position == "Over") {
                if (value == 0) {
                	
                } else if (value == 1) {
                	
                } else if (value == 2) {
                	
                } else if (value == 3) {
                	
                }
            } else if (position == "Turn") {
            	
            } else if (position.charAt(0) == "m") {
                Connected.showUserText(8, position)
            } else {
            	
            }
        } else {
            if (value == 1) {
                lightSpace("abc", "abc")
            } else if (value == 2) {
                lightSpace("abc", "abc")
            } else if (value == 3) {
                lightSpace("abc", "abc")
            }
        }
    }
})
function setStrip (A1: string, A2: string, B: string, C: string, D: string, E: string, F: string, G: string, H: string, I: string) {
    let lightStrip: Connected.Strip = null
    if (A1 != "") {
        colorA1 = Connected.rgb(toRGB(A1, "R"), toRGB(A1, "G"), toRGB(A1, "B"))
        lightStrip.setPixelColor(8, colorA1)
        lightStrip.setPixelColor(9, colorA1)
    }
    if (A2 != "") {
        colorA2 = Connected.rgb(toRGB(A2, "R"), toRGB(A2, "G"), toRGB(A2, "B"))
        lightStrip.setPixelColor(10, colorA2)
        lightStrip.setPixelColor(11, colorA2)
    }
    if (B != "") {
        colorB = Connected.rgb(toRGB(B, "R"), toRGB(B, "G"), toRGB(B, "B"))
        lightStrip.setPixelColor(6, colorB)
        lightStrip.setPixelColor(7, colorB)
    }
    if (C != "") {
        colorC = Connected.rgb(toRGB(C, "R"), toRGB(C, "G"), toRGB(C, "B"))
        lightStrip.setPixelColor(12, colorC)
        lightStrip.setPixelColor(13, colorC)
    }
    if (D != "") {
        colorD = Connected.rgb(toRGB(D, "R"), toRGB(D, "G"), toRGB(D, "B"))
        lightStrip.setPixelColor(4, colorD)
        lightStrip.setPixelColor(5, colorD)
    }
    if (E != "") {
        colorE = Connected.rgb(toRGB(E, "R"), toRGB(E, "G"), toRGB(E, "B"))
        lightStrip.setPixelColor(14, colorE)
        lightStrip.setPixelColor(15, colorE)
    }
    if (F != "") {
        colorF = Connected.rgb(toRGB(F, "R"), toRGB(F, "G"), toRGB(F, "B"))
        lightStrip.setPixelColor(2, colorF)
        lightStrip.setPixelColor(3, colorF)
    }
    if (G != "") {
        colorG = Connected.rgb(toRGB(G, "R"), toRGB(G, "G"), toRGB(G, "B"))
        lightStrip.setPixelColor(16, colorG)
        lightStrip.setPixelColor(17, colorG)
    }
    if (H != "") {
        colorH = Connected.rgb(toRGB(H, "R"), toRGB(H, "G"), toRGB(H, "B"))
        lightStrip.setPixelColor(0, colorH)
        lightStrip.setPixelColor(1, colorH)
    }
    if (I != "") {
        colorI = Connected.rgb(toRGB(I, "R"), toRGB(I, "G"), toRGB(I, "B"))
        lightStrip.setPixelColor(18, colorI)
        lightStrip.setPixelColor(19, colorI)
    }
    lightStrip.show()
}
function flashTick () {
    for (let light2 = 0; light2 <= totalLights - 1; light2++) {
        theBright = brightsParade[light2]
        theColor = hueToLetter(huesParade[light2])
        if (stripToggles[light2] == 0) {
            if (theBright < stripMaxBright) {
                brightsParade[light2] = theBright + stripAttack
            } else if (theBright >= stripMaxBright) {
                stripToggles[light2] = 1
            }
        } else if (stripToggles[light2] == 1) {
            if (theBright > stripMinBright) {
                brightsParade[light2] = theBright - stripRetreat
            } else if (theBright <= stripMinBright) {
                stripToggles[light2] = 0
                nextColor = stripColors[randint(0, stripColors.length - 1)]
                if (colorNoRepeat) {
                    while (nextColor == theColor) {
                        nextColor = stripColors[randint(0, stripColors.length - 1)]
                    }
                }
                huesParade[light2] = letterToHue(nextColor)
                if (effectStagger) {
                    brightsParade[light2] = theBright - randint(0, stripMinBright)
                } else {
                    brightsParade[light2] = theBright - stripMinBright
                }
            }
        }
    }
}
let thisSaturation = 0
let thisBright = 0
let thisHue = 0
let thisEffect = ""
let buttonPress = ""
let buttonRaw = 0
let colorI = 0
let colorH = 0
let colorG = 0
let colorF = 0
let colorE = 0
let colorD = 0
let colorC = 0
let colorB = 0
let colorA2 = 0
let colorA1 = 0
let position = ""
let B = 0
let G = 0
let R = 0
let lightLoop = 0
let nextColor = ""
let theColor = ""
let theBright = 0
let colorNoRepeat = false
let effectStagger = false
let stripOnParade = false
let brightnessCutoff = 0
let stripRetreat = 0
let stripAttack = 0
let stripMaxBright = 0
let stripMinBright = 0
let totalLights = 0
let stripToggles: number[] = []
let huesParade: number[] = []
let saturationParade: number[] = []
let brightsParade: number[] = []
let stripEffects: string[] = []
let stripColors: string[] = []
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
stripColors = []
stripEffects = []
brightsParade = []
saturationParade = []
huesParade = []
stripToggles = []
totalLights = 20 + 8 + 4
stripMinBright = 0
stripMaxBright = 0
stripAttack = 0
stripRetreat = 0
brightnessCutoff = 0
stripOnParade = false
effectStagger = false
colorNoRepeat = false
Connected.showUserText(1, "goodbye, daisy")
let placeStrip = kongpixel.create(DigitalPin.P14, 20, KongPixelMode.RGB)
let brickStrip = kongpixel.create(DigitalPin.P15, 8, KongPixelMode.RGB)
let kongStrip = kongpixel.create(DigitalPin.P16, 4, KongPixelMode.RGB)
for (let index = 0; index < totalLights; index++) {
    brightsParade.push(50)
    stripToggles.push(0)
    huesParade.push(50)
    saturationParade.push(100)
    stripEffects.push("Parade")
}
let lightsOn = true
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
loops.everyInterval(10000, function () {
    if (pulseFan && pins.analogReadPin(AnalogPin.P0) < 10) {
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
    if (pins.analogReadPin(AnalogPin.P0) > 10) {
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
    buttonRaw = pins.analogReadPin(AnalogPin.P1)
    if (buttonRaw < 10) {
        buttonPress = "A"
    } else if (buttonRaw < 60) {
        buttonPress = "B"
    } else if (buttonRaw < 110) {
        buttonPress = "C"
        Kong.ksetMotorSpeed(Kong.MotorList.M1, 10)
        runParade("win")
    } else if (buttonRaw < 200) {
        buttonPress = "D"
        runParade("fire")
    } else if (buttonRaw < 700) {
        buttonPress = "E"
        Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
        runParade("stop")
    }
    Connected.showUserText(5, "button: " + buttonPress)
    basic.pause(500)
})
control.inBackground(function () {
    while (lightsOn) {
        paradeTick()
        for (let lightIndex = 0; lightIndex <= totalLights - 1; lightIndex++) {
            thisEffect = stripEffects[lightIndex]
            if (thisEffect == "Steady") {
            	
            } else if (thisEffect == "Parade") {
                thisHue = huesParade[lightIndex]
                thisBright = brightsParade[lightIndex]
                thisSaturation = saturationParade[lightIndex]
                if (thisBright > brightnessCutoff && thisBright < 100) {
                    thisBright = brightnessCutoff
                } else if (thisBright > 100) {
                    thisBright = 100
                } else if (thisBright < 0) {
                    thisBright = 0
                }
            } else if (thisEffect == "Off") {
                thisHue = 0
                thisBright = 0
                thisSaturation = 0
            } else if (thisEffect == "Idle") {
            	
            } else if (thisEffect == "Step") {
            	
            } else if (thisEffect == "Mine") {
            	
            } else if (thisEffect == "Indicate") {
            	
            } else if (thisEffect == "Fire") {
            	
            } else if (thisEffect == "Flash") {
            	
            } else if (thisEffect == "Blink") {
            	
            }
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
