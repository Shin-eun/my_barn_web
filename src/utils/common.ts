//원하는 검색 값 url에 셋팅
export const searchAddFunc = (key : string, value : number | string, searchUrl : string | null ) => {
    const pathname = window.location.pathname;
    let search : string | string[] = searchUrl ? searchUrl?.split("&") : window.location.search?.split("&"); //url에 search값 가져오기
    let newSearch = `${pathname}?${key}=${value}` //page값을 제외한 search값 문자열 담을 변수
    console.log('search', search)
    if(search && search[0] !== "" && search.length > 0){ //search값이 있는지 판단하기
      //search에 page값이 아닌 다른 search keyword를 string으로 연결하기
      const isLargeNumber = (element :any) => element.indexOf(`${key}=`) > -1;
      let index = search.findIndex(isLargeNumber)
      console.log('indexSearch', search[index])
  
      if(search[index]){ 
        const splitSearch = search[index].split("=");
        splitSearch[1] = value.toString();
        search[index] = splitSearch.join("=");
        newSearch = search.join("&")
      }else{
        newSearch = search.join("&") + `&${key}=${value}`
      }
    }
  
    console.log('newSearch', newSearch)
  
    //newSearch값이 ""이면 pathname에 "?"를 붙혀서 셋팅 아닐경우 "&"으로 붙히기
    const url = newSearch;
  
    return url;
  }


  //url에서 원하는 search값 가져오기
export const searchGet = (cate : string) => {
    const urlSearch = window.location.search; //url에 search값 가져오기
    if(urlSearch && urlSearch !== ""){ //search값이 있는지 판단하기
      const search = urlSearch?.split("&"); //search값에 "&"로 제외하여 배열로 만들기 
      const getCateArr = search?.filter((text : any)=>text.indexOf(cate) > -1); //배열 중에 원하는(cate)값이 포함된 배열 가져오기 
      const getCate = getCateArr[0]?.split(`${cate}=`)[1]; //배열에서 cate포함된 = 문자열 잘라서 순수 search값 추출하기
      console.log('getCate', decodeURI(getCate))
      return getCate && decodeURI(getCate);
    }
  }