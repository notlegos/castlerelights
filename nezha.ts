/**
* Functions to NeZha multifunctional expansion board by ELECFREAKS Co.,Ltd.
*/
//% color=#ff0000  icon="\uf06d" block="Hub" blockId="Hub"
namespace neZha {
    const neZha_address = 0x10
    /**
    * MotorList
    */
    export enum MotorList {
        //% block="M1"
        M1,
        //% block="M2"
        M2,
        //% block="M3"
        M3,
        //% block="M4"
        M4
    }
    /**
    * ServoList
    */
    export enum ServoList {
        //% block="S1" 
        S1,
        //% block="S2"
        S2,
        //% block="S3" 
        S3,
        //% block="S4"
        S4
    }
    export enum ServoTypeList {
        //% block="180°" 
        _180,
        //% block="270°"
        _270,
        //% block="360°" 
        _360
    }
    /**
     * Purpose: Set the speed of M1, M2, M3, M4 motor. 
     * @param motor M1, M2, M3, M4 motor , eg: MotorList.M1
     * @param speed motor speed, eg: 100
     */
    //% weight=88
    //% blockId=setMotorSpeed block="Set motor %motor speed to %speed\\%"
    //% speed.min=-100 speed.max=100
    export function setMotorSpeed(motor: MotorList, speed: number): void {
        let iic_buffer = pins.createBuffer(4);
        if (speed > 100) {
            speed = 100
        }
        else if (speed < -100) {
            speed = -100
        }
        switch (motor) {
            case MotorList.M1:
                iic_buffer[0] = 0x01;
                if (speed >= 0) {
                    iic_buffer[1] = 0x01;
                }
                else {
                    iic_buffer[1] = 0x02;
                    speed = speed * -1
                }
                iic_buffer[2] = speed;
                iic_buffer[3] = 0;
                pins.i2cWriteBuffer(neZha_address, iic_buffer);
                break;
            case MotorList.M2:
                iic_buffer[0] = 0x02;
                if (speed >= 0) {
                    iic_buffer[1] = 0x01;
                }
                else {
                    iic_buffer[1] = 0x02;
                    speed = speed * -1
                }
                iic_buffer[2] = speed;
                iic_buffer[3] = 0;
                pins.i2cWriteBuffer(neZha_address, iic_buffer);
                break;
            case MotorList.M3:
                iic_buffer[0] = 0x03;
                if (speed >= 0) {
                    iic_buffer[1] = 0x01;
                }
                else {
                    iic_buffer[1] = 0x02;
                    speed = speed * -1
                }
                iic_buffer[2] = speed;
                iic_buffer[3] = 0;
                pins.i2cWriteBuffer(neZha_address, iic_buffer);
                break;
            case MotorList.M4:
                iic_buffer[0] = 0x04;
                if (speed >= 0) {
                    iic_buffer[1] = 0x01;
                }
                else {
                    iic_buffer[1] = 0x02;
                    speed = speed * -1
                }
                iic_buffer[2] = speed;
                iic_buffer[3] = 0;
                pins.i2cWriteBuffer(neZha_address, iic_buffer);
                break;
            default:
                break;
        }
    }

    /*
     * Purpose: Stop one of the motors. 
     * @param motor A motor in the MotorList , eg: MotorList.M1
     */
    //% weight=86
    //% blockId=stopMotor block="Stop motor %motor"
    export function stopMotor(motor: MotorList): void {
        setMotorSpeed(motor, 0)
    }
    /*
     * Purpose: Stop all motors, including M1, M2, M3, M4.
     */
    //% weight=85
    //% blockId=stopAllMotor  block="Stop all motor"
    export function stopAllMotor(): void {
        setMotorSpeed(MotorList.M1, 0)
        setMotorSpeed(MotorList.M2, 0)
        setMotorSpeed(MotorList.M3, 0)
        setMotorSpeed(MotorList.M4, 0)
    }

    /*
     * Purpose: Setting the angle of a servo motor. 
     * @param servo A servo in the ServoList , eg: ServoList.S1
     * @param angle Angle of servo motor , eg: 90
     */
    //% weight=84
    //% blockId=setServoAngle block="Set %servoType servo %servo angle to %angle°"
    export function setServoAngle(servoType: ServoTypeList, servo: ServoList, angle: number): void {
        let iic_buffer = pins.createBuffer(4);
        switch (servo) {
            case ServoList.S1:
                iic_buffer[0] = 0x10;
                break;
            case ServoList.S2:
                iic_buffer[0] = 0x11;
                break;
            case ServoList.S3:
                iic_buffer[0] = 0x12;
                break;
            case ServoList.S4:
                iic_buffer[0] = 0x13;
                break;
        }
        switch (servoType) {
            case ServoTypeList._180:
                angle = Math.map(angle, 0, 180, 0, 180)
                break
            case ServoTypeList._270:
                angle = Math.map(angle, 0, 270, 0, 180)
                break
            case ServoTypeList._360:
                angle = Math.map(angle, 0, 360, 0, 180)
                break
        }
        iic_buffer[1] = angle;
        iic_buffer[2] = 0;
        iic_buffer[3] = 0;
        pins.i2cWriteBuffer(neZha_address, iic_buffer);
    }
    /*
     * Purpose: Setting the speed of a servo motor. 
     * @param servo A servo in the ServoList , eg: ServoList.S1
     * @param angle Angle of servo motor , eg: 100
     */
    //% weight=83
    //% blockId=setServoSpeed block="Set continuous rotation servo %servo speed to %speed\\%"
    //% speed.min=-100 speed.max=100
    export function setServoSpeed(servo: ServoList, speed: number): void {
        speed = Math.map(speed, -100, 100, 0, 180)
        setServoAngle(ServoTypeList._180, servo, speed)
    }
}