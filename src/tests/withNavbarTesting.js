import React from 'react';

const withNavbarTesting = (Component) => {
  const WrappedComponent = (props) => {
    // Добавить здесь необходимую функциональность или обертку вокруг NavBar

    // Пример: Добавление тестовых атрибутов для проверки активного пункта меню
    return <Component {...props} data-testid="header" />;
  };

  return WrappedComponent;
};

export default withNavbarTesting;
