import {RegisterFormModel} from "./register-form.model";
import {RegisterPostModel} from "./register-post.model";

describe('Register Post Model Class', () => {

  let postMockData: RegisterPostModel
  let formMockData: RegisterFormModel

  beforeEach(() => {
    postMockData = {
      _id: '61698633a9900374783f8d2d',
      studentId: "2",
      picture: "",
      name: "2",
      gender: "male",
      dob: "2021-10-14",
      phone: "1234567890",
      email: "ads@dc.sdf",
      address: "asd",
      language: "English",
      enteredDate: "2021-10-15",
      schools: [
        {
          _id: '61698633a9900374783f8d2d',
          name: "2",
          city: "2",
          country: "2",
          yearStart: "2021",
          yearEnd: "2021",
          isPresent: false
        }
      ],
      contacts: [{
        _id: '61698633a9900374783f8d2d',
        name: "name",
        priority: "priority",
        relationship: "relation",
        phone: "phone",
      }],
      scores: [{
        _id: '61698633a9900374783f8d2d',
        period: 1,
        course: "course",
        credits: 2,
        homeroom: 3,
        score: 4,
      }],
      attendance: [{
        _id: '61698633a9900374783f8d2d',
        date: "2021-10-22",
        state: "state",
      }],
      lastRating: [{
        _id: '61698633a9900374783f8d2d',
        period: 1,
        highCourses: 2,
        mediumCourses: 3,
        lowCourses: 4
      }]
    }
    formMockData = {
      id: "61698633a9900374783f8d2d",
      studentId: "2",
      picture: "",
      name: "2",
      gender: "male",
      dob: "2021-10-14",
      phone: "1234567890",
      email: "ads@dc.sdf",
      address: "asd",
      language: "English",
      enteredDate: "2021-10-15",
      education: [
        {
          id: "61698633a9900374783f8d2d",
          schoolName: "2",
          city: "2",
          country: "2",
          startYear: "2021",
          endYear: "2021",
          isPresent: false
        }
      ],
      emergencyContact: [{
        id: "id",
        name: "name",
        priority: "priority",
        relation: "relation",
        phone: "phone",
      }],
      scores: [{
        id: "id",
        period: 1,
        course: "course",
        credits: 2,
        homeroom: 3,
        score: 4,
      }],
      attendance: [{
        id: "id",
        date: "2021-10-22T11:07:17+05:30",
        state: "state",
      }],
      lastRating: [{
        id: "asdasd",
        period: 1,
        highCourses: 2,
        mediumCourses: 3,
        lowCourses: 4
      }],
      isSelected: false
    }
  })

  describe('Register Post Model', () => {
    test('should create an instance', () => {
      expect(new RegisterPostModel()).toBeDefined()
    })

    test('should call static mapFromFormModel()', () => {
      const staticFunSpy = jest.spyOn(RegisterPostModel, 'mapFromFormModel')
      RegisterPostModel.mapFromFormModel(formMockData)
      expect(staticFunSpy).toBeCalledWith(formMockData)
    })
  })
})
