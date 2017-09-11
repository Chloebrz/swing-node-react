// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions";
import * as types from "../../actions/types";

const host = "http://localhost";

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
    it("should create FETCH_USER when fetching user has been done", () => {
        const user = { id: 123 };

        nock(host).get("/api/current_user").reply(200, user);

        const expectedAction = [{ type: types.FETCH_USER, payload: user }];
        const store = mockStore({ auth: null });

        return store.dispatch(actions.fetchUser()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create FETCH_PICTURES when fetching pictures has been done", () => {
        const data = ["t", "e", "s", "t"];

        nock(host).get("/api/admin/pictures").reply(200, data);

        const expectedAction = [{ type: types.FETCH_PICTURES, payload: data }];
        const store = mockStore({ pictures: [] });

        return store.dispatch(actions.fetchPictures()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create FETCH_PICTURE when fetching picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };

        nock(host).get("/api/admin/picture/123").reply(200, data);

        const expectedAction = [{ type: types.FETCH_PICTURE, payload: data }];
        const store = mockStore({ pictures: [] });

        return store.dispatch(actions.fetchPicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create POST_PICTURE_SUCCESS when posting picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };

        nock(host).post("/api/admin/picture", payload).reply(200, data);

        const expectedAction = [{ type: types.POST_PICTURE_SUCCESS }];
        const store = mockStore({ pictures: [] });

        return store.dispatch(actions.postPicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create DELETE_PICTURE when deleting picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };

        nock(host).delete("/api/admin/picture/123").reply(200, data);

        const expectedAction = [{ type: types.DELETE_PICTURE, payload: data }];
        const store = mockStore({ pictures: [] });

        return store.dispatch(actions.deletePicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create UPDATE_PICTURE_SUCCESS when updating picture has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };

        nock(host).patch("/api/admin/picture/123", payload).reply(200, data);

        const expectedAction = [{ type: types.UPDATE_PICTURE_SUCCESS }];
        const store = mockStore({ pictures: [] });

        return store.dispatch(actions.updatePicture(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_SUCCESS when signing up user has been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: true };

        nock(host).post("/auth/signup", payload).reply(200, data);

        const expectedAction = [{ type: types.SIGNUP_LOGIN_SUCCESS }];
        const store = mockStore({ success: {} });

        return store.dispatch(actions.signupUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_ERROR when signing up user has not been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: false, errors: "errors" };

        nock(host).post("/auth/signup", payload).reply(200, data);

        const expectedAction = [{ type: types.SIGNUP_LOGIN_ERROR, payload: data.errors }];
        const store = mockStore({ errors: {} });

        return store.dispatch(actions.signupUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_SUCCESS when logging in user has been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: true };

        nock(host).post("/auth/login", payload).reply(200, data);

        const expectedAction = [{ type: types.SIGNUP_LOGIN_SUCCESS }];
        const store = mockStore({ success: {} });

        return store.dispatch(actions.loginUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_ERROR when logging up user has not been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: false, errors: "errors" };

        nock(host).post("/auth/login", payload).reply(200, data);

        const expectedAction = [{ type: types.SIGNUP_LOGIN_ERROR, payload: data.errors }];
        const store = mockStore({ errors: {} });

        return store.dispatch(actions.loginUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
