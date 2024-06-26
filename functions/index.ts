import { altMonthArray } from "@/constants";
import { AchivementsType } from "@/types";

export function calculateDays(startString: string, endString: string) {
    const startDate = new Date(startString)
    const endDate = new Date(endString)

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const getDayString = (days: number): string => {
        if (days % 10 === 1 && days % 100 !== 11) {
            return `${days} день`;
        } else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) {
            return `${days} дня`;
        } else {
            return `${days} дней`;
        }
    };

    return getDayString(diffDays);
}

export function fillTripDate(startString: string, endString: string) {
    const startDate = new Date(startString)
    const endDate = new Date(endString)

    const startPoint = `${startDate.getDate()} ${altMonthArray[startDate.getMonth()]}`
    const endPoint = `${endDate.getDate()} ${altMonthArray[endDate.getMonth()]}`

    return `${startPoint} - ${endPoint}`
}

export function formatDate(date: string) {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()
    return `${year}-${month}-${day}`
}

export function fillAchivements(type: AchivementsType) {
    const path = "@/assets/images/achivements"

    switch (type) {
        case "6 years": return require(`${path}/6_years.png`)
        case "super": return require(`${path}/super.png`)
        case "top 100": return require(`${path}/top_100.png`)
        case "win": return require(`${path}/win.png`)
    }
}