export interface _Skill {
  front: string[],
  back: string[],
  [key: string]: string[];
}

export type _addSkill = () => void
export type _changeText = (text: string) => void
export type _togglePage = (bar: string) => void
export type _updateNews = (news: string) => void


