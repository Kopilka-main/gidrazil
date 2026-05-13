# gidrazil — сайт автомойки

Многостраничный сайт на Astro. Автодеплой на GitHub Pages при каждом `git push`.

- Репозиторий: https://github.com/Kopilka-main/gidrazil
- Сайт: https://kopilka-main.github.io/gidrazil/

## Структура

```
src/
  layouts/BaseLayout.astro     # общий шаблон (хедер, футер, стили)
  components/                  # переиспользуемые куски
  pages/
    index.astro                # /        Главная
    prices.astro               # /prices  Цены
    portfolio.astro            # /portfolio  Портфолио
    contacts.astro             # /contacts  Контакты + форма
public/                        # статика (favicon, .nojekyll и т.п.)
.github/workflows/deploy.yml   # автодеплой при push в main
```

## Локальный запуск (нужен Node.js 20+)

```
npm install
npm run dev          # запускает локальный сервер на http://localhost:4321
```

## Деплой

Просто запусти `deploy.bat` (или сделай `git push`) — GitHub Actions сам соберёт и опубликует сайт.
