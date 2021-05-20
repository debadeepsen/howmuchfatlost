const Lib = {
    METRIC: {
        text: "Metric",
        value: "MT"
    },
    IMPERIAL: {
        text: "Imperial",
        value: "IP"
    },

    MALE: {
        text: "Male",
        value: "M"
    },
    FEMALE: {
        text: "Female",
        value: "F"
    },
    
    bodyFatPercentage: (gender, waist, waistUnit, neck, neckUnit, height, heightUnit, hip, hipUnit) => {

        if (waistUnit === 'in') {
            waist = waist * 2.54;
        }

        if (waistUnit === 'ft') {
            waist = waist * 2.54 * 12;
        }

        if (neckUnit === 'in') {
            neck = neck * 2.54;
        }

        if (neckUnit === 'ft') {
            neck = neck * 2.54 * 12;
        }

        if (heightUnit === 'in') {
            height = height * 2.54;
        }

        if (heightUnit === 'ft') {
            height = height * 2.54 * 12;
        }

        if (hipUnit === 'in') {
            hip = hip * 2.54;
        }

        if (hipUnit === 'ft') {
            hip = hip * 2.54 * 12;
        }

        if (gender === 'M')
            return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450);
        else
            return (495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450);
    },

    round: (number) => Math.round(number * 10) / 10
}

export default Lib;