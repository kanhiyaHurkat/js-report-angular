import * as moment from "moment";
import {
  AttendanceApiModel,
  EducationApiModel,
  EmergencyContactApiModel,
  LastRatingApiModel,
  RegisterApiModel,
  ScoreApiModel
} from "./register-api.model";

export class RegisterViewModel {
  id!: string;
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
  schools: EducationViewModel[] | undefined
  contacts: EmergencyContactViewModel[] | undefined
  scores: ScoreViewModel[] | undefined
  attendance: AttendanceViewModel[] | undefined
  lastRating: LastRatingViewModel[] | undefined
  isSelected!: boolean

  static mapFromApiModel(apiModel: RegisterApiModel): RegisterViewModel {
    const viewModel = new RegisterViewModel()
    viewModel.id = apiModel._id
    viewModel.studentId = apiModel.studentId
    viewModel.picture = apiModel.picture
    viewModel.name = apiModel.name
    viewModel.gender = apiModel.gender
    viewModel.dob = moment(apiModel.dob).format('YYYY-MM-DD')
    viewModel.phone = apiModel.phone
    viewModel.email = apiModel.email
    viewModel.address = apiModel.address
    viewModel.language = apiModel.language
    viewModel.enteredDate = moment(apiModel.enteredDate).format('YYYY-MM-DD')
    viewModel.schools = apiModel.schools && apiModel.schools.map(item => EducationViewModel.mapFromApiModel(item))
    viewModel.contacts = apiModel.contacts && apiModel.contacts.map(item => EmergencyContactViewModel.mapFromApiModel(item))
    viewModel.scores = apiModel.scores && apiModel.scores.map(item => ScoreViewModel.mapFromApiModel(item))
    viewModel.attendance = apiModel.attendance && apiModel.attendance.map(item => AttendanceViewModel.mapFromApiModel(item))
    viewModel.lastRating = apiModel.lastRating && apiModel.lastRating.map(item => LastRatingViewModel.mapFromApiModel(item))
    viewModel.isSelected = false
    return viewModel
  }

}

export class EducationViewModel {
  name: string | undefined
  city: string | undefined
  country: string | undefined
  yearStart: string | undefined
  yearEnd: string | undefined
  isPresent: boolean | undefined

  static mapFromApiModel(apiModel: EducationApiModel): EducationViewModel {
    const viewModel = new EducationViewModel()
    viewModel.name = apiModel.name
    viewModel.city = apiModel.city
    viewModel.country = apiModel.country
    viewModel.yearStart = moment(apiModel.yearStart).format('YYYY')
    viewModel.yearEnd = moment(apiModel.yearEnd).format('YYYY')
    viewModel.isPresent = apiModel.isPresent
    return viewModel
  }
}

export class EmergencyContactViewModel {
  name: string | undefined
  priority: string | number | undefined
  relationship: string | undefined
  phone: string | undefined

  static mapFromApiModel(apiModel: EmergencyContactApiModel): EmergencyContactViewModel {
    const viewModel = new EmergencyContactViewModel()
    viewModel.name = apiModel.name
    viewModel.priority = apiModel.priority
    viewModel.relationship = apiModel.relationship
    viewModel.phone = apiModel.phone
    return viewModel
  }
}

export class ScoreViewModel {
  period: number | undefined
  course: string | undefined
  credits: number | undefined
  homeroom: number | undefined
  score: number | undefined

  static mapFromApiModel(apiModel: ScoreApiModel): ScoreViewModel {
    const viewModel = new ScoreViewModel()
    viewModel.period = apiModel.period
    viewModel.course = apiModel.course
    viewModel.credits = apiModel.credits
    viewModel.homeroom = apiModel.homeroom
    viewModel.score = apiModel.score
    return viewModel
  }
}

export class AttendanceViewModel {
  date: string | undefined
  state: string | undefined

  static mapFromApiModel(apiModel: AttendanceApiModel): AttendanceViewModel {
    const viewModel = new AttendanceViewModel()
    viewModel.date = moment(apiModel.date).format('YYYY-MM-DD')
    viewModel.state = apiModel.state
    return viewModel
  }
}

export class LastRatingViewModel {
  period: number | undefined
  highCourses: number | undefined
  mediumCourses: number | undefined
  lowCourses: number | undefined

  static mapFromApiModel(apiModel: LastRatingApiModel): LastRatingViewModel {
    const viewModel = new LastRatingViewModel()
    viewModel.period = apiModel.period
    viewModel.highCourses = apiModel.highCourses
    viewModel.mediumCourses = apiModel.mediumCourses
    viewModel.lowCourses = apiModel.lowCourses
    return viewModel
  }
}
