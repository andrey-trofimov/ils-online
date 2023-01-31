function TaskDescription() {
  return (
    <div style={{ maxWidth: "500px" }}>
      <p>
        Требуется реализовать приложение по отображению заявок на перевозку на
        карте.
      </p>

      <p>
        Используя заданный набор заявок (таблица 1), реализовать экран, в
        котором слева будет таблица со списком заявок, а справа карта. При
        выборе в таблице строки с заявкой, выбранная строка должна подсветиться,
        а на карте отобразиться точки погрузки и разгрузки заявки в виде
        маркеров и полилиния трека движения между этими точками, полученная из
        сервиса построения треков по дорогам OSRM (или другой). При выборе
        заявки, на карте происходит масштабирование таким образом, чтобы весь
        маршрут попал в область видимости карты. Одновременно на карте может
        отображаться только один маршрут - выбранный.
      </p>

      <p>
        Для отображения карты желательно использовать пакет Leaflet, для
        компонентов — AntdDesign, для хранения стейта компонентов и данных
        обязательно использовать Redux (redux-toolkit), для реакции на события —
        Saga. В качестве основы приложения желательно использовать React Create
        App. Использовать только функциональные компоненты. Применить разделение
        кода на функциональные слои: components, selectors, reducers, sagas,
        HTTP. Обязательно задействовать saga для получения трека по точкам, а
        также HTTP-сервис для обращения к API построения треков. CSS-стили
        допускается писать в препроцессоре SASS/LESS.
      </p>

      <p>
        Решение требуется предоставить в виде исходного кода, готового для
        развертывания на веб-сервере (приложить файловый архив или ссылку на
        github, например). Приложение нужно писать чисто и аккуратно, используя
        известные паттерны, сразу с рефакторингом - код будет проверяться по
        аналогии с ревью в prod.
      </p>

      <p>
        Для получения polyline маршрута можно использовать API OSRM:&nbsp;
        <a
          href="http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service"
          target={"blnk"}
        >
          http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service
        </a>
      </p>
    </div>
  );
}

export default TaskDescription;
