import React, { createContext, useContext, useState, useEffect } from 'react';
// API Base URL
const API_BASE = 'http://localhost:3000';

export const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
