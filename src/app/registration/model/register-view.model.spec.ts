import {RegisterApiModel} from "./register-api.model";
import {RegisterViewModel} from "./register-view.model";

describe('Register View Model Class', () => {

  let apiMockData: RegisterApiModel
  let viewMockData: RegisterViewModel

  beforeEach(() => {
    apiMockData = {
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
        date: "2021-10-22T11:07:17+05:30",
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
    viewMockData = {
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
      schools: [
        {
          name: "2",
          city: "2",
          country: "2",
          yearStart: "2021",
          yearEnd: "2021",
          isPresent: false
        }
      ],
      contacts: [{
        name: "name",
        priority: "priority",
        relationship: "relation",
        phone: "phone",
      }],
      scores: [{
        period: 1,
        course: "course",
        credits: 2,
        homeroom: 3,
        score: 4,
      }],
      attendance: [{
        date: "2021-10-22",
        state: "state",
      }],
      lastRating: [{
        period: 1,
        highCourses: 2,
        mediumCourses: 3,
        lowCourses: 4
      }],
      isSelected: false
    }
  })

  describe('Register View Model', () => {
    test('should create an instance', () => {
      expect(new RegisterViewModel()).toBeDefined()
    })

    test('should call static mapFromApiModel()', () => {
      const staticFunSpy = jest.spyOn(RegisterViewModel, 'mapFromApiModel')
      const viewData = RegisterViewModel.mapFromApiModel(apiMockData)
      expect(staticFunSpy).toBeCalledWith(apiMockData)
      expect(viewData).toEqual(viewMockData)
    })
  })
})
