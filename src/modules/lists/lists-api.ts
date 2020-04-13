import { AxiosResponse } from "axios";
import { Lists } from "resume-app";
import { Api } from "../../utils/api";
import { apiConfig } from "../../utils/constants";

/**
 * @description Typedef
 * @author Ernesto Jara Olveda
 */
class ListApi extends Api {
    public constructor () {
        super(apiConfig);

        this.getLists = this.getLists.bind(this);
    }

    public getLists (): Promise<Lists[]> {
        return this.get<Lists[]>(process.env.API_BASE+"/api/v1/lists")
            .then((lists: AxiosResponse<Lists[]>) => {
                return lists.data
            }).catch(error => {
                throw error;
            })
    }
}

export const listApi = new ListApi();
