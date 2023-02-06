import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrct or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrct or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrct or missing Weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrct or missing Visibility')
  }
  return visibilityFromRequest
}

const isWeather = (param: Weather): boolean => { // (param: any)
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: Visibility): boolean => { // (param: any)
  return Object.values(Visibility).includes(param)
}

const isString = (param: string): boolean => {
  return typeof param === 'string'
}

const isDate = (param: string): boolean => {
  return Boolean(Date.parse(param))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
