// Внешние библиотеки
import { useDispatch, useSelector } from "react-redux";

// Локальные модули
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
