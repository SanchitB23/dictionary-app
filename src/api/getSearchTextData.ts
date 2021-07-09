import {GatsbyFunctionRequest, GatsbyFunctionResponse} from "gatsby"
import {EXT_BASE_API, LANGUAGES} from "../constants";
import axios from "axios";

export default async (
    req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse
) => {
    const {text, lang} = req.query;
    let response;
    try {
        response = await axios.get(`${EXT_BASE_API}${lang || LANGUAGES.english_us.code}/${text}`)
    } catch (e) {
        response = e
    }
    if (response.status === 200)
        res.status(200).send(response.data)
    else if (response.status !== 200 && response.response) {
        const {status, data} = response.response;
        res.status(status).send({data: data})
    }
}
