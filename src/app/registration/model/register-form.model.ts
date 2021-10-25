import {
  AttendanceApiModel,
  EducationApiModel,
  EmergencyContactApiModel,
  LastRatingApiModel,
  RegisterApiModel,
  ScoreApiModel
} from "./register-api.model";
import moment from "moment";

export class RegisterFormModel {
  id: string | undefined
  studentId: string | undefined
  picture: string | undefined
  name: string | undefined
  gender: string | undefined
  dob: string | undefined
  phone: string | undefined
  email: string | undefined
  address: string | undefined
  language: string | undefined
  enteredDate: string | undefined
  education: EducationFormModel[] | undefined
  emergencyContact: EmergencyContactFormModel[] | undefined
  scores: ScoreFormModel[] | undefined
  attendance: AttendanceFormModel[] | undefined
  lastRating: LastRatingFormModel[] | undefined
  isSelected: boolean | undefined

  static mapFromApiModel(apiModel: RegisterApiModel): RegisterFormModel {
    const formModel = new RegisterFormModel()
    formModel.id = apiModel._id
    formModel.studentId = apiModel.studentId
    formModel.picture = apiModel.picture
    formModel.name = apiModel.name
    formModel.gender = apiModel.gender
    formModel.dob = moment(apiModel.dob).format('YYYY-MM-DD')
    formModel.phone = apiModel.phone
    formModel.email = apiModel.email
    formModel.address = apiModel.address
    formModel.language = apiModel.language
    formModel.enteredDate = moment(apiModel.enteredDate).format('YYYY-MM-DD')
    formModel.education = apiModel.schools && apiModel.schools.map(item => EducationFormModel.mapFromApiModel(item))
    formModel.emergencyContact = apiModel.contacts && apiModel.contacts.map(item => EmergencyContactFormModel.mapFromApiModel(item))
    formModel.scores = apiModel.scores && apiModel.scores.map(item => ScoreFormModel.mapFromApiModel(item))
    formModel.attendance = apiModel.attendance && apiModel.attendance.map(item => AttendanceFormModel.mapFromApiModel(item))
    formModel.lastRating = apiModel.lastRating && apiModel.lastRating.map(item => LastRatingFormModel.mapFromApiModel(item))
    formModel.isSelected = false
    return formModel
  }
}

export class EducationFormModel {
  id: string | undefined
  schoolName: string | undefined
  city: string | undefined
  country: string | undefined
  startYear: string | undefined
  endYear: string | undefined
  isPresent: boolean | undefined

  static mapFromApiModel(apiModel: EducationApiModel): EducationFormModel {
    const formModel = new EducationFormModel()
    formModel.id = apiModel._id
    formModel.schoolName = apiModel.name
    formModel.city = apiModel.city
    formModel.country = apiModel.country
    formModel.startYear = moment(apiModel.yearStart).format('YYYY')
    formModel.endYear = moment(apiModel.yearEnd).format('YYYY')
    formModel.isPresent = false
    return formModel
  }
}

export class EmergencyContactFormModel {
  id: string | undefined
  name: string | undefined
  priority: string | number | undefined
  relation: string | undefined
  phone: string | undefined

  static mapFromApiModel(apiModel: EmergencyContactApiModel): EmergencyContactFormModel {
    const formModel = new EmergencyContactFormModel()
    formModel.id = apiModel._id
    formModel.name = apiModel.name
    formModel.priority = apiModel.priority
    formModel.relation = apiModel.relationship
    formModel.phone = apiModel.phone
    return formModel
  }
}

export class ScoreFormModel {
  id: string | undefined
  period: number | undefined
  course: string | undefined
  credits: number | undefined
  homeroom: number | undefined
  score: number | undefined

  static mapFromApiModel(apiModel: ScoreApiModel): ScoreFormModel {
    const formModel = new ScoreFormModel()
    formModel.id = apiModel._id
    formModel.period = apiModel.period
    formModel.course = apiModel.course
    formModel.credits = apiModel.credits
    formModel.homeroom = apiModel.homeroom
    formModel.score = apiModel.score
    return formModel
  }
}

export class AttendanceFormModel {
  id: string | undefined
  date: string | undefined
  state: string | undefined

  static mapFromApiModel(apiModel: AttendanceApiModel): AttendanceFormModel {
    const formModel = new AttendanceFormModel()
    formModel.id = apiModel._id
    formModel.date = moment(apiModel.date).format('YYYY-MM-DD')
    formModel.state = apiModel.state
    return formModel
  }
}

export class LastRatingFormModel {
  id: string | undefined
  period: number | undefined
  highCourses: number | undefined
  mediumCourses: number | undefined
  lowCourses: number | undefined

  static mapFromApiModel(apiModel: LastRatingApiModel): LastRatingFormModel {
    const formModel = new LastRatingFormModel()
    formModel.id = apiModel._id
    formModel.period = apiModel.period
    formModel.highCourses = apiModel.highCourses
    formModel.mediumCourses = apiModel.mediumCourses
    formModel.lowCourses = apiModel.lowCourses
    return formModel
  }
}
