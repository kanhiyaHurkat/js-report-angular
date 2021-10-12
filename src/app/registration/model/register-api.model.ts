export class RegisterApiModel {
  studentId: string | undefined
  name: string | undefined
  gender: string | undefined
  dob: string | undefined
  phone: string | undefined
  email: string | undefined
  address: string | undefined
  language: string | undefined
  enteredDate: string | undefined
  schools: EducationApiModel[] | undefined
  contacts: EmergencyContactApiModel[] | undefined
  scores: ScoreApiModel[] | undefined
  attendance: AttendanceApiModel[] | undefined
  lastRating: LastRatingApiModel[] | undefined
}

export class EducationApiModel {
  name: string | undefined
  city: string | undefined
  country: string | undefined
  yearStart: string | undefined
  yearEnd: string | undefined
  isPresent: boolean | undefined
}

export class EmergencyContactApiModel {
  name: string | undefined
  priority: string | number | undefined
  relationship: string | undefined
  phone: string | undefined
}

export class ScoreApiModel {
  period: number | undefined
  course: string | undefined
  credits: number | undefined
  homeroom: number | undefined
  score: number | undefined
}

export class AttendanceApiModel {
  date: string | undefined
  state: string | undefined
}

export class LastRatingApiModel {
  period: number | undefined
  highCourses: number | undefined
  mediumCourses: number | undefined
  lowCourses: number | undefined
}
