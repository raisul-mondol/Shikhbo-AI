import api from "./Api"



 export const getCourses=async(params)=>
{

    const response=await api.get("/courses",
        {
           params
        }
    );

    return response.data;
}