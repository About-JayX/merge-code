import axios from "@/axios";

export const UserApi = {
  GetUser: (param: { id: number }) => axios.post("/user/get", param),
  AllUser: (param?: { page?: number; rows?: number }) =>
    axios.post("/user/all", param),
  UpdateUser: (param?: { id: number; firstName: string }) =>
    axios.post("/user/update", param),
  DeleteUser: (param: { id: number }) => axios.post("/user/delete", param),
};
