interface AuthorizationChoiceItemProps {
  onClickHandler: () => void;
  title: string;
}

const AuthorizationChoiceItem = ({
  onClickHandler,
  title,
}: AuthorizationChoiceItemProps): JSX.Element => {
  return (
    <li>
      <button className="list-none w-64 h-16 bg-slate-400 focus:outline-none" onClick={onClickHandler}>{title}</button>
    </li>
  );
};

export default AuthorizationChoiceItem;
