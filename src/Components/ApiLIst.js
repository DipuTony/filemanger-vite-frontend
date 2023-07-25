

export default function ApiList() {
    let baseUrl = "http://localhost:8001";

    // let token = window.localStorage.getItem('citizen_token')
    let token = "123"
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
        api_viewAllDocuments: `${baseUrl}/document/view`, //POST
        api_uploadDocument: `${baseUrl}/document/upload`, //POST
        api_viewConsumerList: `${baseUrl}/admin/consumer/view-all`, //POST
        api_addConsumer: `${baseUrl}/admin/consumer/add`, //POST

    }

    return apiList
}