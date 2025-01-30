# 🌟 ri-ui-kit

[![npm version](https://img.shields.io/npm/v/ri-ui-kit)](https://www.npmjs.com/package/ri-ui-kit)
[![Storybook](https://img.shields.io/badge/Storybook-Live-blue?logo=storybook)](https://ri-ui-kit.vercel.app)

**Модульный UI Kit для React**, который помогает быстро разрабатывать интерфейсы.

---

## 📦 Установка

Установите пакет через **npm** или **yarn**:

```sh
npm install ri-ui-kit
# или
yarn add ri-ui-kit
```

## 🚀 Быстрый старт

1️⃣ Импортируйте нужные компоненты в проекте:

```typescript jsx
import { Button } from "ri-ui-kit";

export default function App() {
  return <Button label="Click Me" />;
}
```

2️⃣ Подключите стили (если нужно вручную):
```typescript jsx
import "ri-ui-kit/styles/global.css";  // Подключает глобальные стили
import "ri-ui-kit/styles/theme.css";   // Подключает темы
```

## 📌 Зависимости

Этот UI Kit требует:
 - React ^18.0.0
 - TypeScript ^5.0.0
 - clsx ^2.0.0 (для объединения классов)

## 🛠 Разработка и Storybook

Если хотите разрабатывать UI Kit локально:

```shell
git clone https://github.com/ahrik/ri-ui-kit.git
cd ri-ui-kit
npm install
npm run storybook
```