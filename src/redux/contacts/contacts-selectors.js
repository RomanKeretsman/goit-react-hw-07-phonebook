import { createSelector } from '@reduxjs/toolkit'; // Импорт функции для мемоизации селектора

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;

// Мемоизация функции фильтра контактов
const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getfilteredContacts,
};
