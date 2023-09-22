import {useQuery} from "@tanstack/react-query";
import http from "src/utility/api/http";
import {AxiosResponse} from "axios";
import {IQueryRequest, IRequestObject} from "src/utility/interfaces/ReactQueryInterfaces";
import {handle401Error} from "src/utility/utils";
import {useAuth} from "src/hooks/useAuth";
import toast from "react-hot-toast";

const fetcherFunction = ({url, responseType, params}: IRequestObject) => {
    return http._get(`${url}`, { responseType , params})
}
const selectData = (response: AxiosResponse<any>) => {
    //transform data here and then return the updated data
    console.log('response', response)

  return response
}
const onSuccess = (data: any) => {
    //transform data here and then return the updated data
    console.log('success', data)
}
const onError = (error: any, logout: any) => {

    //transform data here and then return the updated data
    console.log('error', error)
    toast.error(error.message)
    handle401Error(error, logout)
}

export const useFetchQuery = (query: IQueryRequest) => {
  const {logout} = useAuth()

  // default options for useQuery hook
  const queryDefaultOptions = {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    keepPreviousData: true,
    removeAfterUnmount: true,
    onSuccess: (data: any) => onSuccess(data),
    onError: (error: any) => onError(error, logout),
    select: (response: any) => selectData(response)
  }

    return useQuery(query.key,  () =>  fetcherFunction(query.requestObject), query.options ? {
        ...queryDefaultOptions,
        ...query.options
    } : {...queryDefaultOptions})
}
