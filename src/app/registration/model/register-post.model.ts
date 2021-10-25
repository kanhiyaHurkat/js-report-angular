import {
  AttendanceFormModel,
  EducationFormModel,
  EmergencyContactFormModel,
  LastRatingFormModel,
  RegisterFormModel,
  ScoreFormModel
} from "./register-form.model";
import moment from "moment";

export class RegisterPostModel {
  _id: string | undefined
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
  schools: EducationPostModel[] | undefined
  contacts: EmergencyContactPostModel[] | undefined
  scores: ScorePostModel[] | undefined
  attendance: AttendancePostModel[] | undefined
  lastRating: LastRatingPostModel[] | undefined

  static mapFromFormModel(formData: RegisterFormModel): RegisterPostModel {
    const payload = new RegisterPostModel()
    payload._id = formData.id
    payload.studentId = formData.studentId
    payload.picture = formData.picture
    payload.name = formData.name
    payload.gender = formData.gender
    payload.dob = moment(formData.dob).format('YYYY-MM-DD')
    payload.phone = formData.phone
    payload.email = formData.email
    payload.address = formData.address
    payload.language = formData.language
    payload.enteredDate = moment(formData.enteredDate).format('YYYY-MM-DD')
    payload.schools = formData.education && formData.education.map(item => EducationPostModel.mapFromFormModel(item))
    payload.contacts = formData.emergencyContact && formData.emergencyContact.map(item => EmergencyContactPostModel.mapFromFormModel(item))
    payload.scores = formData.scores && formData.scores.map(item => ScorePostModel.mapFromFormModel(item))
    payload.attendance = formData.attendance && formData.attendance.map(item => AttendancePostModel.mapFromFromModel(item))
    payload.lastRating = formData.lastRating && formData.lastRating.map(item => LastRatingPostModel.mapFromFormModel(item))
    return payload
  }
}

export class EducationPostModel {
  _id: string | undefined
  name: string | undefined
  city: string | undefined
  country: string | undefined
  yearStart: string | undefined
  yearEnd: string | undefined
  isPresent: boolean | undefined

  static mapFromFormModel(formData: EducationFormModel): EducationPostModel {
    const payload = new EducationPostModel()
    payload._id = formData.id
    payload.name = formData.schoolName
    payload.city = formData.city
    payload.country = formData.country
    payload.yearStart = moment(formData.startYear).format('YYYY')
    payload.yearEnd = moment(formData.endYear).format('YYYY')
    payload.isPresent = formData.isPresent
    return payload
  }
}

export class EmergencyContactPostModel {
  _id: string | undefined
  name: string | undefined
  priority: string | number | undefined
  relationship: string | undefined
  phone: string | undefined

  static mapFromFormModel(formData: EmergencyContactFormModel): EmergencyContactPostModel {
    const payload = new EmergencyContactPostModel()
    payload._id = formData.id
    payload.name = formData.name
    payload.priority = formData.priority
    payload.relationship = formData.relation
    payload.phone = formData.phone
    return payload
  }
}

export class ScorePostModel {
  _id: string | undefined
  period: number | undefined
  course: string | undefined
  credits: number | undefined
  homeroom: number | undefined
  score: number | undefined

  static mapFromFormModel(formData: ScoreFormModel): ScorePostModel {
    const payload = new ScorePostModel()
    payload._id = formData.id
    payload.period = formData.period
    payload.course = formData.course
    payload.credits = formData.credits
    payload.homeroom = formData.homeroom
    payload.score = formData.score
    return payload
  }
}

export class AttendancePostModel {
  _id: string | undefined
  date: string | undefined
  state: string | undefined

  static mapFromFromModel(formData: AttendanceFormModel): AttendancePostModel {
    const payload = new AttendancePostModel()
    payload._id = formData.id
    payload.date = moment(formData.date).format('YYYY-MM-DD')
    payload.state = formData.state
    return payload
  }
}

export class LastRatingPostModel {
  _id: string | undefined
  period: number | undefined
  highCourses: number | undefined
  mediumCourses: number | undefined
  lowCourses: number | undefined

  static mapFromFormModel(formData: LastRatingFormModel): LastRatingPostModel {
    const payload = new LastRatingPostModel()
    payload._id = formData.id
    payload.period = formData.period
    payload.highCourses = formData.highCourses
    payload.mediumCourses = formData.mediumCourses
    payload.lowCourses = formData.lowCourses
    return payload
  }
}
