import { AxiosError, AxiosResponse } from "axios";
import { LoginCredential, RegisterCredentials, UserState } from "resume-app";
import { Api } from "../../utils/api";
import { apiConfig, API_LOGIN, API_REGISTER } from "../../utils/constants";

/**
 * @typedef {object} UserState
 * @property {string} firstName
 * @property {string} secondName
 * @property {string} lasrName
 * @property {string} secondLasrName
 * @property {string} email
 * @property {string} id
 * @property {string} token
 */

/**
 * @description Typedef
 * @author Ernesto Jara Olveda
 */
class UserApi extends Api {
    public constructor () {
        super(apiConfig);

        this.loginUser = this.loginUser.bind(this);
    }

    /**
     * Generates an `HTTP POST` method to authenticate a user.
     *
     * @param {LoginCredential} credentials - user data to login.
     * @returns {Promise<UserState>} userState - user information,
     */
    public loginUser (credentials: LoginCredential): Promise<UserState> {
        return this.post<UserState>(API_LOGIN, JSON.stringify(credentials))
            .then((response: AxiosResponse<UserState>) => {
                const { data } = response;

                const state: UserState = {
                    firstName: data.firstName,
                    secondName: data.secondName,
                    lastName: data.lastName,
                    secondLastName: data.secondLastName,
                    email: data.email,
                    id: data.id,
                    token: data.token,
                };

                return state;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }

    /**
     * Adds a new user into our system.
     *
     * @param {RegisterCredentials} credrentials - user data.
     * @returns {Promise<number>} status code of `CREATED`.
     */
    public registerUser (credrentials: RegisterCredentials): Promise<number> {
        return this.post<number>(API_REGISTER, JSON.stringify(credrentials))
            .then((registered: AxiosResponse<number>) => {
                const { status } = registered;

                return status;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }
}

export const userApi = new UserApi();
