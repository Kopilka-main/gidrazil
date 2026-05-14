# гидразил — детейлинг-студия

Сайт детейлинг-студии на Astro. Автодеплой на GitHub Pages при каждом `git push`.

- Репозиторий: https://github.com/Kopilka-main/gidrazil
- Сайт: https://hydrazil.ru

## Структура

```
src/pages/
  index.astro              # /        Лендинг — все разделы
  service.astro            # /service?s=slug — страница услуги
public/assets/
  css/styles.css           # стили (премиум-минимализм, белая бумага + акцент)
  js/data.js               # услуги, акции, прайс-матрица, авто, доп. оборудование
  js/main.js               # карусель, прайс-калькулятор, форма, плейсхолдер-SVG
.github/workflows/deploy.yml
```

## Где править контент

- Услуги, акции, цены, авто — `public/assets/js/data.js`
- Стили — `public/assets/css/styles.css`
- Тексты разделов — `src/pages/index.astro`
- Тексты страницы услуги — `src/pages/service.astro`

## Локальный запуск (нужен Node.js 20+)

```
npm install
npm run dev
```

## Деплой

Запусти `deploy.bat` (или `git push`) — GitHub Actions соберёт и опубликует.
