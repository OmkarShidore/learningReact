import axios from "axios";

const LOCAL_URL = "http://127.0.0.1:5000";
const floorSplitEndpoint = "/getUserRecommendation"


async function getLayoutConfig(dataPayload){
    
    const apiUrl = LOCAL_URL+floorSplitEndpoint;
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {'Content-Type': 'application/json'},
        data : JSON.stringify(dataPayload)
      };

      try{
        const response = await axios.request(config);
        return response.data;
      }
      catch (error){
        console.log(error);
      }
    
}

export default getLayoutConfig;
