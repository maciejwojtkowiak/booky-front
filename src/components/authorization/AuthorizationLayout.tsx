const AuthorizationLayout = (): JSX.Element => {
  return (
    <div id="api">
      <form id="localAccountForm">
        <input id="email" type="email" placeholder="email" />
        <input id="password" type="password" placeholder="password" />
        <button type="submit" id="next">
          Sign in
        </button>
      </form>
      <button id="MicrosoftAccountExchange" role="link">
        Microsoft
      </button>
    </div>
  );
};

export default AuthorizationLayout;
