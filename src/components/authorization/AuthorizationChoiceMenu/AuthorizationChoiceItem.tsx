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
      <button
        className="list-none w-64 h-16 bg-green-700 focus:outline-none text-white"
        onClick={onClickHandler}
      >
        {title}
      </button>
    </li>
  );
};

export default AuthorizationChoiceItem;
