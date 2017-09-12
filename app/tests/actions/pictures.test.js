// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions/pictures";
import * as types from "../../actions/types";

const host = "http://localhost";

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
var store;

beforeEach(function() {
    store = mockStore();
});

describe("PICTURES ACTIONS", () => {
    it("should create FETCH_PICTURES when fetching pictures has been done", () => {
        const data = ["t", "e", "s", "t"];
        const expectedAction = [{ type: types.FETCH_PICTURES, payload: data }];

        nock(host).get("/api/admin/pictures").reply(200, data);

        return store.dispatch(actions.fetchPictures()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create FETCH_PICTURE when fetching picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };
        const expectedAction = [{ type: types.FETCH_PICTURE, payload: data }];

        nock(host).get("/api/admin/picture/123").reply(200, data);

        return store.dispatch(actions.fetchPicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create POST_PICTURE_SUCCESS when posting picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };
        const expectedAction = [{ type: types.POST_PICTURE_SUCCESS }];

        nock(host).post("/api/admin/picture", payload).reply(200, data);

        return store.dispatch(actions.postPicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create DELETE_PICTURE when deleting picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };
        const expectedAction = [{ type: types.DELETE_PICTURE, payload: data }];

        nock(host).delete("/api/admin/picture/123").reply(200, data);

        return store.dispatch(actions.deletePicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create UPDATE_PICTURE_SUCCESS when updating picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };
        const expectedAction = [{ type: types.UPDATE_PICTURE_SUCCESS }];

        nock(host).patch("/api/admin/picture/123", payload).reply(200, data);

        return store.dispatch(actions.updatePicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
