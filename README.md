*** Климочкина Ксения Б19-302

**Отчет**

**Постановка задачи**

Основной задачей моего проекта является отправка изображений на отладочный веб-сервер Django с графическими примитивами

**Использованные технологии**

- HTML - интерфейс сайта
- JavaScript - отрисовка графических примитивов
- Django - развертывание веб-сервера

**Интерфейс**

Основные компонуемые:

- Кисть для нанесения графических примитивов
- Кнопка очистки нанесенных примитивов
- Кнопка загрузки изображения
- Кнопка загрузки изображения на сервер

**Работа программы**

![4](pic/4.png) 
![3](pic/3.png)

Нанесение графических примитивов различных цветов и размеров

![2](pic/2.png) 
![1](pic/1.png)

Сохранение нового изображения

**Настройки settings.py**

Добавлено приложение ‘page’ для работы решения

Подключена папка ‘static’ для использования JavaScript

Подключена папка ‘media’ для сохранения изображений

**Настройка urls.py**

Настроена маршрутизация по сайту

**Маршрутизация**

Настроена маршрутизация в самом приложении

Используются два адреса:

‘page’ используется для отображения интерфейса приложения

‘save pic’ используется для сохранения изображения на сервере

**Файл views.py**

Функция ‘save pic’ принимает изображение через POST запрос в формате dataURL и декодирует его в изображение и сохраняет в отдельную папку с индивидуальным названием. 

Функция ‘page’ отображает page.html

**Файл page.html**

Архитектура файла

Программа создает полотно, на котором прорисовываются графические примитивы и на которое загружается изображение.

Далее представлено описание настройки кисти и добавление функциональных кнопок.

**Файл draw.js**

В этой файле находятся функции отрисовки и загрузки изображения. 

На слайд вынесена часть кода, который отвечает за отправку изображения с графическими примитивами на веб-сервер.

Ссылка на - > [github ](https://github.com/Xysha/h3/blob/main/README.md)

