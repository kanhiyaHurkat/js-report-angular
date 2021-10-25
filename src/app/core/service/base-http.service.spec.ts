import {TestBed} from "@angular/core/testing";
import {BaseHttpService} from "./base-http.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";

describe('BaseHttpService', () => {


  let httpClient: HttpClient
  let service: BaseHttpService
  let jsReportUrl: string
  let apiUrl: string
  let url: string
  let data: any
  let params: HttpParams

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientTestingModule
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents()

    service = TestBed.inject(BaseHttpService)
    httpClient = TestBed.inject(HttpClient)

    apiUrl = 'http://localhost:3000/'
    jsReportUrl = 'http://localhost:8001/'
    url = ''
    data = {}
    params = new HttpParams()
  })

  describe('Post Method', () => {
    test('should call post method', () => {
      const httpPostSpy = jest.spyOn(httpClient, 'post')
      service.post(url, data, params)
      expect(httpPostSpy).toHaveBeenCalledWith(`${apiUrl}${url}`, data, {params})
    })
  })

  describe('Get Method', () => {
    test('should call get method', () => {
      const httpGetSpy = jest.spyOn(httpClient, 'get')
      service.get(url, params)
      expect(httpGetSpy).toHaveBeenCalledWith(`${apiUrl}${url}`, {params})
    })
  })

  describe('Post JS Report Method', () => {
    test('should call post JS Report method', () => {
      const httpPostJSReportSpy = jest.spyOn(httpClient, 'post')
      service.postJsReport(url, data)
      expect(httpPostJSReportSpy).toHaveBeenCalledWith(`${jsReportUrl}${url}`, data)
    })
  })
})
