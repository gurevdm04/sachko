import style from "./Button.module.scss";

type ButtonProps = {
  label: string; // текст кнопки
  onClick: () => void; // обработчик клика
  disabled?: boolean; // состояние кнопки
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={style.btn}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
};
