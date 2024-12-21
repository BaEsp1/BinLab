import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

const URL = import.meta.env.VITE_URL_DEL_BACKEND;

export interface PriceFluctuation {
  date: string;
  value: number;
}
export interface Initiative {
  id: number;
  name: string;
  priceFluctuation: PriceFluctuation[]
  colaborator: number;
  tokens: string;
  missions: string;
  likes: number;
  shares: number;
  createdAt: string;
  logo: string;
  idea: string;
  opportunity: string;
  problem: string;
  solution: string;
  buy_price: number;
  sell_price: number;
}

interface InitiativesState {
  initiatives: Initiative[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortCriteria: 'name' | 'collaborator' | 'buy_price' | 'sell_price' | 'likes' | 'shares';
  sortOrder: 'asc' | 'desc';
}

const initialState: InitiativesState = {
  initiatives: [],
  loading: false,
  error: null,
  filter: '',
  sortCriteria: 'name', 
  sortOrder: 'asc',
};

export const fetchInitiatives = createAsyncThunk(
  'initiatives/fetchInitiatives',
  async () => {
    try {
      const response = await axios.get(`${URL}/api/iniciativa/getAllIniciativas`)
      return response.data ;  
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const showInitiativesSlice = createSlice({
  name: 'initiatives',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortCriteria: (state, action) => {
      state.sortCriteria = action.payload; 
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitiatives.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInitiatives.fulfilled, (state, action) => {
        state.loading = false;
        state.initiatives = action.payload;
      })
      .addCase(fetchInitiatives.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error desconocido';
      });
  },
});

export const { setFilter, setSortOrder , setSortCriteria} = showInitiativesSlice.actions;

export const selectFilteredAndSortedInitiatives = (state: RootState) => {
  const { initiatives, filter, sortCriteria, sortOrder } = state.initiatives;


  const filteredInitiatives = initiatives.filter((initiative: Initiative) =>
    initiative.name.toLowerCase().includes(filter.toLowerCase())
  );


  const sortedInitiatives = filteredInitiatives.sort((a: Initiative, b: Initiative) => {
    let comparison = 0;

    switch (sortCriteria) {
      case 'name':
        comparison = a.name.localeCompare(b.name); 
        break;
      case 'collaborator':
        comparison = a.colaborator - b.colaborator;
        break;
      case 'buy_price':
        comparison = a.buy_price - b.buy_price;  
        break;
      case 'sell_price':
        comparison = a.sell_price - b.sell_price; 
        break; 
      case 'likes':
        comparison = a.likes - b.likes; 
        break;
      case 'shares':
        comparison = a.likes - b.likes;
        break;
      default:
        break;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return sortedInitiatives;
};

export default showInitiativesSlice.reducer;
