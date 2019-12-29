import { AxiosError, AxiosResponse } from "axios";
import { LoginCredentials, UserState } from "resume-app";
import { Api } from "../../utils/api";
import { apiConfig, API_LOGIN } from "../../utils/constants";

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
     *
     * @param {object} credentials - user's identifications.
     * @param {string} credentials.email - user's email.
     * @param {string} credentials.password - user's password.
     * @returns {Promise<UserState>} userState - user information,
     */
    public loginUser (credentials: LoginCredentials): Promise<UserState> {
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
                    token: data.token
                };

                return state;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }
}

export const userApi = new UserApi();
