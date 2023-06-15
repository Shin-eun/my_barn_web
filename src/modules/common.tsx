//object 값 업데이트
const updateObject = (oldObject: any, newValues: any) => {
  return Object.assign({}, oldObject, newValues);
};

//action
export const SET_POPUP = "SET_POPUP";
export const set_popup = (popup: any) => {
  return {
    type: SET_POPUP,
    param: popup,
  };
};
export const SET_USER_INDEX = "SET_USER_INDEX";
export const set_user_index = (usridx: any) => {
  return {
    type: SET_USER_INDEX,
    param: usridx,
  };
};
export const SET_PROGRAM_INDEX = "SET_PROGRAM_INDEX";
export const set_program_index = (programidx: any) => {
  return {
    type: SET_PROGRAM_INDEX,
    param: programidx,
  };
};
export const SET_AUTHORITY = "SET_AUTHORITY";
export const set_authority = (authority: any) => {
  return {
    type: SET_AUTHORITY,
    param: authority,
  };
};

type Type = {
  popup: {
    open: boolean;
    desc: string;
    onClick: () => void;
    isCloseBtn: boolean;
  };
  usridx: number;
  programidx: number | null;
  authority: {
    optionconfigyn: boolean;
    accountconfigyn: boolean;
    adminconfigyn: boolean;
  };
};

const initialState: Type = {
  popup: {
    open: false,
    desc: "",
    onClick: () => null,
    isCloseBtn: false,
  },
  usridx: 0,
  programidx: null,
  authority: {
    optionconfigyn: false, //옵션 설정
    accountconfigyn: false, //센터 설정
    adminconfigyn: false, //관리자 설정
  },
};

const common = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_POPUP":
      return updateObject({ ...state }, { popup: action.param });
    case "SET_USER_INDEX":
      return updateObject({ ...state }, { usridx: action.param });
    case "SET_PROGRAM_INDEX":
      return updateObject({ ...state }, { programidx: action.param });
    case "SET_AUTHORITY":
      return updateObject({ ...state }, { authority: action.param });

    default:
      return state;
  }
};

export default common;
