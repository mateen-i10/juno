import { Method } from "axios";

export interface IRequestObject {
  url: string;
  method?: Method;
  data?: any;
  responseType? : any;
  params?: any
}

export interface IQueryRequest {
  key: any[];
  requestObject : IRequestObject;
  options?: any
}

export interface IMutationRequest {
  requestObject : IRequestObject;
  invalidateQuery?: any;
  options?: any
}
