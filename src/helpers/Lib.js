import Constants from "./Constants";

const Lib = {
    bodyFatPercentage: (gender, height, heightUnit, stats) => {

        let statsClone = JSON.parse(JSON.stringify(stats));

        if (statsClone.waistUnit === Constants.INCH) {
            statsClone.waist = statsClone.waist * 2.54;
        }

        if (statsClone.waistUnit === Constants.FEET) {
            statsClone.waist = statsClone.waist * 2.54 * 12;
        }

        if (statsClone.neckUnit === Constants.INCH) {
            statsClone.neck = statsClone.neck * 2.54;
        }

        if (statsClone.neckUnit === Constants.FEET) {
            statsClone.neck = statsClone.neck * 2.54 * 12;
        }

        if (heightUnit === Constants.INCH) {
            height = height * 2.54;
        }

        if (heightUnit === Constants.FEET) {
            height = height * 2.54 * 12;
        }

        if (statsClone.hipUnit === Constants.INCH) {
            statsClone.hip = statsClone.hip * 2.54;
        }

        if (statsClone.hipUnit === Constants.FEET) {
            statsClone.hip = statsClone.hip * 2.54 * 12;
        }

        console.log({ statsClone, height });

        if (gender === Constants.MALE.value)
            return (495 / (1.0324 - 0.19077 * Math.log10(statsClone.waist - statsClone.neck) + 0.15456 * Math.log10(height)) - 450);
        else
            return (495 / (1.29579 - 0.35004 * Math.log10(statsClone.waist + statsClone.hip - statsClone.neck) + 0.22100 * Math.log10(height)) - 450);
    },

    round: (number) => Math.round(number * 10) / 10
}


export default Lib;