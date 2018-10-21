# Как запустить

## Проект
```sh
git clone git@github.com:dima117/shri-testing-homework.git
cd shri-testing-homework.git
npm i
npm start
```
## Модульные тесты
```sh
npm test
```

# Логические блоки:
1)Контролееры (index,files,content controllers)
2)Utils(вспомогательные функции) (navigation и git.js)
3)Api (gitHistory, gitFileTree, gitFileContent)
4)Views (breadcrumbs)
5)app.js (точка старта)


# Сценарии модульных тестов:
## utils (git.js)
1)git.js
- Была произведена проверка парсинга (1 тест) и проверка правильности формата возращаемых данных в gitHistory (2 теста).
2)navigation.js
- Была произведена проверка правильности формирования хлебных крошек (2 теста, с и без hash) и проверка правильности возврата пути файла/папки по хэшу (2 теста).
## controllers
1)indexController
- Была произведена проверка правильности создания ссылки (1 тест).
2)FilesController
- Была произведена проверка правильности создания файла (1 тест).