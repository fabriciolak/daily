import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(weekday)
dayjs.extend(localeData)

interface IGetWeekdays {
  isUserPaid?: boolean
}

export function getWeekdays({ isUserPaid }: IGetWeekdays = {}) {
  return dayjs.weekdays().filter(day => {
    if (!isUserPaid) {
      return day !== 'Sunday' && day !== 'Saturday'
    }

    return day
  })
}