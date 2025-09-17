'use client';

import {useEffect, useState} from "react";

export default function TgDebug() {
  const [tgData, setTgData] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setTgData({
        initData: tg.initData,                   // Подписанные данные от Telegram для проверки на бэке. Менять нельзя!
        initDataUnsafe: tg.initDataUnsafe,       // То же самое, но без подписи. Можно использовать для UI, но не для авторизации.
        version: tg.version,                     // Версия Bot API, которую поддерживает клиент.
        platform: tg.platform,                   // Платформа Telegram (tdesktop, android, ios, web).
        colorScheme: tg.colorScheme,             // Текущая цветовая схема ("light"/"dark").
        themeParams: tg.themeParams,             // Текущие цвета интерфейса Telegram, можно использовать для UI.
        isExpanded: tg.isExpanded,               // Мини-приложение развернуто на весь экран.
        viewportHeight: tg.viewportHeight,       // Высота видимой части приложения.
        viewportStableHeight: tg.viewportStableHeight, // Высота в стабильном состоянии (без анимаций).
        safeAreaInset: tg.safeAreaInset,         // Отступы для безопасной зоны устройства (notch, navbar).
        contentSafeAreaInset: tg.contentSafeAreaInset, // Отступы для контента без перекрытия UI Telegram.
        isClosingConfirmationEnabled: tg.isClosingConfirmationEnabled, // Включена ли проверка при закрытии.
        isVerticalSwipesEnabled: tg.isVerticalSwipesEnabled, // Можно ли закрывать свайпами.
        isFullscreen: tg.isFullscreen,           // Мини-приложение в полноэкранном режиме.
        isOrientationLocked: tg.isOrientationLocked, // Ориентация заблокирована.
        isActive: tg.isActive,                   // Мини-приложение активно.
        headerColor: tg.headerColor,             // Цвет хедера приложения.
        backgroundColor: tg.backgroundColor,     // Цвет фона приложения.
        bottomBarColor: tg.bottomBarColor,       // Цвет нижней панели.
        BackButton: tg.BackButton,               // Управление кнопкой "Назад".
        MainButton: tg.MainButton,               // Управление основной кнопкой.
        SecondaryButton: tg.SecondaryButton,     // Управление вторичной кнопкой.
        SettingsButton: tg.SettingsButton,       // Управление кнопкой настроек.
        HapticFeedback: tg.HapticFeedback,       // Вибро/тактическая отдача.
        CloudStorage: tg.CloudStorage,           // Работа с облачным хранилищем.
        DeviceStorage: tg.DeviceStorage,         // Работа с локальным хранилищем устройства.
        SecureStorage: tg.SecureStorage,         // Работа с защищённым локальным хранилищем.
        BiometricManager: tg.BiometricManager,   // Доступ к биометрии.
        Accelerometer: tg.Accelerometer,         // Датчик ускорения.
        DeviceOrientation: tg.DeviceOrientation, // Датчик ориентации устройства.
        Gyroscope: tg.Gyroscope,                 // Гироскоп.
        LocationManager: tg.LocationManager      // Геолокация устройства.
      });
    }
  }, []);

  return (
    <div className="p-2 text-xs max-w-full space-y-2">
      <div>
        <strong>initData:</strong>
        <pre>{tgData.initData}</pre>
        {/* Подписанные данные от Telegram. Используются для проверки на бэке. Менять нельзя! */}
      </div>

      <div>
        <strong>initDataUnsafe:</strong>
        <pre>{JSON.stringify(tgData.initDataUnsafe, null, 2)}</pre>
        {/* Не подписанные данные. Можно использовать для UI, но не для авторизации. */}
      </div>

      <div>
        <strong>version / platform / colorScheme:</strong>
        <pre>{JSON.stringify({
          version: tgData.version,
          platform: tgData.platform,
          colorScheme: tgData.colorScheme
        }, null, 2)}</pre>
        {/* Информация о версии Telegram, платформе и схеме цветов */}
      </div>

      <div>
        <strong>themeParams:</strong>
        <pre>{JSON.stringify(tgData.themeParams, null, 2)}</pre>
        {/* Текущие цвета интерфейса Telegram, можно использовать для UI */}
      </div>

      <div>
        <strong>UI и состояние приложения:</strong>
        <pre>{JSON.stringify({
          isExpanded: tgData.isExpanded,
          viewportHeight: tgData.viewportHeight,
          viewportStableHeight: tgData.viewportStableHeight,
          safeAreaInset: tgData.safeAreaInset,
          contentSafeAreaInset: tgData.contentSafeAreaInset,
          isClosingConfirmationEnabled: tgData.isClosingConfirmationEnabled,
          isVerticalSwipesEnabled: tgData.isVerticalSwipesEnabled,
          isFullscreen: tgData.isFullscreen,
          isOrientationLocked: tgData.isOrientationLocked,
          isActive: tgData.isActive,
          headerColor: tgData.headerColor,
          backgroundColor: tgData.backgroundColor,
          bottomBarColor: tgData.bottomBarColor
        }, null, 2)}</pre>
      </div>

      <div>
        <strong>Кнопки и взаимодействие:</strong>
        <pre>{JSON.stringify({
          BackButton: tgData.BackButton,
          MainButton: tgData.MainButton,
          SecondaryButton: tgData.SecondaryButton,
          SettingsButton: tgData.SettingsButton
        }, null, 2)}</pre>
        {/* Управление кнопками: видимость, текст, цвет, прогресс */}
      </div>

      <div>
        <strong>Сервисы и датчики:</strong>
        <pre>{JSON.stringify({
          HapticFeedback: tgData.HapticFeedback,
          CloudStorage: tgData.CloudStorage,
          DeviceStorage: tgData.DeviceStorage,
          SecureStorage: tgData.SecureStorage,
          BiometricManager: tgData.BiometricManager,
          Accelerometer: tgData.Accelerometer,
          DeviceOrientation: tgData.DeviceOrientation,
          Gyroscope: tgData.Gyroscope,
          LocationManager: tgData.LocationManager
        }, null, 2)}</pre>
        {/* Различные сенсоры и хранилища устройства */}
      </div>
    </div>
  );
}
