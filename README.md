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
1)Контролееры (index,files,content controllers) <br />
2)Utils(вспомогательные функции) (navigation и git.js) <br />
3)Api (gitHistory, gitFileTree, gitFileContent) <br />
4)Views (breadcrumbs) <br />
5)app.js (точка старта) <br />


# Сценарии модульных тестов:
## utils (git.js)
1) git.js <br />
- Была произведена проверка парсинга (1 тест) и проверка правильности формата возращаемых данных в gitHistory (2 теста). <br />
2)navigation.js <br />
- Была произведена проверка правильности формирования хлебных крошек (2 теста, с и без hash) и проверка правильности возврата пути файла/папки по хэшу (2 теста). <br />
## controllers
1) indexController <br />
- Была произведена проверка правильности создания ссылки (1 тест). <br />
2)FilesController <br />
- Была произведена проверка правильности создания файла (1 тест). <br />