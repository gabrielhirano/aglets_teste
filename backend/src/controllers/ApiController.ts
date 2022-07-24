import { Request, response, Response } from 'express';
import axios from 'axios';

export default {
    async content(req:Request,res:Response){
        const base_url = 'http://aglets.com.br/prova/prova.json'

        await axios.get(base_url)
                        .then((response)=>{
                            return res.json(response.data)
                        })
                        .catch(err => console.log(err))
    }
}