import joi from '@hapi/joi'

export type Credentials = {
    id: string;
    login: string;
    password: string;
    
}

export const credentialsSchema = joi.object().keys({
    id: joi.string().required(),
    login: joi.string().required(),
    password: joi.string().required(),
})