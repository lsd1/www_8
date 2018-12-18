/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-27 18:18:01
 */
import { getDigiccyList, getDigiccyInfo } from '@/services/digiccy';
export default {
    namespace: 'digiccy',

    state: {
        digiccyList: {
            content: [],
            totalElements: 0
        },
        digiccyInfo: {

        }
    },

    effects: {
     * fetchGetDigiccyList({ payload = { pageNo: 1, pageSize: 10 } }, { put, call }) {
                const response = yield call(getDigiccyList, payload);
                yield put({ type: 'save', payload: { digiccyList: response.data } });
        },
        * fetchGetDigiccyInfo({ payload }, { put, call }) {
            
            const response = yield call(getDigiccyInfo, payload);
            yield put({ type: 'save', payload: { digiccyInfo: response.data } });
        }
    },



    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
