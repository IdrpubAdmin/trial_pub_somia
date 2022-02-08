JSONObject jsonObj = new JSONObject();
JSONObject jsonObj2 = null;
JSONArray jsonArray = new JSONArray();
 
//1번째 데이터
jsonObj2 = new JSONObject();
jsonObj2.put("title", "후기 올려봐용 ㅎㅎ");
jsonObj2.put("writer", "하지수");
jsonObj2.put("date", "2022-02-08");
jsonObj2.put("star", "별하나");
jsonArray.add(jsonObj2);
 
//2번째 데이터
jsonObj2 = new JSONObject();
jsonObj2.put("title", "후기 올려봐용 ㅎㅎㅋ");
jsonObj2.put("writer", "하지수");
jsonObj2.put("date", "2022-02-08");
jsonObj2.put("star", "별두개");
jsonArray.add(jsonObj2);
 
PrintWriter pw = response.getWriter();
pw.print(jsonArray);
pw.flush();
pw.close();


//현재페이지
String current_page = request.getParameter("page");
//한페이지에 최대 몇개의 row 출력(mysql의 limit에 속하는데이터)
String numper_page = request.getParameter("rows");
JSONObject jsonObj = new JSONObject();
JSONObject jsonObj2 = null;
JSONArray jsonArray = new JSONArray();
     
if(current_page.equals("1")) {
    jsonObj2 = new JSONObject();
    jsonObj2.put("title", "후기 올려봐용 ㅎㅎ");
    jsonObj2.put("writer", "하지수");
    jsonObj2.put("date", "2022-02-08");
    jsonObj2.put("star", "별하나");
    jsonArray.add(jsonObj2);
     
    jsonObj2 = new JSONObject();
    jsonObj2.put("title", "후기 올려봐용 ㅎㅎ");
    jsonObj2.put("writer", "하지수");
    jsonObj2.put("date", "2022-02-08");
    jsonObj2.put("star", "별하나");
    jsonArray.add(jsonObj2);
} else if(current_page.equals("2")) {
    jsonObj2 = new JSONObject();
    jsonObj2.put("title", "후기 올려봐용 ㅎㅎ");
    jsonObj2.put("writer", "하지수");
    jsonObj2.put("date", "2022-02-08");
    jsonObj2.put("star", "별하나");
    jsonArray.add(jsonObj2);
     
    jsonObj2 = new JSONObject();
    jsonObj2.put("title", "후기 올려봐용 ㅎㅎ");
    jsonObj2.put("writer", "하지수");
    jsonObj2.put("date", "2022-02-08");
    jsonObj2.put("star", "별하나");
    jsonArray.add(jsonObj2);
}
 
//현재페이지의 목록데이터
jsonObj.put("rows", jsonArray);
//현재페이지
jsonObj.put("page", current_page);
//총페이지수
jsonObj.put("total", 2);
//총글목록수
jsonObj.put("records", 4);
PrintWriter pw = response.getWriter();
pw.print(jsonObj);
pw.flush();
pw.close();

