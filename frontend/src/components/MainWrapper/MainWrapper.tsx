import style from "./Main.module.scss";

type MainWrapperProps = {
  children: React.ReactNode;
};

export const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return <div className={style.wrap}>{children}</div>;
};
