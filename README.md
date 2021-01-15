login +7 (988) 044-22-42
password 55555



<h1> Таски </h1>

    1)Необходимо использовать Axios для обращения к серверу, React-router-dom для роутинга, Redux для state-management. <img width='30' height='30' src         ='https://img.icons8.com/metro/452/checkmark.png'>


    2)'-/' -главная страница, для вывода информации о пользователя, приватный роут
    '/signup' - регистрация, публичный роут
    '/login' - авторизация, публичный роут <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    3)На сервере используется JWT-авторизация, которая при успешном логине возвращает client_id пользователя, access_token, resfresh_token - для хранения необходимо использовать localStorage. <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    4)Если авторизованный пользователь переходит напрямую на /login или /signup - его нужно отправлять на главную, на приватный роут. <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'> (Изминенный кейс, если пользователь авторизован,
    то кнопка 'log in' меняется на 'log out')


    5)API регистрации - http://erp.apptrix.ru/api/clients/create/ . Обязательные поля - объект user (внутри email и password), invited_by - пригласительный код (использовать код RU-637164), name, surname, country_key (использовать RU). <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    6)Необходимо обработать ответ сервера по регистрации - в случае ошибок выводить их в alert’e, в случае успеха - alert об успешной регистрации и редирект на страницу авторизации. <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    7)API авторизации - http://erp.apptrix.ru/api/clients/token/ . Принимает username и password, в случае успеха возвращает токены и client_id. Необходимо предусмотреть interceptor (middleware в axios’е), который будет подставлять в каждый запрос заголовок - Authorization: Bearer #TOKEN#,  где #TOKEN# - полученный access_token при авторизации. (если юзер не авторизован, то заголовок не подставляем, соответственно) <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    8)Также нужно проверять ответ сервера при КАЖДОМ запросе, и в случае 401 - пытаться обновить access_token по refresh_token’у (метод в API - http://erp.apptrix.ru/api/clients/token/refresh/ , принимает refresh_token). Если по этому методу приходит ошибка - чистить localstorage и отправлять на страницу авторизации. <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    9)На главной странице по роуту / необходимо запросить и вывести информацию об авторизованном юзере из метода http://erp.apptrix.ru/api/clients/RU-000000/ , где вместо RU-000000 - client_id текущего клиента. <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    10) Тестирование <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    11) Адаптивная вёрстка <img width='30' height='30' src ='https://img.icons8.com/metro/452/checkmark.png'>


    ps: без поддержки Internet Explorer
