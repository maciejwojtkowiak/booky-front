interface AuthorizationChoiceItemProps {
    onClickHandler: () => void;
    title: string; 
}

const AuthorizationChoiceItem = ({onClickHandler, title}: AuthorizationChoiceItemProps) => {
    return <li><button onClick={onClickHandler}>{title}</button></li>
}

export default AuthorizationChoiceItem;