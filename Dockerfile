# Используем официальный Node.js образ для сборки
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем остальные файлы проекта
COPY . .

# Сборка Next.js приложения
RUN npm run build

# Устанавливаем минимальный образ для продакшена
FROM node:18-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Создаем пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Копируем только необходимые файлы из сборки
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

# Устанавливаем права доступа
RUN chown -R nextjs:nodejs /app
USER nextjs

# Задаем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD ["node", "server.js"]
