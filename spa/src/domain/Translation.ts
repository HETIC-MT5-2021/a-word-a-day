import * as dayjs from 'dayjs'

interface Translation {
    id: string,
    en: string,
    fr: string,
    note: string,
    creation_date: dayjs.Dayjs
}

export default Translation;
