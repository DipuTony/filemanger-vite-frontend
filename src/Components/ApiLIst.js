import AuthIndex from "./Auth/AuthIndex";


export default function ApiList() {
    let baseUrl = "http://localhost:8001";
    const { token } = AuthIndex();

    const header = {
        headers:
        {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        }
    }

    // window.sessionStorage.setItem("name", "Raja Ram Mohan Malvia")

    let apiList = {
        header: header,
        api_uploadDocument: `${baseUrl}/document/upload`, //POST
        api_viewConsumerList: `${baseUrl}/admin/consumer/view-all`, //POST
        api_addConsumer: `${baseUrl}/admin/consumer/add`, //POST

        // -- Employee -- 
        api_login: `${baseUrl}/auth/login`, //POST
        api_myProfile: `${baseUrl}/auth/profile`, //POST
        apiRevokeAccessKey: `${baseUrl}/auth/revoke-access-key`, //POST
        apiChangePassword: `${baseUrl}/auth/change-password`, //POST

        api_viewAllDocuments: `${baseUrl}/document/view-all`, //POST
    }

    return apiList
}