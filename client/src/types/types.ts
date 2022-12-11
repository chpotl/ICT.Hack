export interface ICategory {
  _id: string
  name: string
}

export interface ICreator {
  _id: string
  email: string
  roles: any[]
  skills: any[]
  favorite: any[]
  userRole: string
  username: string
}

export interface IProject {
  _id: string
  name: string
  category: ICategory
  tags: string[]
  shortDescription: string
  longDescription: string
  investments: number
  webSite: string
  logoUrl: string
  coverUrl: string
  presentationUrl: string
  screenShotsUrl: string[]
  teamMembers: string[]
  moderated: boolean
  creator: ICreator
  demoUrl: string
  region: string
}

export interface ISignUpLogin {
  email: string
  password: string
}
