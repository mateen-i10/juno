import {IMutationRequest, IRequestObject} from "src/utility/interfaces/ReactQueryInterfaces";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import http, {baseURL} from "src/utility/api/http";
import {useAuth} from "src/hooks/useAuth";
import {handle401Error} from "src/utility/utils";

//mutation hook used for add/update/delete
const mutationFunction = ({ url, data, method, responseType }: IRequestObject) => {
    return http._request({baseURL, url , method, data, responseType })
}

export const useMutationDefault = (request?: IMutationRequest) => {
    const queryClient = useQueryClient()
    const {logout, setLoading} = useAuth()

    return useMutation(mutationFunction , request?.options ? {
        ...request.options,
        onSuccess:  (data) => {
          setLoading(false)

            // if onSuccess is passed in options
            if(request.options.onSuccess) request.options.onSuccess(data)


            if(request.invalidateQuery) {
                queryClient.invalidateQueries(request.invalidateQuery)
            }
        }
    }:{
        onSuccess:  (data) => {
          setLoading(false)

            if(request?.invalidateQuery) {
                queryClient.invalidateQueries(request.invalidateQuery)
            }
          console.log('data', data)
        },
      onError: (error: any) => {
        setLoading(false)
          handle401Error(error, logout)

        // error handling
      }
    })
}
