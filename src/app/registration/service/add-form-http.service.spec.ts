import {BaseHttpService} from "../../core/service/base-http.service";
import {AddFormHttpService} from "./add-form-http.service";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import {RegisterPostModel} from "../model/register-post.model";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RegisterViewModel} from "../model/register-view.model";
import {RegisterApiModel} from "../model/register-api.model";

describe('AddFormHttpService', () => {

  let service: AddFormHttpService
  let baseHttpService: BaseHttpService

  const postMockData: RegisterPostModel = {
    _id: "61698633a9900374783f8d2b",
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
        _id: "61698633a9900374783f8d2d",
        name: "2",
        city: "2",
        country: "2",
        yearStart: "2021",
        yearEnd: "2021",
        isPresent: false
      }
    ],
    contacts: [{
      _id: "id",
      name: "name",
      priority: "priority",
      relationship: "relation",
      phone: "phone",
    }],
    scores: [{
      _id: "id",
      period: 1,
      course: "course",
      credits: 2,
      homeroom: 3,
      score: 4,
    }],
    attendance: [{
      _id: "id",
      date: "date",
      state: "state",
    }],
    lastRating: [{
      _id: "asdasd",
      period: 1,
      highCourses: 2,
      mediumCourses: 3,
      lowCourses: 4
    }]
  }

  const apiMockData: RegisterApiModel = {
    _id: '123',
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
        _id: '123',
        name: "2",
        city: "2",
        country: "2",
        yearStart: "2021",
        yearEnd: "2021",
        isPresent: false
      }
    ],
    contacts: [{
      _id: '123',
      name: "name",
      priority: "priority",
      relationship: "relation",
      phone: "phone",
    }],
    scores: [{
      _id: '123',
      period: 1,
      course: "course",
      credits: 2,
      homeroom: 3,
      score: 4,
    }],
    attendance: [{
      _id: '123',
      date: "date",
      state: "state",
    }],
    lastRating: [{
      _id: '123',
      period: 1,
      highCourses: 2,
      mediumCourses: 3,
      lowCourses: 4
    }]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule
      ],
      imports: [
        HttpClientModule
      ]
    })
    service =TestBed.inject(AddFormHttpService)
    baseHttpService = TestBed.inject(BaseHttpService)
  })

  describe('Submit Function', function () {
    test('should call onSubmit() with update User function', function () {
      const updateUserSpy = jest.spyOn(service, "updateUser").mockImplementation(() => of(postMockData))
      service.onSubmit(postMockData)
      expect(updateUserSpy).toBeCalledWith(postMockData)
    })

    test('should call onSubmit() with add User function', function () {
      const addUserSpy = jest.spyOn(service, "addUser").mockImplementation(() => of(postMockData))
      postMockData._id = undefined
      service.onSubmit(postMockData)
      expect(addUserSpy).toBeCalledWith(postMockData)
    })
  })

  describe('Add User Function', function () {
    test('should call addUser()', function () {
      let apiUrl = `registration/add_user`
      const addUserSpy = jest.spyOn(baseHttpService, "post").mockImplementation(() => of(postMockData))
      service.addUser(postMockData)
      expect(addUserSpy).toBeCalledWith(apiUrl, postMockData)
    })
  })

  describe('Update User Function', function () {
    test('should call updateUser()', function () {
      let apiUrl = `registration/add_user`
      const updateUserSpy = jest.spyOn(baseHttpService, "post").mockImplementation(() => of(postMockData))
      service.updateUser(postMockData)
      expect(updateUserSpy).toBeCalledWith(apiUrl, postMockData)
    })
  })

  describe('Deleted User Function', function () {
    test('should call deleteUser()', function () {
      let apiUrl = `registration/delete_user`
      let deleteUserMockData = ['61698633a9900374783f8d2b', '61698633a9900374783f8d2b']
      const deleteUserSpy = jest.spyOn(baseHttpService, "post").mockImplementation(() => of(deleteUserMockData))
      service.deleteUser(deleteUserMockData)
      expect(deleteUserSpy).toBeCalledWith(apiUrl, {deletedItems: deleteUserMockData})
    })
  })

  describe('Get User Function', function () {
    test('should call getUsers()', function () {
      let apiUrl = `registration/users`
      const getUserSpy = jest.spyOn(baseHttpService, "get").mockImplementation(() => of([apiMockData]))
      service.getUsers()
      expect(getUserSpy).toHaveBeenCalled()
    })
    test('should call getUserById()', function () {
      const userId = '61698633a9900374783f8d2b'
      let apiUrl = `registration/users/${userId}`
      const getUserSpy = jest.spyOn(baseHttpService, "get").mockImplementation(() => of([apiMockData]))
      service.getUserById(userId)
      expect(getUserSpy).toHaveBeenCalled()
    })
  })
})
