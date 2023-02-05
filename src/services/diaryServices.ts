import { DiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // o Array<DiaryEntry>

export const getAllEntries = (): DiaryEntry[] => diaries

export const addNewEntry = (): undefined => undefined
