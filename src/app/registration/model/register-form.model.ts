export class RegisterFormModel {
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
}

export class EducationFormModel {
  schoolName: string | undefined
  city: string | undefined
  country: string | undefined
  startYear: string | undefined
  endYear: string | undefined
  isPresent: boolean | undefined
}

export class EmergencyContactFormModel {
  name: string | undefined
  priority: string | number | undefined
  relation: string | undefined
  phone: string | undefined
}

export class ScoreFormModel {
  period: number | undefined
  course: string | undefined
  credits: number | undefined
  homeroom: number | undefined
  score: number | undefined
}

export class AttendanceFormModel {
  date: string | undefined
  state: string | undefined
}

export class LastRatingFormModel {
  period: number | undefined
  highCourses: number | undefined
  mediumCourses: number | undefined
  lowCourses: number | undefined
}
