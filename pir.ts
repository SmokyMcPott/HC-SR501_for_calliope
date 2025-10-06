// PIR.ts – Erweiterung für Calliope V3 + HC-SR501 PIR-Sensor

namespace PIR {
    let pinPIR: DigitalPin;

    /**
     * Initialisiert den PIR-Sensor an einem bestimmten Pin
     * @param pin digitaler Pin, z. B. DigitalPin.P0
     */
    //% block="PIR initialisieren an %pin"
    export function init(pin: DigitalPin) {
        pinPIR = pin;
        pins.setPull(pinPIR, PinPullMode.PullNone);
    }

    /**
     * Prüft, ob eine Bewegung erkannt wurde
     */
    //% block="Bewegung erkannt?"
    export function motionDetected(): boolean {
        return pins.digitalReadPin(pinPIR) == 1;
    }

    /**
     * Führt Code aus, wenn eine Bewegung erkannt wird
     */
    //% block="wenn Bewegung erkannt"
    export function onMotion(handler: () => void) {
        pins.onPulsed(pinPIR, PulseValue.High, () => {
            handler();
        });
    }
}

